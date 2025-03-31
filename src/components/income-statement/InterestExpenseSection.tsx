
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const InterestExpenseSection: React.FC = () => {
  return (
    <TableRow className="border-b border-gray-300">
      <TableCell className="border border-gray-300 p-2">Interest Expense</TableCell>
      <TableCell className="text-right border border-gray-300 p-2">{formatCurrency('-')}</TableCell>
    </TableRow>
  );
};

export default InterestExpenseSection;
