
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import CashFlowStatement from '@/components/CashFlowStatement';
import { cashFlowForecastData } from '@/data/cashFlowData';

const CashFlowStatementSlide: React.FC = () => {
  return (
    <SlideContainer id="cash-flow-statement" className="print:overflow-hidden">
      <div className="slide-header print:mb-0.5">
        <h2 className="slide-title print:text-base">Cash Flow Statement</h2>
        <p className="text-gray-600 text-sm print:text-[8px]">Monthly Cash Flow Analysis</p>
      </div>
      
      <div className="print:scale-[0.85] print:origin-top-left print:mt-[-5mm]">
        <CashFlowStatement cashFlowData={cashFlowForecastData} />
      </div>
    </SlideContainer>
  );
};

export default CashFlowStatementSlide;
