
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
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
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const slides = [
    { id: "cover", title: "Cover" },
    { id: "executive-summary", title: "Executive Summary" },
    { id: "income-statement", title: "Income Statement" },
    { id: "annual-outflow", title: "Annual Cash Outflow" },
    { id: "cash-flow-statement", title: "Cash Flow Statement" },
    { id: "monthly-outflow", title: "Monthly Cash Outflow" },
    { id: "variable-costs", title: "Variable Costs" },
    { id: "fixed-costs", title: "Fixed Costs" },
    { id: "capex-details", title: "CAPEX Details" },
    { id: "cash-flow-profit", title: "Cash Flow vs Profit" },
    { id: "appendix", title: "Appendix" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set page title
    document.title = "Kuguta Mission Gardens Budget 2025";
    
    // Add metadata for print/export
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="presentation-container" className="pb-20">
      <PrintButton />
      
      {/* Table of Contents - hidden on print */}
      <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md print:hidden">
        <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">Table of Contents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {slides.map((slide, index) => (
            <button 
              key={slide.id}
              onClick={() => scrollToSlide(slide.id)}
              className="text-left p-2 hover:bg-gray-100 rounded transition-colors flex items-center"
            >
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 text-sm">
                {index + 1}
              </span>
              {slide.title}
            </button>
          ))}
        </div>
      </div>
      
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
      
      {/* Back to top button - hidden on print */}
      {showBackToTop && (
        <Button 
          className="fixed bottom-5 left-5 rounded-full p-3 print:hidden bg-primary/90 hover:bg-primary"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default Index;
