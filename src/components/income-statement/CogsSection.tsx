
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const CogsSection: React.FC<{ totalVariableCosts: number }> = ({ totalVariableCosts }) => {
  return (
    <TableRow className="border-b border-gray-300">
      <TableCell className="border border-gray-300 p-2">COGS</TableCell>
      <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(totalVariableCosts)}</TableCell>
    </TableRow>
  );
};

export default CogsSection;
