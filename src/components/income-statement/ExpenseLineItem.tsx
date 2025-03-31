
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';
import { cn } from '@/lib/utils';

interface ExpenseLineItemProps {
  name: string;
  value: number;
  className?: string;
}

const ExpenseLineItem: React.FC<ExpenseLineItemProps> = ({ name, value, className }) => {
  return (
    <TableRow className={cn("border-b border-gray-300", className)}>
      <TableCell className="pl-4 border border-gray-300 p-2">{name}</TableCell>
      <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(value)}</TableCell>
    </TableRow>
  );
};

export default ExpenseLineItem;
