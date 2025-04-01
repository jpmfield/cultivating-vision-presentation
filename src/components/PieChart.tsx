
import React from 'react';
import { 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

export interface PieChartData {
  name: string;
  value: number;
}

interface PieChartProps {
  data: PieChartData[];
  colors: string[];
  dataKey?: string;
  nameKey?: string;
}

const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  colors,
  dataKey = "value",
  nameKey = "name"
}) => {
  // Calculate the total for percentage calculation
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderCustomizedLabel = ({ 
    cx, 
    cy, 
    midAngle, 
    innerRadius, 
    outerRadius, 
    percent, 
    index 
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.66;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Only show label if slice is big enough (>5%)
    return percent > 0.05 ? (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        className="print:text-[5pt]"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  const formatTooltip = (value: number, name: string) => {
    const percentage = ((value / total) * 100).toFixed(1);
    return [`$${value.toLocaleString()} (${percentage}%)`, name];
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius="80%"
          fill="#8884d8"
          dataKey={dataKey}
          nameKey={nameKey}
          // Improve rendering for print
          strokeWidth={1}
          stroke="#ffffff"
          isAnimationActive={false} // Disable animation for better export
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length]} 
              className="print:opacity-100" // Ensure cells are visible in print
            />
          ))}
        </Pie>
        <Tooltip 
          formatter={formatTooltip}
          contentStyle={{ fontSize: '12px' }}
          wrapperStyle={{ zIndex: 1000 }}
          itemStyle={{ padding: '2px 0' }}
        />
        <Legend 
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ 
            fontSize: '12px', 
            paddingTop: '20px'
          }}
          className="print:text-[5pt]"
          formatter={(value, entry, index) => {
            const percentage = ((data[index]?.value / total) * 100).toFixed(1);
            return <span className="print:text-[5pt]">{`${value} (${percentage}%)`}</span>;
          }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
