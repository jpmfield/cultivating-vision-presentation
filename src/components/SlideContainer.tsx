
import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
  id?: string;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children, id }) => {
  return (
    <div id={id} className="slide-container">
      <div className="slide-content">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;
