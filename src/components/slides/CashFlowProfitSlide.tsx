
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import ChartContainer from '@/components/ChartContainer';
import LineChart from '@/components/LineChart';
import { cashFlowForecastData } from '@/data/cashFlowData';

const CashFlowProfitSlide: React.FC = () => {
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
            <p className="text-3xl font-bold text-primary">$390,225</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-2">Total Outflow</p>
            <p className="text-3xl font-bold text-variable">$226,190</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-2">Net Profit</p>
            <p className="text-3xl font-bold text-green-600">$164,035</p>
          </div>
        </div>
        <p className="text-center text-gray-600 italic">
          Key Insight: Positive cash flow starts in October 2025 post-harvest.
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
