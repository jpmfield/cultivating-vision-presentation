
import React, { useState } from 'react';
import { Printer, Download, Save, FileText, ChevronUp } from 'lucide-react';
import { exportToPdf, exportEntirePresentation } from '@/utils/pdfExport';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

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
      toast({
        title: "Export Complete",
        description: "Your presentation has been exported as PDF",
      });
    } catch (error) {
      console.error('Error exporting to PDF:', error);
      toast({
        variant: "destructive",
        title: "Export Failed",
        description: "There was an error exporting to PDF",
      });
    } finally {
      setIsExporting(false);
      setShowOptions(false);
    }
  };

  const handleExportEntirePresentation = async () => {
    try {
      setIsExporting(true);
      await exportEntirePresentation('kuguta-complete-budget-2025.pdf');
      toast({
        title: "Export Complete",
        description: "Your complete presentation has been exported as PDF",
      });
    } catch (error) {
      console.error('Error exporting entire presentation:', error);
      toast({
        variant: "destructive",
        title: "Export Failed",
        description: "There was an error exporting the presentation",
      });
    } finally {
      setIsExporting(false);
      setShowOptions(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col-reverse items-end gap-2 z-10">
      {showOptions && (
        <div className="bg-white rounded-lg shadow-lg p-3 mb-2 print-menu border border-gray-200">
          <Button 
            onClick={handleExportPdf} 
            className="print-option-button bg-white text-gray-800 hover:bg-gray-100 w-full justify-start mb-2"
            aria-label="Export slides as PDF"
            disabled={isExporting}
          >
            <Download size={18} />
            <span>Export Slides (Page-Fitted)</span>
          </Button>
          
          <Button 
            onClick={handleExportEntirePresentation} 
            className="print-option-button bg-white text-gray-800 hover:bg-gray-100 w-full justify-start mb-2"
            aria-label="Export full presentation"
            disabled={isExporting}
          >
            <FileText size={18} />
            <span>Export Full Presentation (A4)</span>
          </Button>
          
          <Button 
            onClick={handlePrint} 
            className="print-option-button bg-white text-gray-800 hover:bg-gray-100 w-full justify-start"
            aria-label="Print presentation"
          >
            <Printer size={18} />
            <span>Print</span>
          </Button>
        </div>
      )}
      
      <Button 
        onClick={() => setShowOptions(!showOptions)} 
        className={cn(
          "print-button flex items-center gap-2", 
          isExporting ? "animate-pulse" : "",
          showOptions ? "bg-primary/90" : "bg-primary"
        )}
        aria-label="Export options"
        disabled={isExporting}
      >
        {isExporting ? (
          <>
            <Save size={18} className="animate-pulse" />
            <span>Exporting...</span>
          </>
        ) : (
          <>
            {showOptions ? <ChevronUp size={18} /> : <Download size={18} />}
            <span className="hidden md:inline">Export/Print</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default PrintButton;
