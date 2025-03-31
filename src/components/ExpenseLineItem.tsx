
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';
import { cn } from '@/lib/utils';

interface ExpenseLineItemProps {
  name: string;
  value: number;
  className?: string;
  highlight?: boolean;
}

const ExpenseLineItem: React.FC<ExpenseLineItemProps> = ({ name, value, className, highlight = false }) => {
  return (
    <TableRow className={cn(
      "border-b border-gray-300", 
      highlight && "bg-secondary/20 font-medium",
      className
    )}>
      <TableCell className="pl-4 border border-gray-300 p-2">{name}</TableCell>
      <TableCell className={cn(
        "text-right border border-gray-300 p-2",
        highlight && "font-semibold"
      )}>
        {formatCurrency(value)}
      </TableCell>
    </TableRow>
  );
};

export default ExpenseLineItem;
