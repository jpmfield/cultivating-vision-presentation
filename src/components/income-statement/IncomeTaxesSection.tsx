
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency } from '@/utils/formatters';

const IncomeTaxesSection: React.FC = () => {
  return (
    <TableRow className="border-b border-gray-300">
      <TableCell className="border border-gray-300 p-2">Income Taxes</TableCell>
      <TableCell className="text-right border border-gray-300 p-2">{formatCurrency('-')}</TableCell>
    </TableRow>
  );
};

export default IncomeTaxesSection;
