
import React from 'react';
import SlideContainer from '@/components/SlideContainer';

const CoverSlide: React.FC = () => {
  return (
    <SlideContainer id="cover" className="bg-gradient-to-br from-primary/10 to-secondary/20">
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 mb-6 border-4 border-primary rounded-full flex items-center justify-center">
          <span className="text-primary text-2xl font-bold">K</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center font-playfair">
          Kuguta Mission Gardens
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-700 mb-4 text-center font-playfair">
          2025 Budget Planning
        </p>
        
        <div className="bg-secondary/30 p-6 rounded-lg border border-secondary mb-10 max-w-xl">
          <p className="text-center italic text-lg">
            "Nurturing Land, Empowering Community, Building Sustainable Futures"
          </p>
        </div>
        
        <p className="text-gray-500 mt-4">April 2025 – March 2026</p>
        
        <div className="mt-6 flex gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">$390K</div>
            <div className="text-sm text-gray-500">Revenue</div>
          </div>
          <div className="text-center border-l border-r px-4 border-gray-200">
            <div className="text-2xl font-bold text-primary">$164K</div>
            <div className="text-sm text-gray-500">Profit</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">42%</div>
            <div className="text-sm text-gray-500">Margin</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default CoverSlide;
