
import React from 'react';
import DataTable from './DataTable';

interface CashFlowStatementProps {
  cashFlowData: {
    name: string;
    Revenue: number;
    Variable: number;
    Fixed: number;
    CAPEX: number;
    Total: number;
    NetCashFlow: number;
  }[];
}

const CashFlowStatement: React.FC<CashFlowStatementProps> = ({ cashFlowData }) => {
  // Calculate totals
  const totalRevenue = cashFlowData.reduce((sum, item) => sum + item.Revenue, 0);
  const totalVariable = cashFlowData.reduce((sum, item) => sum + item.Variable, 0);
  const totalFixed = cashFlowData.reduce((sum, item) => sum + item.Fixed, 0);
  const totalCapex = cashFlowData.reduce((sum, item) => sum + (item.CAPEX || 0), 0);
  const totalOutflow = cashFlowData.reduce((sum, item) => sum + item.Total, 0);
  const netCashFlow = totalRevenue - totalOutflow;

  // Format currency
  const formatCurrency = (value: number | undefined) => {
    if (value === undefined || value === 0) return '-';
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="cash-flow-statement">
      <h3 className="text-xl font-semibold mb-4">Cash Flow Statement (April 2025 - March 2026)</h3>
      
      <div className="table-container overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Month</th>
              <th className="text-right">Revenue</th>
              <th className="text-right">Variable Costs</th>
              <th className="text-right">Fixed Costs</th>
              <th className="text-right">CAPEX</th>
              <th className="text-right">Net Cash Flow</th>
            </tr>
          </thead>
          <tbody>
            {cashFlowData.map((month, index) => (
              <tr key={index}>
                <td>{month.name}</td>
                <td className="text-right text-green-600">{formatCurrency(month.Revenue)}</td>
                <td className="text-right">{formatCurrency(month.Variable)}</td>
                <td className="text-right">{formatCurrency(month.Fixed)}</td>
                <td className="text-right">{formatCurrency(month.CAPEX)}</td>
                <td className={`text-right ${month.NetCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {formatCurrency(month.NetCashFlow)}
                </td>
              </tr>
            ))}
            
            <tr className="font-semibold bg-gray-50">
              <td>Total</td>
              <td className="text-right text-green-600">{formatCurrency(totalRevenue)}</td>
              <td className="text-right">{formatCurrency(totalVariable)}</td>
              <td className="text-right">{formatCurrency(totalFixed)}</td>
              <td className="text-right">{formatCurrency(totalCapex)}</td>
              <td className={`text-right ${netCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {formatCurrency(netCashFlow)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm font-semibold">Cash Flow Summary</p>
          <p className="text-sm mt-1">
            Total Inflow: <span className="text-green-600">{formatCurrency(totalRevenue)}</span><br />
            Total Outflow: <span className="text-red-500">{formatCurrency(totalOutflow)}</span><br />
            Net Position: <span className={netCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}>
              {formatCurrency(netCashFlow)}
            </span>
          </p>
        </div>
        
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm font-semibold">Key Insights</p>
          <ul className="text-sm mt-1 list-disc list-inside">
            <li>Negative cash flow in early months (Apr-Sep)</li>
            <li>Peak outflow in May: CAPEX investments</li>
            <li>Positive cash flow begins October 2025</li>
          </ul>
        </div>
        
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm font-semibold">Financial Health</p>
          <p className="text-sm mt-1">
            By fiscal year end, the farm achieves a strong positive net cash position of $164,035, demonstrating financial sustainability despite heavy upfront investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashFlowStatement;
