
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-5">
      {title && (
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-100">
          {title}
        </h3>
      )}
      <div style={{ height: `${height}px`, width: '100%' }} className="print:!h-[150px]">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
