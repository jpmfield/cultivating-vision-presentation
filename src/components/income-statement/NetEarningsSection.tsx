
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const NetEarningsSection: React.FC<{ operatingProfit: number }> = ({ operatingProfit }) => {
  return (
    <TableRow className="border-b-2 border-black">
      <TableCell className="font-bold border border-gray-300 p-2">Net Earnings</TableCell>
      <TableCell className="text-right font-bold border border-gray-300 p-2">{formatCurrency(operatingProfit)}</TableCell>
    </TableRow>
  );
};

export default NetEarningsSection;
