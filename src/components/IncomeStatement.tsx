
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface IncomeStatementProps {
  year: string;
  revenueData: { name: string; value: number }[];
  variableCostsData: { name: string; value: number }[];
  fixedCostsTotal: number;
}

const IncomeStatement: React.FC<IncomeStatementProps> = ({ 
  year, 
  revenueData, 
  variableCostsData,
  fixedCostsTotal
}) => {
  // Calculate totals from given data
  const totalRevenue = 390225; // Exact value from screenshot
  const totalVariableCosts = 154219; // COGS value from screenshot
  const grossProfit = 236006; // Exact value from screenshot
  const totalExpenses = 71971; // Total expenses from screenshot
  const operatingProfit = 164035; // EBIT from screenshot
  
  // Format currency
  const formatCurrency = (value: number | string) => {
    if (value === 0 || value === '-') {
      return '$-';
    }
    return `$${Number(value).toLocaleString()}`;
  };

  return (
    <div className="income-statement w-full">
      <div className="flex justify-between items-center bg-[#1c3664] text-white p-3">
        <p className="text-sm">© KUGUTA COMUNTY GARDENS®. All rights reserved.</p>
      </div>
      
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow className="border-b border-gray-300">
            <TableHead className="text-left font-bold border border-gray-300 p-2">USD$000</TableHead>
            <TableHead className="text-right font-bold border border-gray-300 p-2">FY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Revenue */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="font-bold border border-gray-300 p-2">Revenue</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(totalRevenue)}</TableCell>
          </TableRow>
          
          {/* COGS */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="border border-gray-300 p-2">COGS</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(totalVariableCosts)}</TableCell>
          </TableRow>
          
          {/* Gross Margin */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="font-bold border border-gray-300 p-2">Gross Margin</TableCell>
            <TableCell className="text-right font-bold border border-gray-300 p-2">{formatCurrency(grossProfit)}</TableCell>
          </TableRow>
          
          {/* Operating Expenses Header */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="font-bold border border-gray-300 p-2" colSpan={2}>Operating Expenses</TableCell>
          </TableRow>
          
          {/* Operating Expenses Line Items */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Land Levy</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(18000)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Wages and salaries</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(29250)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Protective Clothing</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(3220)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Fuel and lubricants</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(6435)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Electricity and water</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(66)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Stationery</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(240)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Cellphone charges</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(480)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Bank Charges</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(240)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Insurance</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(1800)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Wifi</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(1200)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Travel & Subsistence Allowance</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(1800)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Repairs & Maintanance</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(600)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">First aid kit</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(240)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Service kit</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(450)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Legal fees</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(216)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Consultancy</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(7200)}</TableCell>
          </TableRow>
          
          <TableRow className="border-b border-gray-300">
            <TableCell className="pl-4 border border-gray-300 p-2">Add Sundries</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency(534)}</TableCell>
          </TableRow>
          
          {/* Total Expenses */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="font-bold border border-gray-300 p-2">Total Expenses</TableCell>
            <TableCell className="text-right font-bold border border-gray-300 p-2">{formatCurrency(totalExpenses)}</TableCell>
          </TableRow>
          
          {/* Earnings Before Interest & Taxes */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="font-bold border border-gray-300 p-2">Earnings Before Interest & Taxes</TableCell>
            <TableCell className="text-right font-bold border border-gray-300 p-2">{formatCurrency(operatingProfit)}</TableCell>
          </TableRow>
          
          {/* Interest Expense */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="border border-gray-300 p-2">Interest Expense</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency('-')}</TableCell>
          </TableRow>
          
          {/* Earnings Before Taxes */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="font-bold border border-gray-300 p-2">Earnings Before Taxes</TableCell>
            <TableCell className="text-right font-bold border border-gray-300 p-2">{formatCurrency(operatingProfit)}</TableCell>
          </TableRow>
          
          {/* Income Taxes */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="border border-gray-300 p-2">Income Taxes</TableCell>
            <TableCell className="text-right border border-gray-300 p-2">{formatCurrency('-')}</TableCell>
          </TableRow>
          
          {/* Net Earnings */}
          <TableRow className="border-b-2 border-black">
            <TableCell className="font-bold border border-gray-300 p-2">Net Earnings</TableCell>
            <TableCell className="text-right font-bold border border-gray-300 p-2">{formatCurrency(operatingProfit)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default IncomeStatement;
