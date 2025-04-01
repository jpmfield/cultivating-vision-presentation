
import React from 'react';

interface ChartContainerProps {
  children: React.ReactNode;
  title?: string;
  height?: number;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ 
  children, 
  title,
  height = 300
}) => {
  return (
    <div className="mb-8">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div style={{ height: `${height}px`, width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
