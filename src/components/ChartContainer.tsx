
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
    <div className="mb-4 print:mb-2">
      {title && <h3 className="text-xl font-semibold mb-2 print:text-sm print:mb-1">{title}</h3>}
      <div 
        style={{ height: `${height}px`, width: '100%' }} 
        className="print:h-[140px]"
      >
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
