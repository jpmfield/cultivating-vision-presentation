
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import ChartContainer from '@/components/ChartContainer';
import LineChart from '@/components/LineChart';
import { cashFlowForecastData } from '@/data/cashFlowData';

const CashFlowProfitSlide: React.FC = () => {
  // Calculate totals for the summary section
  const totalRevenue = cashFlowForecastData.reduce((sum, item) => sum + item.Revenue, 0);
  const totalVariable = cashFlowForecastData.reduce((sum, item) => sum + item.Variable, 0);
  const totalFixed = cashFlowForecastData.reduce((sum, item) => sum + item.Fixed, 0);
  const totalMarketing = cashFlowForecastData.reduce((sum, item) => sum + (item.Marketing || 0), 0);
  const totalPacking = cashFlowForecastData.reduce((sum, item) => sum + (item.Packing || 0), 0);
  const totalCapex = cashFlowForecastData.reduce((sum, item) => sum + (item.CAPEX || 0), 0);
  const totalOutflow = totalVariable + totalFixed + totalMarketing + totalPacking + totalCapex;
  const netProfit = totalRevenue - totalOutflow;

  // Format numbers to include commas
  const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, {maximumFractionDigits: 0});
  };

  return (
    <SlideContainer id="cash-flow-profit">
      <div className="slide-header">
        <h2 className="slide-title">Cash Flow vs. Profit</h2>
        <p className="text-gray-600">Net Cash Position</p>
      </div>
      
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-2">Total Revenue</p>
            <p className="text-3xl font-bold text-primary">${formatNumber(totalRevenue)}</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-2">Total Outflow</p>
            <p className="text-3xl font-bold text-variable">${formatNumber(totalOutflow)}</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-2">Net Profit</p>
            <p className="text-3xl font-bold text-green-600">${formatNumber(netProfit)}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="text-center p-3 bg-white rounded-lg shadow">
            <p className="text-xs text-gray-600 mb-1">Variable</p>
            <p className="text-sm font-bold text-red-500">${formatNumber(totalVariable)}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow">
            <p className="text-xs text-gray-600 mb-1">Fixed</p>
            <p className="text-sm font-bold text-red-500">${formatNumber(totalFixed)}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow">
            <p className="text-xs text-gray-600 mb-1">Marketing</p>
            <p className="text-sm font-bold text-red-500">${formatNumber(totalMarketing)}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow">
            <p className="text-xs text-gray-600 mb-1">Packing</p>
            <p className="text-sm font-bold text-red-500">${formatNumber(totalPacking)}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow">
            <p className="text-xs text-gray-600 mb-1">CAPEX</p>
            <p className="text-sm font-bold text-red-500">${formatNumber(totalCapex)}</p>
          </div>
        </div>
        
        <p className="text-center text-gray-600 italic">
          Key Insight: Positive cash flow starts in November 2025 post-harvest.
        </p>
      </div>
      
      <ChartContainer title="Monthly Cash Flow Forecast" height={400}>
        <LineChart 
          data={cashFlowForecastData}
          lines={[
            { dataKey: 'Revenue', color: '#06D6A0', name: 'Revenue' },
            { dataKey: 'Total', color: '#ea384c', name: 'Total Outflow' },
            { dataKey: 'NetCashFlow', color: '#1EAEDB', name: 'Net Cash Flow' },
          ]}
        />
      </ChartContainer>
    </SlideContainer>
  );
};

export default CashFlowProfitSlide;
