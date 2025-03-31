
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const TotalExpensesSection: React.FC<{ totalExpenses: number }> = ({ totalExpenses }) => {
  return (
    <TableRow className="border-b border-gray-300 bg-gray-100">
      <TableCell className="font-bold border border-gray-300 p-2">Total Expenses</TableCell>
      <TableCell className="text-right font-bold border border-gray-300 p-2 text-red-500">{formatCurrency(totalExpenses)}</TableCell>
    </TableRow>
  );
};

export default TotalExpensesSection;
