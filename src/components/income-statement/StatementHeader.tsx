
import React from 'react';
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

const StatementHeader: React.FC = () => {
  return (
    <TableHeader>
      <TableRow className="border-b border-gray-300">
        <TableHead className="text-left font-bold border border-gray-300 p-2">USD$000</TableHead>
        <TableHead className="text-right font-bold border border-gray-300 p-2">FY</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default StatementHeader;
