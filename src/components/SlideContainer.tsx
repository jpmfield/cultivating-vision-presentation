
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
        "slide-container",
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
