
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
        className
      )}
    >
      <div className="slide-content">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;
