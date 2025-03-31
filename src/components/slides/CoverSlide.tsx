
import React from 'react';
import SlideContainer from '@/components/SlideContainer';

const CoverSlide: React.FC = () => {
  return (
    <SlideContainer id="cover">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Kuguta Mission Gardens 2025 Budget
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 text-center">
          Cultivating Growth, Sustainability, and Profitability
        </p>
        <div className="bg-secondary/30 p-6 rounded-lg border border-secondary mb-8">
          <p className="text-center italic text-lg">
            "Nurturing Land, Empowering Community."
          </p>
        </div>
        <p className="text-gray-500 mt-4">April 2025 – March 2026</p>
      </div>
    </SlideContainer>
  );
};

export default CoverSlide;
