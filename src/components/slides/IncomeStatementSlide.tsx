
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import IncomeStatement from '@/components/IncomeStatement';
import { revenueData } from '@/data/revenueData';
import { variableCostsData, expenseData } from '@/data/expenseData';

const IncomeStatementSlide: React.FC = () => {
  // Find the marketing and packing costs from expenseData
  const marketingCosts = expenseData.find(item => item.name === 'Marketing Costs')?.value || 0;
  const packingCosts = expenseData.find(item => item.name === 'Packing Costs')?.value || 0;
  
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
        marketingCosts={marketingCosts}
        packingCosts={packingCosts}
      />
    </SlideContainer>
  );
};

export default IncomeStatementSlide;
