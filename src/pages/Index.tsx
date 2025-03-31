
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';
import ChartContainer from '@/components/ChartContainer';
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';
import PrintButton from '@/components/PrintButton';
import IncomeStatement from '@/components/IncomeStatement';
import CashFlowStatement from '@/components/CashFlowStatement';

const Index = () => {
  // Updated Data for the Revenue Breakdown Pie Chart
  const revenueData = [
    { name: 'GreenHouse Tomatoes', value: 130500 },
    { name: 'Chickens', value: 58900 },
    { name: 'Cabbage', value: 121500 },
    { name: 'Potatoes', value: 62700 },
    { name: 'Others', value: 54843 },
  ];

  const revenueColors = ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];

  // Updated Variable Costs Breakdown
  const variableCostsData = [
    { name: 'Cabbage', value: 43200 },
    { name: 'Chickens', value: 42000 },
    { name: 'GreenHouse Tomatoes', value: 32400 },
    { name: 'Potatoes', value: 29440 },
    { name: 'Other Crops', value: 7179 },
  ];

  // Updated data for the Expense Breakdown
  const expenseData = [
    { name: 'Variable Costs', value: 154219 },
    { name: 'Fixed Costs', value: 72151 },
    { name: 'CAPEX', value: 199607 },
  ];

  const expenseColors = ['#ea384c', '#FEC6A1', '#1EAEDB'];

  // CAPEX Breakdown (updated)
  const capexData = [
    { name: 'Greenhouses', value: 80400 },
    { name: 'Packhouse', value: 50000 },
    { name: 'Chicken Run', value: 30000 },
    { name: 'High-tech Nursery', value: 12000 },
    { name: 'Irrigation Systems', value: 12400 },
    { name: 'Area Fencing', value: 10112 },
    { name: 'Field Lights', value: 3245 },
    { name: 'Other', value: 1450 },
  ];

  // Monthly Cash Outflow Data (updated)
  const monthlyOutflowData = [
    { 
      name: 'Apr-25', 
      Variable: 15570, 
      Fixed: 9229, 
      CAPEX: 26607, 
      Total: 51406 
    },
    { 
      name: 'May-25', 
      Variable: 15570, 
      Fixed: 5629, 
      CAPEX: 80400, 
      Total: 101599 
    },
    { 
      name: 'Jun-25', 
      Variable: 11090, 
      Fixed: 5629, 
      CAPEX: 50000, 
      Total: 66719 
    },
    { 
      name: 'Jul-25', 
      Variable: 12960, 
      Fixed: 5629, 
      CAPEX: 30000, 
      Total: 48589 
    },
    { 
      name: 'Aug-25', 
      Variable: 30390, 
      Fixed: 5629, 
      CAPEX: 12600, 
      Total: 48619 
    },
    { 
      name: 'Sep-25', 
      Variable: 45490, 
      Fixed: 6129, 
      CAPEX: 0, 
      Total: 51619 
    },
    { 
      name: 'Oct-25', 
      Variable: 13100, 
      Fixed: 5629, 
      CAPEX: 0, 
      Total: 18729 
    },
    { 
      name: 'Nov-25', 
      Variable: 10050, 
      Fixed: 5629, 
      CAPEX: 0, 
      Total: 15679 
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
      Fixed: 5978, 
      CAPEX: 0, 
      Total: 5978 
    },
    { 
      name: 'Mar-26', 
      Variable: 0, 
      Fixed: 5781, 
      CAPEX: 0, 
      Total: 5781 
    },
  ];

  // Monthly Cash Flow Forecast (updated with actual figures from spreadsheet)
  const cashFlowForecastData = [
    { name: 'Apr-25', Revenue: 0, Variable: 15570, Fixed: 9229, CAPEX: 26607, Total: 51406, NetCashFlow: -51406 },
    { name: 'May-25', Revenue: 0, Variable: 15570, Fixed: 5629, CAPEX: 80400, Total: 101599, NetCashFlow: -101599 },
    { name: 'Jun-25', Revenue: 7363, Variable: 11090, Fixed: 5629, CAPEX: 50000, Total: 66719, NetCashFlow: -59356 },
    { name: 'Jul-25', Revenue: 7363, Variable: 12960, Fixed: 5629, CAPEX: 30000, Total: 48589, NetCashFlow: -41226 },
    { name: 'Aug-25', Revenue: 33863, Variable: 30390, Fixed: 5629, CAPEX: 12600, Total: 48619, NetCashFlow: -14756 },
    { name: 'Sep-25', Revenue: 33983, Variable: 45490, Fixed: 6129, CAPEX: 0, Total: 51619, NetCashFlow: -17636 },
    { name: 'Oct-25', Revenue: 21003, Variable: 13100, Fixed: 5629, CAPEX: 0, Total: 18729, NetCashFlow: 2274 },
    { name: 'Nov-25', Revenue: 27753, Variable: 10050, Fixed: 5629, CAPEX: 0, Total: 15679, NetCashFlow: 12074 },
    { name: 'Dec-25', Revenue: 78485, Variable: 0, Fixed: 5629, CAPEX: 0, Total: 5629, NetCashFlow: 72856 },
    { name: 'Jan-26', Revenue: 90453, Variable: 0, Fixed: 5629, CAPEX: 0, Total: 5629, NetCashFlow: 84824 },
    { name: 'Feb-26', Revenue: 53015, Variable: 0, Fixed: 5978, CAPEX: 0, Total: 5978, NetCashFlow: 47037 },
    { name: 'Mar-26', Revenue: 74165, Variable: 0, Fixed: 5781, CAPEX: 0, Total: 5781, NetCashFlow: 68384 },
  ];

  return (
    <div id="presentation-container" className="pb-20">
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

      {/* Executive Summary */}
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

      {/* Income Statement */}
      <SlideContainer id="income-statement">
        <div className="slide-header">
          <h2 className="slide-title">Income Statement</h2>
          <p className="text-gray-600">Fiscal Year 2025-2026</p>
        </div>
        
        <IncomeStatement 
          year="2025-2026"
          revenueData={revenueData}
          variableCostsData={variableCostsData}
          fixedCostsTotal={72151}
        />
      </SlideContainer>

      {/* Annual Cash Outflow Summary */}
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
              data={[
                { name: 'Variable Costs', value: 154219 },
                { name: 'Fixed Costs', value: 72151 },
                { name: 'CAPEX', value: 199607 },
              ]}
              colors={['#ea384c', '#FEC6A1', '#1EAEDB']}
            />
          </ChartContainer>
        </div>
      </SlideContainer>

      {/* Cash Flow Statement */}
      <SlideContainer id="cash-flow-statement">
        <div className="slide-header">
          <h2 className="slide-title">Cash Flow Statement</h2>
          <p className="text-gray-600">Monthly Cash Flow Analysis</p>
        </div>
        
        <CashFlowStatement cashFlowData={cashFlowForecastData} />
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
              ['Apr-25', '$15,570', '$9,229', '$26,607', '$51,406'],
              ['May-25', '$15,570', '$5,629', '$80,400', '$101,599'],
              ['Jun-25', '$11,090', '$5,629', '$50,000', '$66,719'],
              ['Jul-25', '$12,960', '$5,629', '$30,000', '$48,589'],
              ['Aug-25', '$30,390', '$5,629', '$12,600', '$48,619'],
              ['Sep-25', '$45,490', '$6,129', '-', '$51,619'],
            ]}
          />
          <p className="text-sm text-gray-500 mt-2">Total Annual Outflow: $425,977</p>
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

      {/* Fixed Costs Breakdown */}
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

      {/* Appendix: Full Cash Outflow Table */}
      <SlideContainer id="appendix">
        <div className="slide-header">
          <h2 className="slide-title">Appendix: Full Cash Outflow Table</h2>
          <p className="text-gray-600">(April 2025 – March 2026)</p>
        </div>
        
        <DataTable 
          headers={['Month', 'Variable', 'Fixed', 'CAPEX', 'Total']}
          data={[
            ['Apr-25', '$15,570', '$9,229', '$26,607', '$51,406'],
            ['May-25', '$15,570', '$5,629', '$80,400', '$101,599'],
            ['Jun-25', '$11,090', '$5,629', '$50,000', '$66,719'],
            ['Jul-25', '$12,960', '$5,629', '$30,000', '$48,589'],
            ['Aug-25', '$30,390', '$5,629', '$12,600', '$48,619'],
            ['Sep-25', '$45,490', '$6,129', '-', '$51,619'],
            ['Oct-25', '$13,100', '$5,629', '-', '$18,729'],
            ['Nov-25', '$10,050', '$5,629', '-', '$15,679'],
            ['Dec-25', '-', '$5,629', '-', '$5,629'],
            ['Jan-26', '-', '$5,629', '-', '$5,629'],
            ['Feb-26', '-', '$5,978', '-', '$5,978'],
            ['Mar-26', '-', '$5,781', '-', '$5,781'],
            ['Total', '$154,219', '$72,151', '$199,607', '$425,977'],
          ]}
        />
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Financial Notes:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Revenue projections based on actual market prices and expected yields</li>
            <li>CAPEX investments front-loaded in early months to prepare for growing season</li>
            <li>Positive net cashflow occurs from October 2025 onwards</li>
            <li>Total project delivers a net profit of $164,035 (42% profit margin)</li>
          </ul>
        </div>
      </SlideContainer>
    </div>
  );
};

export default Index;
