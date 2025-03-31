
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const RevenueSection: React.FC<{ totalRevenue: number }> = ({ totalRevenue }) => {
  return (
    <TableRow className="border-b border-gray-300">
      <TableCell className="font-bold border border-gray-300 p-2">Revenue</TableCell>
      <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(totalRevenue)}</TableCell>
    </TableRow>
  );
};

export default RevenueSection;
