import type { CalculatorFormValues } from "@/components/calculator/CalculatorForm";

export function calculateSWP(formData: CalculatorFormValues) {
  const {
    principal,
    returnRate,
    frequency,
    withdrawalType,
    withdrawalAmount,
    withdrawalPercentage,
    tenure,
    inflation,
    inflationRate = 0
  } = formData;

  // Convert percentage rates to decimals
  const rateOfReturn = returnRate / 100;
  const inflationRateDecimal = inflation ? inflationRate / 100 : 0;
  const withdrawalPercentageDecimal = withdrawalPercentage ? withdrawalPercentage / 100 : 0;
  
  // Determine frequency multiplier
  let periodsPerYear = 1;
  let withdrawalsPerYear = 1;
  
  if (frequency === "monthly") {
    periodsPerYear = 12;
    withdrawalsPerYear = 12;
  } else if (frequency === "quarterly") {
    periodsPerYear = 4;
    withdrawalsPerYear = 4;
  }
  
  const periodicRate = rateOfReturn / periodsPerYear;
  
  // Initialize calculation variables
  let balance = principal;
  let totalWithdrawal = 0;
  const yearlyData = [];
  const withdrawalData = [];
  const balanceData = [];
  
  // Calculate year by year
  for (let year = 1; year <= tenure; year++) {
    let yearlyWithdrawal = 0;
    const yearlyOpeningBalance = balance;
    
    // Calculate for each period within the year
    for (let period = 1; period <= periodsPerYear; period++) {
      // Calculate withdrawal for this period
      let periodWithdrawal = 0;
      
      if (withdrawalType === "amount" && withdrawalAmount) {
        // Adjust for inflation if enabled
        if (inflation) {
          periodWithdrawal = withdrawalAmount * Math.pow(1 + inflationRateDecimal, year - 1) / withdrawalsPerYear;
        } else {
          periodWithdrawal = withdrawalAmount / withdrawalsPerYear;
        }
      } else if (withdrawalType === "percentage") {
        periodWithdrawal = balance * withdrawalPercentageDecimal / withdrawalsPerYear;
      }
      
      // Ensure we don't withdraw more than available
      periodWithdrawal = Math.min(periodWithdrawal, balance);
      
      // Update balance and track withdrawals
      balance -= periodWithdrawal;
      yearlyWithdrawal += periodWithdrawal;
      totalWithdrawal += periodWithdrawal;
      
      // Calculate growth for this period
      const growth = balance * periodicRate;
      balance += growth;
    }
    
    // Calculate growth for reporting (closing balance - (opening balance - withdrawals))
    const yearlyGrowth = balance - (yearlyOpeningBalance - yearlyWithdrawal);
    
    // Store data for this year
    yearlyData.push({
      year,
      openingBalance: yearlyOpeningBalance,
      withdrawals: yearlyWithdrawal,
      growth: yearlyGrowth,
      closingBalance: balance
    });
    
    withdrawalData.push(yearlyWithdrawal);
    balanceData.push(balance);
  }
  
  // Calculate growth percentage
  const growthPercentage = ((balance / principal) - 1) * 100;
  
  return {
    totalInvestment: principal,
    totalWithdrawal,
    finalBalance: balance,
    growthPercentage,
    yearlyData,
    withdrawalData,
    balanceData
  };
}
