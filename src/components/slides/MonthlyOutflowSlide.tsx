
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import BarChart from '@/components/BarChart';
import { monthlyOutflowData } from '@/data/cashFlowData';

const MonthlyOutflowSlide: React.FC = () => {
  return (
    <SlideContainer id="monthly-outflow">
      <div className="slide-header">
        <h2 className="slide-title">Monthly Cash Outflow Breakdown</h2>
        <p className="text-gray-600">(Key Months – Full Table in Appendix)</p>
      </div>
      
      <div className="mb-8">
        <DataTable 
          headers={['Month', 'Variable Costs', 'Fixed Costs', 'Marketing', 'Packing', 'CAPEX', 'Total Monthly Outflow']}
          data={[
            ['Apr-25', '$15,570', '$9,229', '$0', '$0', '$26,607', '$51,406'],
            ['May-25', '$15,570', '$5,629', '$0', '$0', '$80,400', '$101,599'],
            ['Jun-25', '$11,090', '$5,629', '$0', '$0', '$50,000', '$66,719'],
            ['Jul-25', '$12,960', '$5,629', '$0', '$0', '$30,000', '$48,589'],
            ['Aug-25', '$30,390', '$5,629', '$2,856', '$328', '$12,600', '$51,804'],
            ['Sep-25', '$45,490', '$6,129', '$2,856', '$328', '-', '$54,804'],
          ]}
        />
        <p className="text-sm text-gray-500 mt-2">Total Annual Outflow: $464,194</p>
      </div>
      
      <ChartContainer title="Monthly Outflow Distribution" height={400}>
        <BarChart 
          data={monthlyOutflowData}
          bars={[
            { dataKey: 'Variable', color: '#ea384c', name: 'Variable Costs' },
            { dataKey: 'Fixed', color: '#FEC6A1', name: 'Fixed Costs' },
            { dataKey: 'Marketing', color: '#06D6A0', name: 'Marketing' },
            { dataKey: 'Packing', color: '#FFD166', name: 'Packing' },
            { dataKey: 'CAPEX', color: '#1EAEDB' },
          ]}
        />
      </ChartContainer>
    </SlideContainer>
  );
};

export default MonthlyOutflowSlide;
