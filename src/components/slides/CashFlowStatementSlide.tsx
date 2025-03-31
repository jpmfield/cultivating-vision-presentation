
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import CashFlowStatement from '@/components/CashFlowStatement';
import { cashFlowForecastData } from '@/data/cashFlowData';

const CashFlowStatementSlide: React.FC = () => {
  return (
    <SlideContainer id="cash-flow-statement">
      <div className="slide-header">
        <h2 className="slide-title">Cash Flow Statement</h2>
        <p className="text-gray-600">Monthly Cash Flow Analysis</p>
      </div>
      
      <CashFlowStatement cashFlowData={cashFlowForecastData} />
    </SlideContainer>
  );
};

export default CashFlowStatementSlide;
