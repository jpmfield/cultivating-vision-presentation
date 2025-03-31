
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const EbtSection: React.FC<{ operatingProfit: number }> = ({ operatingProfit }) => {
  return (
    <TableRow className="border-b border-gray-300">
      <TableCell className="font-bold border border-gray-300 p-2">Earnings Before Taxes</TableCell>
      <TableCell className="text-right font-bold border border-gray-300 p-2">{formatCurrency(operatingProfit)}</TableCell>
    </TableRow>
  );
};

export default EbtSection;
