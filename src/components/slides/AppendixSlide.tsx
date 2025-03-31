
import React from 'react';
import SlideContainer from '@/components/SlideContainer';
import DataTable from '@/components/DataTable';

const AppendixSlide: React.FC = () => {
  return (
    <SlideContainer id="appendix">
      <div className="slide-header">
        <h2 className="slide-title">Appendix: Full Cash Outflow Table</h2>
        <p className="text-gray-600">(April 2025 – March 2026)</p>
      </div>
      
      <DataTable 
        headers={['Month', 'Variable', 'Fixed', 'Marketing', 'Packing', 'CAPEX', 'Total']}
        data={[
          ['Apr-25', '$15,570', '$9,229', '$0', '$0', '$26,607', '$51,406'],
          ['May-25', '$15,570', '$5,629', '$0', '$0', '$80,400', '$101,599'],
          ['Jun-25', '$11,090', '$5,629', '$0', '$0', '$50,000', '$66,719'],
          ['Jul-25', '$12,960', '$5,629', '$0', '$0', '$30,000', '$48,589'],
          ['Aug-25', '$30,390', '$5,629', '$2,856', '$328', '$12,600', '$51,804'],
          ['Sep-25', '$45,490', '$6,129', '$2,856', '$328', '$0', '$54,804'],
          ['Oct-25', '$13,100', '$5,629', '$2,856', '$328', '$0', '$21,914'],
          ['Nov-25', '$10,050', '$5,629', '$2,856', '$328', '$0', '$18,864'],
          ['Dec-25', '$0', '$5,629', '$5,713', '$657', '$0', '$11,999'],
          ['Jan-26', '$0', '$5,629', '$5,713', '$657', '$0', '$11,999'],
          ['Feb-26', '$0', '$5,978', '$5,713', '$657', '$0', '$12,348'],
          ['Mar-26', '$0', '$5,781', '$5,713', '$657', '$0', '$12,151'],
          ['Total', '$154,219', '$72,151', '$34,275', '$3,942', '$199,607', '$464,194'],
        ]}
      />
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Financial Notes:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Revenue projections based on actual market prices and expected yields</li>
          <li>CAPEX investments front-loaded in early months to prepare for growing season</li>
          <li>Marketing and Packing costs increase as harvest approaches and during sales periods</li>
          <li>Positive net cashflow occurs from November 2025 onwards</li>
          <li>Total project delivers a net profit despite significant initial investments</li>
        </ul>
      </div>
    </SlideContainer>
  );
};

export default AppendixSlide;
