
import React, { useState, useEffect } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  
  const slides = [
    { id: "cover", title: "Cover", icon: "📄" },
    { id: "executive-summary", title: "Executive Summary", icon: "📊" },
    { id: "income-statement", title: "Income Statement", icon: "💰" },
    { id: "annual-outflow", title: "Annual Cash Outflow", icon: "📉" },
    { id: "cash-flow-statement", title: "Cash Flow Statement", icon: "💸" },
    { id: "monthly-outflow", title: "Monthly Cash Outflow", icon: "📅" },
    { id: "variable-costs", title: "Variable Costs", icon: "🔄" },
    { id: "fixed-costs", title: "Fixed Costs", icon: "📌" },
    { id: "capex-details", title: "CAPEX Details", icon: "🏗️" },
    { id: "cash-flow-profit", title: "Cash Flow vs Profit", icon: "⚖️" },
    { id: "appendix", title: "Appendix", icon: "📎" },
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
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="presentation-container" className="pb-20 relative bg-gray-50">
      <div className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">Kuguta Mission Gardens</h1>
            </div>
            <div className="hidden md:flex space-x-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => scrollToSlide(slide.id)}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {slide.title}
                </button>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-20 bg-white/95 backdrop-blur-sm print:hidden md:hidden">
          <div className="pt-20 pb-4 px-4">
            <div className="flex flex-col space-y-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => scrollToSlide(slide.id)}
                  className="flex items-center py-3 px-4 rounded-lg text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="w-8 text-xl">{slide.icon}</span>
                  <span className="text-lg">{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <PrintButton />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      
      {/* Back to top button - hidden on print */}
      {showBackToTop && (
        <Button 
          className="fixed bottom-5 left-5 rounded-full p-3 print:hidden bg-primary/90 hover:bg-primary shadow-lg transition-all"
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
