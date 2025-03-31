
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
        "slide-container w-full max-w-5xl mx-auto my-12 bg-white rounded-xl shadow-lg overflow-hidden",
        "border border-gray-100 print:shadow-none print:my-0 print:p-0",
        "print:max-w-none print:w-[297mm] print:h-[210mm] print:overflow-hidden", 
        "transition-all duration-300 hover:shadow-xl",
        className
      )}
      style={{
        aspectRatio: '297/210', // A4 landscape aspect ratio
      }}
    >
      <div className="slide-content bg-white z-10 relative p-8 rounded-md print:p-2 print:overflow-hidden print:max-h-[200mm]">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;
