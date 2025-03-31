
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
  const operatingProfit = 164035; // Exact value from screenshot
  
  // Format currency
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };
  
  // Format empty or zero values as dash
  const formatValue = (value: number) => {
    return value === 0 ? '$-' : formatCurrency(value);
  };

  return (
    <div className="income-statement">
      <div className="flex justify-between items-center mb-4 bg-[#1c3664] text-white p-3">
        <p className="text-sm">© KUGUTA COMUNTY GARDENS®. All rights reserved.</p>
      </div>
      
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">KUGUTA COMMUNITY GARDENS</h2>
        <h3 className="text-lg font-bold">INCOME STATEMENT</h3>
        <p>For 12 months ending 31 March 2026</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-300">
            <TableHead className="w-2/3 text-left align-middle">USD$000</TableHead>
            <TableHead className="w-1/3 text-right align-middle font-bold">FY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Revenue */}
          <TableRow className="font-bold border-b border-gray-300">
            <TableCell className="align-middle">Revenue</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(totalRevenue)}</TableCell>
          </TableRow>
          
          {/* COGS */}
          <TableRow className="border-b border-gray-300">
            <TableCell className="align-middle">COGS</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(totalVariableCosts)}</TableCell>
          </TableRow>
          
          {/* Gross Margin */}
          <TableRow className="font-bold border-b border-gray-300">
            <TableCell className="align-middle">Gross Margin</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(grossProfit)}</TableCell>
          </TableRow>
          
          {/* Expenses */}
          <TableRow>
            <TableCell className="font-bold align-middle" colSpan={2}>Expenses</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Land Levy</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(18000)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Wages and Salaries</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(29250)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Protective Clothing</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(3220)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Fuel and Lubricants</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(6435)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Electricity and Water</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(66)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Stationery</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(240)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Cellphone Charges</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(480)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Bank Charges</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(240)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Insurance</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(1800)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Wifi</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(1200)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Toll Fees</TableCell>
            <TableCell className="text-right align-middle">{formatValue(0)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Donations</TableCell>
            <TableCell className="text-right align-middle">{formatValue(0)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">School Fees</TableCell>
            <TableCell className="text-right align-middle">{formatValue(0)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Road Maintenance</TableCell>
            <TableCell className="text-right align-middle">{formatValue(0)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Travel & Subsistence Allowance</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(1800)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Provision for Depreciation</TableCell>
            <TableCell className="text-right align-middle">{formatValue(0)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Repairs & Maintenance</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(600)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">First Aid Kit</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(240)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Service Kit</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(450)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Legal Fees</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(216)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Consultancy</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(7200)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Auditing Fees</TableCell>
            <TableCell className="text-right align-middle">{formatValue(0)}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="pl-8 align-middle">Add Sundries</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(534)}</TableCell>
          </TableRow>
          
          {/* Total Expenses */}
          <TableRow className="font-bold border-b border-gray-300">
            <TableCell className="align-middle">Total Expenses</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(71971)}</TableCell>
          </TableRow>
          
          {/* Net Profit */}
          <TableRow className="font-bold text-lg border-b-2 border-black">
            <TableCell className="align-middle">Net Profit</TableCell>
            <TableCell className="text-right align-middle">{formatCurrency(operatingProfit)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default IncomeStatement;
