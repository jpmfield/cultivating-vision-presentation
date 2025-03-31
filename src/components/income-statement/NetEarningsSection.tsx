
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const NetEarningsSection: React.FC<{ operatingProfit: number }> = ({ operatingProfit }) => {
  return (
    <TableRow className="border-b-2 border-black bg-gray-100">
      <TableCell className="font-bold border border-gray-300 p-2">NET PROFIT</TableCell>
      <TableCell className="text-right font-bold border border-gray-300 p-2 text-green-600">{formatCurrency(operatingProfit)}</TableCell>
    </TableRow>
  );
};

export default NetEarningsSection;
