
import React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";

const ExpensesHeaderSection: React.FC = () => {
  return (
    <TableRow className="border-b border-gray-300">
      <TableCell className="font-bold border border-gray-300 p-2" colSpan={2}>Operating Expenses</TableCell>
    </TableRow>
  );
};

export default ExpensesHeaderSection;
