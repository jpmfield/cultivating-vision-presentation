
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import CashFlowStatement from '@/components/CashFlowStatement';
import { cashFlowForecastData } from '@/data/cashFlowData';

const CashFlowStatementSlide: React.FC = () => {
  return (
    <SlideContainer id="cash-flow-statement" className="print:overflow-hidden">
      <div className="slide-header print:mb-1">
        <h2 className="slide-title print:text-xl">Cash Flow Statement</h2>
        <p className="text-gray-600 print:text-xs">Monthly Cash Flow Analysis</p>
      </div>
      
      <CashFlowStatement cashFlowData={cashFlowForecastData} />
    </SlideContainer>
  );
};

export default CashFlowStatementSlide;
