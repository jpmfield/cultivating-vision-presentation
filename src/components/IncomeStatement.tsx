
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
  // Calculate totals
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.value, 0);
  const totalVariableCosts = variableCostsData.reduce((sum, item) => sum + item.value, 0);
  const grossProfit = totalRevenue - totalVariableCosts;
  const grossProfitMargin = (grossProfit / totalRevenue * 100).toFixed(1);
  const operatingProfit = grossProfit - fixedCostsTotal;
  const netProfit = operatingProfit; // Simplified - no taxes or interest

  // Format currency
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  // Detailed operating expenses from the image
  const operatingExpenses = [
    { name: 'Land Levy', value: 18000 },
    { name: 'Wages and salaries', value: 29250 },
    { name: 'Protective Clothing', value: 3220 },
    { name: 'Fuel and lubricants', value: 6435 },
    { name: 'Electricity and water', value: 66 },
    { name: 'Stationery', value: 240 },
    { name: 'Cellphone charges', value: 480 },
    { name: 'Bank Charges', value: 240 },
    { name: 'Insurance', value: 1800 },
    { name: 'Wifi', value: 1200 },
    { name: 'Toll fees', value: 0 },
    { name: 'Donations', value: 0 },
    { name: 'School fees', value: 0 },
    { name: 'Road Maintance', value: 0 },
    { name: 'Travel & Subsistence Allowance', value: 1800 },
    { name: 'Provision for Depreciation', value: 0 },
    { name: 'Repairs & Maintanance', value: 600 },
    { name: 'First aid kit', value: 240 },
    { name: 'Service kit', value: 450 },
    { name: 'Legal fees', value: 216 },
    { name: 'Consultancy', value: 7200 },
    { name: 'Auditing fees', value: 0 },
    { name: 'Add Sundries', value: 534 },
  ];

  const totalExpenses = operatingExpenses.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="income-statement">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Income Statement ({year})</h3>
        <p className="text-sm text-gray-600">© KUGUTA COMUNTY GARDENS®. All rights reserved.</p>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/3">USD$000</TableHead>
            <TableHead className="w-1/3 text-right">FY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Revenue */}
          <TableRow className="font-semibold">
            <TableCell>Revenue</TableCell>
            <TableCell className="text-right">{formatCurrency(totalRevenue)}</TableCell>
          </TableRow>
          
          {/* COGS */}
          <TableRow>
            <TableCell>COGS</TableCell>
            <TableCell className="text-right text-variable">{formatCurrency(totalVariableCosts)}</TableCell>
          </TableRow>
          
          {/* Gross Margin */}
          <TableRow className="font-semibold bg-gray-50">
            <TableCell>Gross Margin</TableCell>
            <TableCell className="text-right text-green-600">{formatCurrency(grossProfit)}</TableCell>
          </TableRow>
          
          {/* Operating Expenses Header */}
          <TableRow>
            <TableCell colSpan={2} className="font-semibold pt-4">Operating Expenses</TableCell>
          </TableRow>
          
          {/* Operating Expenses Detail */}
          {operatingExpenses.map((expense, i) => (
            <TableRow key={`expense-${i}`}>
              <TableCell className="pl-8">{expense.name}</TableCell>
              <TableCell className="text-right">
                {expense.value > 0 ? formatCurrency(expense.value) : '-'}
              </TableCell>
            </TableRow>
          ))}
          
          {/* Total Expenses */}
          <TableRow className="font-semibold bg-gray-50">
            <TableCell>Total Expenses</TableCell>
            <TableCell className="text-right text-variable">{formatCurrency(totalExpenses)}</TableCell>
          </TableRow>
          
          {/* EBIT */}
          <TableRow className="font-semibold">
            <TableCell>Earnings Before Interest & Taxes</TableCell>
            <TableCell className="text-right text-green-600">{formatCurrency(netProfit)}</TableCell>
          </TableRow>
          
          {/* Interest Expense */}
          <TableRow>
            <TableCell>Interest Expense</TableCell>
            <TableCell className="text-right">-</TableCell>
          </TableRow>
          
          {/* EBT */}
          <TableRow className="font-semibold bg-gray-50">
            <TableCell>Earnings Before Taxes</TableCell>
            <TableCell className="text-right text-green-600">{formatCurrency(netProfit)}</TableCell>
          </TableRow>
          
          {/* Income Taxes */}
          <TableRow>
            <TableCell>Income Taxes</TableCell>
            <TableCell className="text-right">-</TableCell>
          </TableRow>
          
          {/* Net Earnings */}
          <TableRow className="font-semibold text-lg bg-gray-50">
            <TableCell>Net Earnings</TableCell>
            <TableCell className="text-right text-green-600">{formatCurrency(netProfit)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="text-sm text-gray-600">
          * This income statement represents the projected financial performance for the {year} fiscal year.
        </p>
      </div>
    </div>
  );
};

export default IncomeStatement;
