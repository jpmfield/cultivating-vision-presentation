
import React from 'react';
import PrintButton from '@/components/PrintButton';
import CoverSlide from '@/components/slides/CoverSlide';
import ExecutiveSummarySlide from '@/components/slides/ExecutiveSummarySlide';
import IncomeStatementSlide from '@/components/slides/IncomeStatementSlide';
import AnnualOutflowSlide from '@/components/slides/AnnualOutflowSlide';
import CashFlowStatementSlide from '@/components/slides/CashFlowStatementSlide';
import MonthlyOutflowSlide from '@/components/slides/MonthlyOutflowSlide';
import VariableCostsSlide from '@/components/slides/VariableCostsSlide';
import FixedCostsSlide from '@/components/slides/FixedCostsSlide';
import CapexDetailsSlide from '@/components/slides/CapexDetailsSlide';
import CashFlowProfitSlide from '@/components/slides/CashFlowProfitSlide';
import AppendixSlide from '@/components/slides/AppendixSlide';

const Index = () => {
  return (
    <div id="presentation-container" className="pb-20">
      <PrintButton />
      
      <CoverSlide />
      <ExecutiveSummarySlide />
      <IncomeStatementSlide />
      <AnnualOutflowSlide />
      <CashFlowStatementSlide />
      <MonthlyOutflowSlide />
      <VariableCostsSlide />
      <FixedCostsSlide />
      <CapexDetailsSlide />
      <CashFlowProfitSlide />
      <AppendixSlide />
    </div>
  );
};

export default Index;
