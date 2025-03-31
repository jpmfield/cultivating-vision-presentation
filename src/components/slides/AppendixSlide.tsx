
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
        headers={['Month', 'Variable', 'Fixed', 'CAPEX', 'Total']}
        data={[
          ['Apr-25', '$15,570', '$9,229', '$26,607', '$51,406'],
          ['May-25', '$15,570', '$5,629', '$80,400', '$101,599'],
          ['Jun-25', '$11,090', '$5,629', '$50,000', '$66,719'],
          ['Jul-25', '$12,960', '$5,629', '$30,000', '$48,589'],
          ['Aug-25', '$30,390', '$5,629', '$12,600', '$48,619'],
          ['Sep-25', '$45,490', '$6,129', '-', '$51,619'],
          ['Oct-25', '$13,100', '$5,629', '-', '$18,729'],
          ['Nov-25', '$10,050', '$5,629', '-', '$15,679'],
          ['Dec-25', '-', '$5,629', '-', '$5,629'],
          ['Jan-26', '-', '$5,629', '-', '$5,629'],
          ['Feb-26', '-', '$5,978', '-', '$5,978'],
          ['Mar-26', '-', '$5,781', '-', '$5,781'],
          ['Total', '$154,219', '$72,151', '$199,607', '$425,977'],
        ]}
      />
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Financial Notes:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Revenue projections based on actual market prices and expected yields</li>
          <li>CAPEX investments front-loaded in early months to prepare for growing season</li>
          <li>Positive net cashflow occurs from October 2025 onwards</li>
          <li>Total project delivers a net profit of $164,035 (42% profit margin)</li>
        </ul>
      </div>
    </SlideContainer>
  );
};

export default AppendixSlide;
