
import React from 'react';
import DataTable from './DataTable';
import { formatCurrency } from '@/utils/formatters';

interface CashFlowStatementProps {
  cashFlowData: {
    name: string;
    Revenue: number;
    Variable: number;
    Fixed: number;
    Marketing: number;
    Packing: number;
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
  const totalMarketing = cashFlowData.reduce((sum, item) => sum + (item.Marketing || 0), 0);
  const totalPacking = cashFlowData.reduce((sum, item) => sum + (item.Packing || 0), 0);
  const totalCapex = cashFlowData.reduce((sum, item) => sum + (item.CAPEX || 0), 0);
  const totalOutflow = totalVariable + totalFixed + totalMarketing + totalPacking + totalCapex;
  const netCashFlow = totalRevenue - totalOutflow;

  return (
    <div className="cash-flow-statement">
      <h3 className="text-xl font-semibold mb-2 print:text-lg">Cash Flow Statement (April 2025 - March 2026)</h3>
      
      <div className="table-container overflow-x-auto print:text-xs">
        <table className="data-table w-full">
          <thead>
            <tr>
              <th className="w-[12%]">Month</th>
              <th className="text-right w-[11%]">Revenue</th>
              <th className="text-right w-[11%]">Variable</th>
              <th className="text-right w-[11%]">Fixed</th>
              <th className="text-right w-[11%]">Marketing</th>
              <th className="text-right w-[11%]">Packing</th>
              <th className="text-right w-[11%]">CAPEX</th>
              <th className="text-right w-[11%]">Outflow</th>
              <th className="text-right w-[11%]">Net Flow</th>
            </tr>
          </thead>
          <tbody>
            {cashFlowData.map((month, index) => (
              <tr key={index}>
                <td>{month.name}</td>
                <td className="text-right text-green-600">{formatCurrency(month.Revenue)}</td>
                <td className="text-right text-red-500">{formatCurrency(month.Variable)}</td>
                <td className="text-right text-red-500">{formatCurrency(month.Fixed)}</td>
                <td className="text-right text-red-500">{formatCurrency(month.Marketing || 0)}</td>
                <td className="text-right text-red-500">{formatCurrency(month.Packing || 0)}</td>
                <td className="text-right text-red-500">{month.CAPEX ? formatCurrency(month.CAPEX) : '$-'}</td>
                <td className="text-right text-red-500">{formatCurrency(month.Total)}</td>
                <td className={`text-right ${month.NetCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {formatCurrency(month.NetCashFlow)}
                </td>
              </tr>
            ))}
            
            <tr className="font-semibold bg-gray-50">
              <td>Total</td>
              <td className="text-right text-green-600">{formatCurrency(totalRevenue)}</td>
              <td className="text-right text-red-500">{formatCurrency(totalVariable)}</td>
              <td className="text-right text-red-500">{formatCurrency(totalFixed)}</td>
              <td className="text-right text-red-500">{formatCurrency(totalMarketing)}</td>
              <td className="text-right text-red-500">{formatCurrency(totalPacking)}</td>
              <td className="text-right text-red-500">{formatCurrency(totalCapex)}</td>
              <td className="text-right text-red-500">{formatCurrency(totalOutflow)}</td>
              <td className={`text-right ${netCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {formatCurrency(netCashFlow)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 print:text-xs print:gap-1">
        <div className="p-2 bg-gray-50 rounded">
          <p className="text-sm font-semibold">Cash Flow Summary</p>
          <p className="text-xs mt-1">
            Total Inflow: <span className="text-green-600">{formatCurrency(totalRevenue)}</span><br />
            Total Outflow: <span className="text-red-500">{formatCurrency(totalOutflow)}</span><br />
            Net Position: <span className={netCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}>
              {formatCurrency(netCashFlow)}
            </span>
          </p>
        </div>
        
        <div className="p-2 bg-gray-50 rounded">
          <p className="text-sm font-semibold">Key Insights</p>
          <ul className="text-xs mt-1 list-disc list-inside">
            <li>Negative cash flow in early months (Apr-Oct)</li>
            <li>Peak outflow: CAPEX investments in May</li>
            <li>Revenue starts in June, increases from August</li>
            <li>Positive cash flow begins November 2025</li>
            <li>Marketing & Packing costs increase from August</li>
          </ul>
        </div>
        
        <div className="p-2 bg-gray-50 rounded">
          <p className="text-sm font-semibold">Financial Health</p>
          <p className="text-xs mt-1">
            Despite initial negative cash flow due to startup investments and seasonal expenses, the farm achieves a strong positive net cash position by fiscal year end, demonstrating financial sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashFlowStatement;
