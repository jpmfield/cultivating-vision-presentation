
import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface LineChartData {
  name: string;
  [key: string]: string | number;
}

interface LineChartProps {
  data: LineChartData[];
  lines: {
    dataKey: string;
    color: string;
    name?: string;
  }[];
}

const LineChart: React.FC<LineChartProps> = ({ data, lines }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
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
        {lines.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={line.dataKey}
            name={line.name || line.dataKey}
            stroke={line.color}
            activeDot={{ r: 8 }}
            strokeWidth={2}
            dot={{ strokeWidth: 1 }}
            className="print:opacity-100" // Ensure lines are visible in print
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
