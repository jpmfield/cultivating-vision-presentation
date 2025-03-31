
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import PieChart from '@/components/PieChart';
import { expenseData, expenseColors } from '@/data/expenseData';

const AnnualOutflowSlide: React.FC = () => {
  return (
    <SlideContainer id="annual-outflow">
      <div className="slide-header">
        <h2 className="slide-title">Annual Cash Outflow Summary</h2>
        <p className="text-gray-600">Total Cash Outflow (2025): $425,977</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <DataTable 
            headers={['Category', 'Amount (USD)', 'Details']}
            data={[
              ['1. Variable Costs', '$154,219', 'Crop/livestock-specific expenses (seeds, feed, labor).'],
              ['2. Fixed Costs', '$72,151', 'Wages, utilities, insurance, maintenance.'],
              ['3. CAPEX', '$199,607', 'Infrastructure projects (greenhouses, irrigation, etc.).'],
            ]}
          />
        </div>
        
        <ChartContainer title="Expense Distribution">
          <PieChart 
            data={expenseData}
            colors={expenseColors}
          />
        </ChartContainer>
      </div>
    </SlideContainer>
  );
};

export default AnnualOutflowSlide;
