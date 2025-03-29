import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatters";

type ResultsSummaryProps = {
  results: {
    totalInvestment: number;
    totalWithdrawal: number;
    finalBalance: number;
    growthPercentage: number;
  };
};

export default function ResultsSummary({ results }: ResultsSummaryProps) {
  const { totalInvestment, totalWithdrawal, finalBalance, growthPercentage } = results;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card className="bg-white border border-neutral-200 shadow-sm">
        <CardContent className="p-4">
          <p className="text-sm text-neutral-600 mb-1">Total Investment</p>
          <p className="text-xl font-bold text-neutral-800">
            {formatCurrency(totalInvestment)}
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white border border-neutral-200 shadow-sm">
        <CardContent className="p-4">
          <p className="text-sm text-neutral-600 mb-1">Total Withdrawal</p>
          <p className="text-xl font-bold text-secondary">
            {formatCurrency(totalWithdrawal)}
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white border border-neutral-200 shadow-sm">
        <CardContent className="p-4">
          <p className="text-sm text-neutral-600 mb-1">Final Balance</p>
          <p className="text-xl font-bold text-primary">
            {formatCurrency(finalBalance)}
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white border border-neutral-200 shadow-sm">
        <CardContent className="p-4">
          <p className="text-sm text-neutral-600 mb-1">Investment Growth</p>
          <p className="text-xl font-bold text-accent">
            {growthPercentage >= 0 ? "+" : ""}
            {growthPercentage.toFixed(1)}%
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
