
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import PieChart from '@/components/PieChart';
import { variableCostsData } from '@/data/expenseData';

const VariableCostsSlide: React.FC = () => {
  return (
    <SlideContainer id="variable-costs">
      <div className="slide-header">
        <h2 className="slide-title">Variable Costs Breakdown</h2>
        <p className="text-gray-600">(Per Crop/Livestock)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <DataTable 
            headers={['Item', 'Cost (USD)', 'Key Drivers']}
            data={[
              ['Cabbage', '$43,200', 'Fertilizers, pest control.'],
              ['Chickens', '$42,000', 'Feed, labor, housing.'],
              ['GreenHouse Tomatoes', '$32,400', 'Seedlings, climate control.'],
              ['Potatoes', '$29,440', 'Seed tubers, irrigation.'],
              ['Other Crops', '$7,179', 'Various inputs.'],
              ['Total Variable Costs', '$154,219', ''],
            ]}
          />
        </div>
        
        <ChartContainer title="Variable Costs by Crop/Livestock">
          <PieChart 
            data={variableCostsData}
            colors={['#06D6A0', '#FFD166', '#FF6B6B', '#118AB2', '#073B4C']}
          />
        </ChartContainer>
      </div>
    </SlideContainer>
  );
};

export default VariableCostsSlide;
