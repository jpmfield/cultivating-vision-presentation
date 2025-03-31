
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import PieChart from '@/components/PieChart';
import { revenueData, revenueColors } from '@/data/revenueData';

const ExecutiveSummarySlide: React.FC = () => {
  return (
    <SlideContainer id="executive-summary">
      <div className="slide-header">
        <h2 className="slide-title">Executive Summary</h2>
        <p className="text-gray-600">Key Financial Metrics</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Key Focus Areas:</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Crop diversification (12+ crops/livestock)</li>
              <li>Infrastructure upgrades (greenhouses, irrigation)</li>
              <li>Maximizing margins (92% for greenhouse tomatoes)</li>
            </ul>
          </div>
        </div>
        
        <div>
          <ChartContainer title="Revenue Distribution">
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
