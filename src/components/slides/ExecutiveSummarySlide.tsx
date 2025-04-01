
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import PieChart from '@/components/PieChart';
import BudgetNote from '@/components/BudgetNote';
import { revenueData, revenueColors } from '@/data/revenueData';

const ExecutiveSummarySlide: React.FC = () => {
  return (
    <SlideContainer id="executive-summary" className="print:scale-[0.98] print:origin-top-left">
      <div className="slide-header print:mb-1">
        <h2 className="slide-title print:text-base">Executive Summary</h2>
        <p className="text-gray-600 print:text-xs">Key Financial Metrics</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-2">
        <div>
          <DataTable 
            headers={['Metric', 'Value']}
            data={[
              ['Total Land', '8.96 hectares'],
              ['Total Revenue', '$390,225'],
              ['Net Profit', '$164,035'],
              ['CAPEX Investment', '$199,607'],
              ['Annual Cash Outflow', '$426,326'],
              ['Net Cash Position', '$164,035'],
            ]}
          />
          
          <div className="mt-4 p-3 bg-gray-50 rounded-lg print:mt-2 print:p-2">
            <h3 className="font-semibold mb-1 print:text-xs">Key Focus Areas:</h3>
            <ul className="list-disc pl-5 text-gray-700 print:text-xs">
              <li>Crop diversification (12+ crops/livestock)</li>
              <li>Infrastructure upgrades (greenhouses, irrigation)</li>
              <li>Maximizing margins (92% for greenhouse tomatoes)</li>
            </ul>
          </div>
          
          <BudgetNote className="mt-4 print:mt-2 print:scale-90 print:origin-top-left" />
        </div>
        
        <div>
          <ChartContainer title="Revenue Distribution" height={280}>
            <PieChart 
              data={revenueData}
              colors={revenueColors}
            />
          </ChartContainer>
        </div>
      </div>
    </SlideContainer>
  );
};

export default ExecutiveSummarySlide;
