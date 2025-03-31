
import React from 'react';
import DataTable from './DataTable';

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
  const netProfitMargin = (netProfit / totalRevenue * 100).toFixed(1);

  // Format currency
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="income-statement">
      <h3 className="text-xl font-semibold mb-4">Income Statement ({year})</h3>
      
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th className="w-2/3">Item</th>
              <th className="w-1/3 text-right">Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold bg-gray-50">
              <td>Revenue</td>
              <td className="text-right">{formatCurrency(totalRevenue)}</td>
            </tr>
            
            {revenueData.map((item, i) => (
              <tr key={`revenue-${i}`}>
                <td className="pl-8">{item.name}</td>
                <td className="text-right">{formatCurrency(item.value)}</td>
              </tr>
            ))}
            
            <tr className="font-semibold bg-gray-50">
              <td>Less: Variable Costs</td>
              <td className="text-right text-variable">{formatCurrency(totalVariableCosts)}</td>
            </tr>
            
            {variableCostsData.map((item, i) => (
              <tr key={`variable-${i}`}>
                <td className="pl-8">{item.name}</td>
                <td className="text-right">{formatCurrency(item.value)}</td>
              </tr>
            ))}
            
            <tr className="font-semibold bg-gray-50">
              <td>Gross Profit</td>
              <td className="text-right text-green-600">{formatCurrency(grossProfit)}</td>
            </tr>
            
            <tr>
              <td className="pl-8">Gross Profit Margin</td>
              <td className="text-right">{grossProfitMargin}%</td>
            </tr>
            
            <tr className="font-semibold bg-gray-50">
              <td>Less: Fixed Costs</td>
              <td className="text-right text-variable">{formatCurrency(fixedCostsTotal)}</td>
            </tr>
            
            <tr className="font-semibold bg-gray-50">
              <td>Operating Profit (EBITDA)</td>
              <td className="text-right text-green-600">{formatCurrency(operatingProfit)}</td>
            </tr>
            
            <tr className="font-semibold">
              <td>Net Profit</td>
              <td className="text-right text-green-600">{formatCurrency(netProfit)}</td>
            </tr>
            
            <tr>
              <td className="pl-8">Net Profit Margin</td>
              <td className="text-right">{netProfitMargin}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="text-sm text-gray-600">
          * This income statement represents the projected financial performance for the {year} fiscal year.
        </p>
      </div>
    </div>
  );
};

export default IncomeStatement;
