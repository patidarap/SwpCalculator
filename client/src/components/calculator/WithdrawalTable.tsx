import { formatCurrency } from "@/lib/formatters";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type WithdrawalTableProps = {
  data: Array<{
    year: number;
    openingBalance: number;
    withdrawals: number;
    growth: number;
    closingBalance: number;
  }>;
};

export default function WithdrawalTable({ data }: WithdrawalTableProps) {
  return (
    <div className="overflow-x-auto max-h-96">
      <Table>
        <TableHeader className="bg-neutral-50">
          <TableRow>
            <TableHead className="text-xs font-medium text-neutral-600 uppercase tracking-wider">Year</TableHead>
            <TableHead className="text-xs font-medium text-neutral-600 uppercase tracking-wider">Opening Balance</TableHead>
            <TableHead className="text-xs font-medium text-neutral-600 uppercase tracking-wider">Withdrawals</TableHead>
            <TableHead className="text-xs font-medium text-neutral-600 uppercase tracking-wider">Growth</TableHead>
            <TableHead className="text-xs font-medium text-neutral-600 uppercase tracking-wider">Closing Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.year}>
              <TableCell className="text-sm text-neutral-800">{row.year}</TableCell>
              <TableCell className="text-sm text-neutral-800">{formatCurrency(row.openingBalance)}</TableCell>
              <TableCell className="text-sm text-neutral-800">{formatCurrency(row.withdrawals)}</TableCell>
              <TableCell className="text-sm text-neutral-800">{formatCurrency(row.growth)}</TableCell>
              <TableCell className="text-sm text-primary">{formatCurrency(row.closingBalance)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
