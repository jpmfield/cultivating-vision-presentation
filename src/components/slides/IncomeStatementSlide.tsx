
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import IncomeStatement from '@/components/IncomeStatement';
import { revenueData } from '@/data/revenueData';
import { variableCostsData } from '@/data/expenseData';

const IncomeStatementSlide: React.FC = () => {
  return (
    <SlideContainer id="income-statement" className="print:scale-95 print:origin-top-left">
      <div className="slide-header print:mb-1">
        <h2 className="slide-title print:text-base">Income Statement</h2>
        <p className="text-gray-600 print:text-xs">Fiscal Year 2025-2026</p>
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
