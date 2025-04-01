
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import IncomeStatement from '@/components/IncomeStatement';
import { revenueData } from '@/data/revenueData';
import { variableCostsData } from '@/data/expenseData';

const IncomeStatementSlide: React.FC = () => {
  return (
    <SlideContainer id="income-statement">
      <div className="slide-header">
        <h2 className="slide-title">Income Statement</h2>
        <p className="text-gray-600">Fiscal Year 2025-2026</p>
      </div>
      
      <IncomeStatement 
        year="2025-2026"
        revenueData={revenueData}
        variableCostsData={variableCostsData}
        fixedCostsTotal={72151}
        marketingCosts={0} // Not included in the updated statement
        packingCosts={0} // Not included in the updated statement
      />
    </SlideContainer>
  );
};

export default IncomeStatementSlide;
