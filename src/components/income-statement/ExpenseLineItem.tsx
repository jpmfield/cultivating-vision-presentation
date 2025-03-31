
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

interface ExpenseLineItemProps {
  name: string;
  value: number;
}

const ExpenseLineItem: React.FC<ExpenseLineItemProps> = ({ name, value }) => {
  return (
    <TableRow className="border-b border-gray-300">
      <TableCell className="pl-4 border border-gray-300 p-2">{name}</TableCell>
      <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(value)}</TableCell>
    </TableRow>
  );
};

export default ExpenseLineItem;
