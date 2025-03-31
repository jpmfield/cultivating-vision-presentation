
import React from 'react';
import { cn } from '@/lib/utils';

interface SlideContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children, id, className }) => {
  return (
    <div 
      id={id} 
      className={cn(
        "slide-container w-full max-w-5xl mx-auto my-10 p-8 bg-white rounded-lg shadow-md print:shadow-none print:my-0 print:p-5 print:max-w-none print:w-[210mm] print:h-[297mm] print:overflow-hidden",
        "border border-gray-100 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:20px_20px]",
        className
      )}
    >
      <div className="slide-content bg-white z-10 relative p-6 rounded-md shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;
