
import React from 'react';
import { Printer } from 'lucide-react';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrint} 
      className="print-button"
      aria-label="Print presentation"
    >
      <Printer size={24} />
    </button>
  );
};

export default PrintButton;
