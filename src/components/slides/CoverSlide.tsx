
import React from 'react';
import SlideContainer from '@/components/SlideContainer';

const CoverSlide: React.FC = () => {
  return (
    <SlideContainer id="cover" className="bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-20 h-20 mb-8 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-primary/20">
          <span className="text-primary text-3xl font-bold">K</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 text-center font-playfair">
          Kuguta Mission Gardens
        </h1>
        
        <div className="text-3xl md:text-4xl text-gray-700 mb-8 text-center font-playfair">
          2025 Budget Planning
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md border border-secondary/30 mb-12 max-w-2xl">
          <p className="text-center italic text-xl text-gray-600">
            "Nurturing Land, Empowering Community, Building Sustainable Futures"
          </p>
        </div>
        
        <p className="text-gray-500 mb-10">April 2025 – March 2026</p>
        
        <div className="grid grid-cols-3 gap-8 max-w-xl w-full">
          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary">$390K</div>
            <div className="text-sm text-gray-500 mt-2">Revenue</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary">$164K</div>
            <div className="text-sm text-gray-500 mt-2">Profit</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary">42%</div>
            <div className="text-sm text-gray-500 mt-2">Margin</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default CoverSlide;
