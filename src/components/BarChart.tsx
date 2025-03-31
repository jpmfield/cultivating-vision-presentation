
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
          bottom: 10,
        }}
        barSize={36}
        className="text-xs"
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="name" 
          axisLine={{ stroke: '#e5e7eb' }}
          tickLine={false}
          tick={{ fill: '#6b7280', fontSize: 12 }}
          dy={10}
        />
        <YAxis 
          axisLine={{ stroke: '#e5e7eb' }}
          tickLine={false}
          tick={{ fill: '#6b7280', fontSize: 12 }}
          tickFormatter={(value) => `$${(value/1000).toLocaleString()}k`}
        />
        <Tooltip 
          formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          contentStyle={{ 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
            border: 'none',
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)'
          }}
          itemStyle={{ padding: '4px 0' }}
          labelStyle={{ fontWeight: 'bold', marginBottom: '8px' }}
        />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="circle" 
        />
        {bars.map((bar, index) => (
          <Bar 
            key={index} 
            dataKey={bar.dataKey} 
            name={bar.name || bar.dataKey} 
            fill={bar.color} 
            radius={[4, 4, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
