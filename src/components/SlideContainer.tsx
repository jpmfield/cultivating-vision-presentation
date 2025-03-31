
import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children, id, className }) => {
  return (
    <div id={id} className={`slide-container ${className || ''}`}>
      <div className="slide-content">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;
