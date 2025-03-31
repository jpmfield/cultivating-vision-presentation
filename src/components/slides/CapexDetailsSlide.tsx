
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import PieChart from '@/components/PieChart';
import { capexData } from '@/data/capexData';

const CapexDetailsSlide: React.FC = () => {
  return (
    <SlideContainer id="capex-details">
      <div className="slide-header">
        <h2 className="slide-title">CAPEX Details</h2>
        <p className="text-gray-600">(One-Time Investments)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <DataTable 
            headers={['Project', 'Cost (USD)']}
            data={[
              ['Greenhouses (6 structures)', '$80,400'],
              ['Packhouse (Medium-Tech)', '$50,000'],
              ['Chicken Run (Semi-automated)', '$30,000'],
              ['High-tech Nursery', '$12,000'],
              ['Irrigation Systems (Boreholes x2)', '$12,400'],
              ['Area Fencing (Electric + Barbed Wire)', '$10,112'],
              ['Field Lights (LED Poles)', '$3,245'],
              ['Other (Layers, Goats, etc.)', '$1,450'],
              ['Total CAPEX', '$199,607'],
            ]}
          />
        </div>
        
        <ChartContainer title="CAPEX Distribution">
          <PieChart 
            data={capexData}
            colors={['#1EAEDB', '#118AB2', '#FFD166', '#06D6A0', '#073B4C', '#FF6B6B', '#FEC6A1', '#ea384c']}
          />
        </ChartContainer>
      </div>
    </SlideContainer>
  );
};

export default CapexDetailsSlide;
