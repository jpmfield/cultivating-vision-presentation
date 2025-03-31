
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import PieChart from '@/components/PieChart';

const FixedCostsSlide: React.FC = () => {
  return (
    <SlideContainer id="fixed-costs">
      <div className="slide-header">
        <h2 className="slide-title">Fixed Costs Breakdown</h2>
        <p className="text-gray-600">(Monthly Recurring Expenses)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <DataTable 
            headers={['Category', 'Annual Cost (USD)']}
            data={[
              ['Land Levy', '$18,000'],
              ['Wages & Salaries', '$29,250'],
              ['Protective Clothing', '$3,220'],
              ['Fuel & Lubricants', '$6,435'],
              ['Consultancy', '$7,200'],
              ['Travel & Subsistence', '$1,800'],
              ['Insurance', '$1,800'],
              ['Other Expenses', '$5,446'],
              ['Total Fixed Costs', '$72,151'],
            ]}
          />
        </div>
        
        <ChartContainer title="Annual Fixed Costs Distribution">
          <PieChart 
            data={[
              { name: 'Land Levy', value: 18000 },
              { name: 'Wages & Salaries', value: 29250 },
              { name: 'Protective Clothing', value: 3220 },
              { name: 'Fuel & Lubricants', value: 6435 },
              { name: 'Consultancy', value: 7200 },
              { name: 'Travel & Subsistence', value: 1800 },
              { name: 'Insurance', value: 1800 },
              { name: 'Other Expenses', value: 5446 },
            ]}
            colors={['#118AB2', '#073B4C', '#06D6A0', '#FFD166', '#FF6B6B', '#FEC6A1', '#ea384c', '#1EAEDB']}
          />
        </ChartContainer>
      </div>
    </SlideContainer>
  );
};

export default FixedCostsSlide;
