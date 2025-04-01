
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import PieChart from '@/components/PieChart';
import { expenseData, expenseColors } from '@/data/expenseData';

const AnnualOutflowSlide: React.FC = () => {
  // Calculate the total outflow including the new costs
  const totalOutflow = expenseData.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <SlideContainer id="annual-outflow" className="print:scale-[0.98] print:origin-top-left">
      <div className="slide-header print:mb-1">
        <h2 className="slide-title print:text-base">Annual Cash Outflow Summary</h2>
        <p className="text-gray-600 print:text-xs">Total Cash Outflow (2025): ${totalOutflow.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-2">
        <div>
          <DataTable 
            headers={['Category', 'Amount (USD)', 'Details']}
            data={[
              ['1. Variable Costs', '$154,219', 'Crop/livestock-specific expenses (seeds, feed, labor).'],
              ['2. Fixed Costs', '$72,151', 'Wages, utilities, insurance, maintenance.'],
              ['3. Marketing Costs', '$34,275', 'Advertising, promotions, market access.'],
              ['4. Packing Costs', '$3,942', 'Packaging materials and labor.'],
              ['5. CAPEX', '$199,607', 'Infrastructure projects (greenhouses, irrigation, etc.).'],
            ]}
          />
        </div>
        
        <ChartContainer title="Expense Distribution" height={280}>
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
