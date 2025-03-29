import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Printer } from "lucide-react";
import ProjectionChart from "./ProjectionChart";
import WithdrawalTable from "./WithdrawalTable";
import ResultsSummary from "./ResultsSummary";
import { formatCurrency } from "@/lib/formatters";
import { useReactToPrint } from "react-to-print";

type CalculatorResultsProps = {
  results: {
    totalInvestment: number;
    totalWithdrawal: number;
    finalBalance: number;
    growthPercentage: number;
    yearlyData: Array<{
      year: number;
      openingBalance: number;
      withdrawals: number;
      growth: number;
      closingBalance: number;
    }>;
    balanceData: number[];
    withdrawalData: number[];
  };
};

export default function CalculatorResults({ results }: CalculatorResultsProps) {
  const printRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "SWP_Calculation_Results",
    onAfterPrint: () => console.log("Printed successfully"),
  });
  
  const handleDownload = () => {
    // Create CSV content
    const headers = "Year,Opening Balance,Withdrawals,Growth,Closing Balance\n";
    const rows = results.yearlyData.map(
      row => `${row.year},${row.openingBalance},${row.withdrawals},${row.growth},${row.closingBalance}`
    ).join("\n");
    
    const csvContent = `${headers}${rows}`;
    
    // Create a blob and download it
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "swp_calculation.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="space-y-6" ref={printRef}>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl text-neutral-800">Results</h3>
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handlePrint}
            className="text-primary hover:text-primary/80"
            title="Print Results"
          >
            <Printer className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleDownload}
            className="text-primary hover:text-primary/80"
            title="Download Results as CSV"
          >
            <Download className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <ResultsSummary results={results} />
      
      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium text-neutral-700">Investment Projection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ProjectionChart 
              balanceData={results.balanceData} 
              withdrawalData={results.withdrawalData} 
              years={results.yearlyData.map(d => d.year)}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2 border-b">
          <CardTitle className="text-base font-medium text-neutral-700">Withdrawal Schedule</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <WithdrawalTable data={results.yearlyData} />
        </CardContent>
      </Card>
    </div>
  );
}
