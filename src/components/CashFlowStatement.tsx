
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
      <h3 className="text-lg font-semibold mb-1 print:text-xs print:mb-0">Cash Flow Statement (April 2025 - March 2026)</h3>
      
      <div className="table-container overflow-x-auto print:text-[6px]">
        <table className="data-table w-full text-xs">
          <thead>
            <tr>
              <th className="w-[12%] print:p-0.5 print:text-[5.5pt]">Month</th>
              <th className="text-right w-[11%] print:p-0.5 print:text-[5.5pt]">Revenue</th>
              <th className="text-right w-[11%] print:p-0.5 print:text-[5.5pt]">Variable</th>
              <th className="text-right w-[11%] print:p-0.5 print:text-[5.5pt]">Fixed</th>
              <th className="text-right w-[11%] print:p-0.5 print:text-[5.5pt]">Marketing</th>
              <th className="text-right w-[11%] print:p-0.5 print:text-[5.5pt]">Packing</th>
              <th className="text-right w-[11%] print:p-0.5 print:text-[5.5pt]">CAPEX</th>
              <th className="text-right w-[11%] print:p-0.5 print:text-[5.5pt]">Outflow</th>
              <th className="text-right w-[11%] print:p-0.5 print:text-[5.5pt]">Net Flow</th>
            </tr>
          </thead>
          <tbody>
            {cashFlowData.map((month, index) => (
              <tr key={index}>
                <td className="print:p-0.5 print:text-[5.5pt]">{month.name}</td>
                <td className="text-right text-green-600 print:p-0.5 print:text-[5.5pt]">{formatCurrency(month.Revenue)}</td>
                <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(month.Variable)}</td>
                <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(month.Fixed)}</td>
                <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(month.Marketing || 0)}</td>
                <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(month.Packing || 0)}</td>
                <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{month.CAPEX ? formatCurrency(month.CAPEX) : '$-'}</td>
                <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(month.Total)}</td>
                <td className={`text-right print:p-0.5 print:text-[5.5pt] ${month.NetCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {formatCurrency(month.NetCashFlow)}
                </td>
              </tr>
            ))}
            
            <tr className="font-semibold bg-gray-50">
              <td className="print:p-0.5 print:text-[5.5pt]">Total</td>
              <td className="text-right text-green-600 print:p-0.5 print:text-[5.5pt]">{formatCurrency(totalRevenue)}</td>
              <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(totalVariable)}</td>
              <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(totalFixed)}</td>
              <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(totalMarketing)}</td>
              <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(totalPacking)}</td>
              <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(totalCapex)}</td>
              <td className="text-right text-red-500 print:p-0.5 print:text-[5.5pt]">{formatCurrency(totalOutflow)}</td>
              <td className={`text-right print:p-0.5 print:text-[5.5pt] ${netCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {formatCurrency(netCashFlow)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 print:text-[5.5px] print:gap-1 print:mt-0.5">
        <div className="p-2 bg-gray-50 rounded print:p-0.5">
          <p className="text-xs font-semibold print:text-[6px] print:mb-0">Cash Flow Summary</p>
          <p className="text-xs mt-1 print:text-[5.5px] print:mt-0">
            Total Inflow: <span className="text-green-600">{formatCurrency(totalRevenue)}</span><br />
            Total Outflow: <span className="text-red-500">{formatCurrency(totalOutflow)}</span><br />
            Net Position: <span className={netCashFlow >= 0 ? 'text-green-600' : 'text-red-500'}>
              {formatCurrency(netCashFlow)}
            </span>
          </p>
        </div>
        
        <div className="p-2 bg-gray-50 rounded print:p-0.5">
          <p className="text-xs font-semibold print:text-[6px] print:mb-0">Key Insights</p>
          <ul className="text-xs mt-1 list-disc list-inside print:text-[5.5px] print:mt-0 print:pl-1">
            <li>Negative cash flow in early months (Apr-Oct)</li>
            <li>Peak outflow: CAPEX investments in May</li>
            <li>Revenue starts in June, increases from August</li>
            <li>Positive cash flow begins November 2025</li>
            <li>Marketing & Packing costs increase from August</li>
          </ul>
        </div>
        
        <div className="p-2 bg-gray-50 rounded print:p-0.5">
          <p className="text-xs font-semibold print:text-[6px] print:mb-0">Financial Health</p>
          <p className="text-xs mt-1 print:text-[5.5px] print:mt-0">
            Despite initial negative cash flow due to startup investments and seasonal expenses, the farm achieves a strong positive net cash position by fiscal year end, demonstrating financial sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashFlowStatement;
