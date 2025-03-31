
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';
import PrintButton from '@/components/PrintButton';

const Index = () => {
  // Data for the Revenue Breakdown Pie Chart
  const revenueData = [
    { name: 'GreenHouse Tomatoes', value: 130500 },
    { name: 'Chickens', value: 58900 },
    { name: 'Cabbage', value: 121500 },
    { name: 'Potatoes', value: 62700 },
    { name: 'Others', value: 54843 },
  ];

  const revenueColors = ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];

  // Data for the Expense Breakdown Bar Chart
  const expenseData = [
    { name: 'Variable Costs', value: 128271 },
    { name: 'Fixed Costs', value: 53971 },
    { name: 'CAPEX', value: 199607 },
  ];

  const expenseColors = ['#ea384c', '#FEC6A1', '#1EAEDB'];

  // Monthly Cash Outflow Data
  const monthlyOutflowData = [
    { 
      name: 'Apr-25', 
      Variable: 13270, 
      Fixed: 9229, 
      CAPEX: 26607, 
      Total: 49106 
    },
    { 
      name: 'May-25', 
      Variable: 13270, 
      Fixed: 5629, 
      CAPEX: 80400, 
      Total: 99299 
    },
    { 
      name: 'Jun-25', 
      Variable: 9230, 
      Fixed: 5629, 
      CAPEX: 50000, 
      Total: 64859 
    },
    { 
      name: 'Jul-25', 
      Variable: 10581, 
      Fixed: 5629, 
      CAPEX: 30000, 
      Total: 46210 
    },
    { 
      name: 'Aug-25', 
      Variable: 25240, 
      Fixed: 5629, 
      CAPEX: 12600, 
      Total: 43469 
    },
    { 
      name: 'Sep-25', 
      Variable: 37640, 
      Fixed: 6129, 
      CAPEX: 0, 
      Total: 43769 
    },
    { 
      name: 'Oct-25', 
      Variable: 10690, 
      Fixed: 5629, 
      CAPEX: 0, 
      Total: 16319 
    },
    { 
      name: 'Nov-25', 
      Variable: 8350, 
      Fixed: 5629, 
      CAPEX: 0, 
      Total: 13979 
    },
    { 
      name: 'Dec-25', 
      Variable: 0, 
      Fixed: 5629, 
      CAPEX: 0, 
      Total: 5629 
    },
    { 
      name: 'Jan-26', 
      Variable: 0, 
      Fixed: 5629, 
      CAPEX: 0, 
      Total: 5629 
    },
    { 
      name: 'Feb-26', 
      Variable: 0, 
      Fixed: 5977, 
      CAPEX: 0, 
      Total: 5977 
    },
    { 
      name: 'Mar-26', 
      Variable: 0, 
      Fixed: 5780, 
      CAPEX: 0, 
      Total: 5780 
    },
  ];

  // Variable Costs Breakdown
  const variableCostsData = [
    { name: 'Chickens', value: 38000 },
    { name: 'GreenHouse Tomatoes', value: 32400 },
    { name: 'Cabbage', value: 32400 },
    { name: 'Potatoes', value: 23940 },
    { name: 'Fish', value: 1311 },
  ];

  // CAPEX Breakdown
  const capexData = [
    { name: 'Greenhouses', value: 80400 },
    { name: 'Packhouse', value: 50000 },
    { name: 'Chicken Run', value: 30000 },
    { name: 'Irrigation Systems', value: 12400 },
    { name: 'Area Fencing', value: 10112 },
    { name: 'Field Lights', value: 3245 },
  ];

  // Monthly Cash Flow Forecast
  const cashFlowForecastData = monthlyOutflowData.map(month => {
    // This is simplified; in a real scenario, you'd have actual revenue data
    // Using a simple model to estimate revenue based on the given information
    let revenue = 0;
    
    // Simplified model: More revenue in later months after harvest
    if (month.name === 'Apr-25' || month.name === 'May-25' || month.name === 'Jun-25' || month.name === 'Jul-25') {
      revenue = month.Total * 0.2; // Early months have low revenue
    } else if (month.name === 'Aug-25' || month.name === 'Sep-25') {
      revenue = month.Total * 2; // Harvest months have high revenue
    } else {
      revenue = month.Total * 3; // Later months have continued sales
    }
    
    return {
      ...month,
      Revenue: Math.round(revenue),
      NetCashFlow: Math.round(revenue - month.Total)
    };
  });

  return (
    <div className="pb-20">
      <PrintButton />
      
      {/* Cover Slide */}
      <SlideContainer id="cover">
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Kuguta Community Gardens 2025 Budget
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 text-center">
            Cultivating Growth, Sustainability, and Profitability
          </p>
          <div className="bg-secondary/30 p-6 rounded-lg border border-secondary mb-8">
            <p className="text-center italic text-lg">
              "Nurturing Land, Empowering Community."
            </p>
          </div>
          <p className="text-gray-500 mt-4">April 2025 – March 2026</p>
        </div>
      </SlideContainer>

      {/* Annual Cash Outflow Summary */}
      <SlideContainer id="annual-outflow">
        <div className="slide-header">
          <h2 className="slide-title">Annual Cash Outflow Summary</h2>
          <p className="text-gray-600">Total Cash Outflow (2025): $381,849</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <DataTable 
              headers={['Category', 'Amount (USD)', 'Details']}
              data={[
                ['1. Variable Costs', '$128,271', 'Crop/livestock-specific expenses (seeds, feed, labor).'],
                ['2. Fixed Costs', '$53,971', 'Wages, utilities, fuel, maintenance.'],
                ['3. CAPEX', '$199,607', 'Infrastructure projects (greenhouses, irrigation, etc.).'],
              ]}
            />
          </div>
          
          <ChartContainer title="Expense Distribution">
            <PieChart 
              data={[
                { name: 'Variable Costs', value: 128271 },
                { name: 'Fixed Costs', value: 53971 },
                { name: 'CAPEX', value: 199607 },
              ]}
              colors={['#ea384c', '#FEC6A1', '#1EAEDB']}
            />
          </ChartContainer>
        </div>
      </SlideContainer>

      {/* Monthly Cash Outflow Breakdown */}
      <SlideContainer id="monthly-outflow">
        <div className="slide-header">
          <h2 className="slide-title">Monthly Cash Outflow Breakdown</h2>
          <p className="text-gray-600">(Key Months – Full Table in Appendix)</p>
        </div>
        
        <div className="mb-8">
          <DataTable 
            headers={['Month', 'Variable Costs', 'Fixed Costs', 'CAPEX', 'Total Monthly Outflow']}
            data={[
              ['Apr-25', '$13,270', '$9,229', '$26,607', '$49,106'],
              ['May-25', '$13,270', '$5,629', '$80,400', '$99,299'],
              ['Jun-25', '$9,230', '$5,629', '$50,000', '$64,859'],
              ['Jul-25', '$10,581', '$5,629', '$30,000', '$46,210'],
              ['Aug-25', '$25,240', '$5,629', '$12,600', '$43,469'],
              ['Sep-25', '$37,640', '$6,129', '-', '$43,769'],
            ]}
          />
          <p className="text-sm text-gray-500 mt-2">Total Annual Outflow: $381,849</p>
        </div>
        
        <ChartContainer title="Monthly Outflow Distribution" height={400}>
          <BarChart 
            data={monthlyOutflowData}
            bars={[
              { dataKey: 'Variable', color: '#ea384c', name: 'Variable Costs' },
              { dataKey: 'Fixed', color: '#FEC6A1', name: 'Fixed Costs' },
              { dataKey: 'CAPEX', color: '#1EAEDB' },
            ]}
          />
        </ChartContainer>
      </SlideContainer>

      {/* Variable Costs Breakdown */}
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
                ['Chickens', '$38,000', 'Feed, labor, housing.'],
                ['GreenHouse Tomatoes', '$32,400', 'Seedlings, climate control.'],
                ['Cabbage', '$32,400', 'Fertilizers, pest control.'],
                ['Potatoes', '$23,940', 'Seed tubers, irrigation.'],
                ['Fish', '$1,311', 'Feed, pond maintenance.'],
                ['Total Variable Costs', '$128,271', ''],
              ]}
            />
          </div>
          
          <ChartContainer title="Variable Costs by Crop/Livestock">
            <PieChart 
              data={variableCostsData}
              colors={['#FFD166', '#FF6B6B', '#06D6A0', '#118AB2', '#073B4C']}
            />
          </ChartContainer>
        </div>
      </SlideContainer>

      {/* Fixed Costs Breakdown */}
      <SlideContainer id="fixed-costs">
        <div className="slide-header">
          <h2 className="slide-title">Fixed Costs Breakdown</h2>
          <p className="text-gray-600">(Monthly Recurring Expenses)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <DataTable 
              headers={['Category', 'Monthly Cost (USD)', 'Annual Total']}
              data={[
                ['Wages & Salaries', '$1,450', '$17,250'],
                ['Fuel & Lubricants', '$795', '$9,540'],
                ['Electricity & Water', '$5.50', '$66'],
                ['Protective Gear', '$268', '$3,220'],
                ['Insurance & Bank Fees', '$170', '$2,040'],
                ['Total Fixed Costs', '$4,497/month', '$53,971'],
              ]}
            />
          </div>
          
          <ChartContainer title="Annual Fixed Costs Distribution">
            <PieChart 
              data={[
                { name: 'Wages & Salaries', value: 17250 },
                { name: 'Fuel & Lubricants', value: 9540 },
                { name: 'Protective Gear', value: 3220 },
                { name: 'Insurance & Bank Fees', value: 2040 },
                { name: 'Other', value: 21921 },
              ]}
              colors={['#118AB2', '#073B4C', '#06D6A0', '#FFD166', '#FF6B6B']}
            />
          </ChartContainer>
        </div>
      </SlideContainer>

      {/* CAPEX Details */}
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
                ['Irrigation Systems (Boreholes x2)', '$12,400'],
                ['Area Fencing (Electric + Barbed Wire)', '$10,112'],
                ['Field Lights (LED Poles)', '$3,245'],
                ['Total CAPEX', '$199,607'],
              ]}
            />
          </div>
          
          <ChartContainer title="CAPEX Distribution">
            <PieChart 
              data={capexData}
              colors={['#1EAEDB', '#118AB2', '#FFD166', '#06D6A0', '#073B4C', '#FF6B6B']}
            />
          </ChartContainer>
        </div>
      </SlideContainer>

      {/* Cash Flow vs. Profit */}
      <SlideContainer id="cash-flow-profit">
        <div className="slide-header">
          <h2 className="slide-title">Cash Flow vs. Profit</h2>
          <p className="text-gray-600">Net Cash Position</p>
        </div>
        
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <p className="text-gray-600 mb-2">Total Revenue</p>
              <p className="text-3xl font-bold text-primary">$428,443</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <p className="text-gray-600 mb-2">Total Outflow</p>
              <p className="text-3xl font-bold text-variable">$381,849</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <p className="text-gray-600 mb-2">Net Profit</p>
              <p className="text-3xl font-bold text-green-600">$46,594</p>
            </div>
          </div>
          <p className="text-center text-gray-600 italic">
            Key Insight: Positive cash flow starts in August 2025 post-harvest.
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

      {/* Appendix: Full Cash Outflow Table */}
      <SlideContainer id="appendix">
        <div className="slide-header">
          <h2 className="slide-title">Appendix: Full Cash Outflow Table</h2>
          <p className="text-gray-600">(April 2025 – March 2026)</p>
        </div>
        
        <DataTable 
          headers={['Month', 'Variable', 'Fixed', 'CAPEX', 'Total']}
          data={[
            ['Apr-25', '$13,270', '$9,229', '$26,607', '$49,106'],
            ['May-25', '$13,270', '$5,629', '$80,400', '$99,299'],
            ['Jun-25', '$9,230', '$5,629', '$50,000', '$64,859'],
            ['Jul-25', '$10,581', '$5,629', '$30,000', '$46,210'],
            ['Aug-25', '$25,240', '$5,629', '$12,600', '$43,469'],
            ['Sep-25', '$37,640', '$6,129', '-', '$43,769'],
            ['Oct-25', '$10,690', '$5,629', '-', '$16,319'],
            ['Nov-25', '$8,350', '$5,629', '-', '$13,979'],
            ['Dec-25', '-', '$5,629', '-', '$5,629'],
            ['Jan-26', '-', '$5,629', '-', '$5,629'],
            ['Feb-26', '-', '$5,977', '-', '$5,977'],
            ['Mar-26', '-', '$5,780', '-', '$5,780'],
            ['Total', '$128,271', '$53,971', '$199,607', '$381,849'],
          ]}
        />
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Design Notes:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Color coding used: Variable (red), Fixed (orange), CAPEX (blue)</li>
            <li>Peak spending months highlighted (May: $99K CAPEX for greenhouses)</li>
            <li>Monthly data can be exported to Excel/PDF for further analysis</li>
          </ul>
        </div>
      </SlideContainer>
    </div>
  );
};

export default Index;
