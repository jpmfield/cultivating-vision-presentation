
import React, { useState } from 'react';
import { Printer, Download, Save, FileText } from 'lucide-react';
import { exportToPdf, exportEntirePresentation } from '@/utils/pdfExport';
import { cn } from '@/lib/utils';

const PrintButton: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

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
      setShowOptions(false);
    }
  };

  const handleExportEntirePresentation = async () => {
    try {
      setIsExporting(true);
      await exportEntirePresentation('kuguta-complete-budget-2025.pdf');
    } catch (error) {
      console.error('Error exporting entire presentation:', error);
    } finally {
      setIsExporting(false);
      setShowOptions(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col-reverse items-end gap-2 z-10">
      {showOptions && (
        <div className="bg-white rounded-lg shadow-lg p-2 mb-2 print-menu">
          <button 
            onClick={handleExportPdf} 
            className="print-option-button"
            aria-label="Export slides as PDF"
            disabled={isExporting}
          >
            <Download size={20} />
            <span>Export Slides</span>
          </button>
          
          <button 
            onClick={handleExportEntirePresentation} 
            className="print-option-button"
            aria-label="Export full presentation"
            disabled={isExporting}
          >
            <FileText size={20} />
            <span>Export Full Presentation</span>
          </button>
          
          <button 
            onClick={handlePrint} 
            className="print-option-button"
            aria-label="Print presentation"
          >
            <Printer size={20} />
            <span>Print</span>
          </button>
        </div>
      )}
      
      <button 
        onClick={() => setShowOptions(!showOptions)} 
        className={cn("print-button bg-primary", isExporting && "animate-pulse")}
        aria-label="Export options"
        disabled={isExporting}
      >
        {isExporting ? (
          <Save size={24} className="animate-pulse" />
        ) : (
          <Download size={24} />
        )}
      </button>
    </div>
  );
};

export default PrintButton;
