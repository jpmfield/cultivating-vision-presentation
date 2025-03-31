
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const GrossMarginSection: React.FC<{ grossProfit: number }> = ({ grossProfit }) => {
  return (
    <TableRow className="border-b border-gray-300">
      <TableCell className="font-bold border border-gray-300 p-2">Gross Margin</TableCell>
      <TableCell className="text-right font-bold border border-gray-300 p-2">{formatCurrency(grossProfit)}</TableCell>
    </TableRow>
  );
};

export default GrossMarginSection;
