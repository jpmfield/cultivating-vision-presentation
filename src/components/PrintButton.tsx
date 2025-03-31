
import React, { useState } from 'react';
import { Printer, Download, Save } from 'lucide-react';
import { exportToPdf } from '@/utils/pdfExport';

const PrintButton: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleExportPdf = async () => {
    try {
      setIsExporting(true);
      await exportToPdf('presentation-container', 'kuguta-budget-2025.pdf');
    } catch (error) {
      console.error('Error exporting to PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex gap-2 z-10">
      <button 
        onClick={handleExportPdf} 
        className="print-button bg-accent"
        aria-label="Export to PDF"
        disabled={isExporting}
      >
        {isExporting ? (
          <Save size={24} className="animate-pulse" />
        ) : (
          <Download size={24} />
        )}
      </button>
      <button 
        onClick={handlePrint} 
        className="print-button"
        aria-label="Print presentation"
      >
        <Printer size={24} />
      </button>
    </div>
  );
};

export default PrintButton;
