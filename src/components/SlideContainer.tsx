
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
        "slide-container w-full max-w-5xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md print:shadow-none print:my-0 print:p-3",
        "print:max-w-none print:w-[297mm] print:h-[210mm] print:overflow-hidden", // Switched dimensions for landscape
        "border border-gray-100 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:20px_20px]",
        className
      )}
    >
      <div className="slide-content bg-white z-10 relative p-4 rounded-md shadow-sm print:shadow-none print:p-3 print:overflow-hidden print:max-h-[190mm]">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;
