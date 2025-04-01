
import React from 'react';
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

export interface BarChartData {
  name: string;
  [key: string]: string | number;
}

interface BarChartProps {
  data: BarChartData[];
  bars: {
    dataKey: string;
    color: string;
    name?: string;
  }[];
}

const BarChart: React.FC<BarChartProps> = ({ data, bars }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="print:text-[5pt]"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: 12 }}
          tickMargin={5}
          className="print:text-[5pt]"
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => `$${Math.round(value/1000)}k`}
          className="print:text-[5pt]"
        />
        <Tooltip 
          formatter={(value: number) => `$${value.toLocaleString()}`}
          contentStyle={{ fontSize: '12px' }}
          wrapperStyle={{ zIndex: 1000 }}
          itemStyle={{ padding: '2px 0' }}
        />
        <Legend 
          wrapperStyle={{ 
            fontSize: '12px',
            paddingTop: '10px',
            paddingBottom: '5px'
          }}
          className="print:text-[5pt]"
        />
        {bars.map((bar, index) => (
          <Bar 
            key={index} 
            dataKey={bar.dataKey} 
            name={bar.name || bar.dataKey} 
            fill={bar.color}
            maxBarSize={40}
            className="print:opacity-100" // Ensure bars are visible in print
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
