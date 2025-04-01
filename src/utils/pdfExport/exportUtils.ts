
import { jsPDF } from 'jspdf';
import { BATCH_SIZE, RENDER_DELAY } from './constants';
import { applyPrintStyles } from './styles';
import { processBatch } from './slideProcessing';

/**
 * Exports a specific element to PDF with optimized rendering
 */
export const exportToPdf = async (elementId: string, filename: string = 'budget-presentation.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  // Get all slide containers
  const slides = document.querySelectorAll('.slide-container');
  const pdf = new jsPDF('landscape', 'mm', 'a4'); // Using landscape orientation
  let isFirstPage = true;

  // Show a loading indicator in the console
  console.log('Starting PDF export process...');
  console.log(`Found ${slides.length} slides to export`);
  
  // Apply temporary styles for print
  const tempStyle = applyPrintStyles();

  // Process slides in batches
  const slidesArray = Array.from(slides) as HTMLElement[];
  const totalBatches = Math.ceil(slidesArray.length / BATCH_SIZE);
  
  try {
    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      // Process current batch
      const batchResults = await processBatch(slidesArray, batchIndex, totalBatches, slides.length);
      
      // Add processed slides to PDF
      for (const result of batchResults) {
        if (result) {
          if (!isFirstPage && !result.isFirst) {
            pdf.addPage();
          } else if (result.isFirst) {
            isFirstPage = false;
          }
          
          // Add image exactly fitting to A4 page (no stretch/distortion)
          pdf.addImage(result.imgData, 'PNG', 0, 0, result.pdfWidth, result.pdfHeight);
        }
      }
      
      // Add a small delay between batches to prevent browser from becoming unresponsive
      if (batchIndex < totalBatches - 1) {
        console.log(`Batch ${batchIndex + 1} complete, pausing briefly before next batch...`);
        await new Promise(resolve => setTimeout(resolve, RENDER_DELAY));
      }
    }
    
    console.log('PDF export completed, saving file...');
    pdf.save(filename);
    console.log('PDF saved successfully!');
  } catch (error) {
    console.error('Error during PDF export:', error);
  } finally {
    // Remove temporary style element
    document.head.removeChild(tempStyle);
  }
};

/**
 * Prepares the document for PDF export by hiding print buttons
 */
const preparePdfExport = (): void => {
  // Hide print buttons during export
  const printButtons = document.querySelectorAll('.print-button, .print-menu');
  printButtons.forEach(button => {
    (button as HTMLElement).style.display = 'none';
  });
};

/**
 * Restores the document after PDF export
 * @param tempStyle The temporary style element to remove
 */
const cleanupAfterExport = (tempStyle: HTMLStyleElement): void => {
  // Remove temporary style element
  document.head.removeChild(tempStyle);
  
  // Restore print buttons
  const printButtons = document.querySelectorAll('.print-button, .print-menu');
  printButtons.forEach(button => {
    (button as HTMLElement).style.display = '';
  });
};

/**
 * Exports the entire presentation as a PDF
 */
export const exportEntirePresentation = async (filename: string = 'kuguta-budget-complete.pdf') => {
  preparePdfExport();
  
  // Apply temporary styles
  const tempStyle = applyPrintStyles();

  try {
    const slides = document.querySelectorAll('.slide-container');
    console.log(`Found ${slides.length} slides to export in full presentation`);
    
    const pdf = new jsPDF('landscape', 'mm', 'a4'); // Using landscape orientation
    let isFirstPage = true;

    // Process slides in batches
    const slidesArray = Array.from(slides) as HTMLElement[];
    const totalBatches = Math.ceil(slidesArray.length / BATCH_SIZE);
    
    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      // Process current batch
      const batchResults = await processBatch(slidesArray, batchIndex, totalBatches, slides.length);
      
      // Add processed slides to PDF
      for (const result of batchResults) {
        if (result) {
          if (!isFirstPage && !result.isFirst) {
            pdf.addPage();
          } else if (result.isFirst) {
            isFirstPage = false;
          }
          
          // Add image exactly fitting to A4 page
          pdf.addImage(result.imgData, 'PNG', 0, 0, result.pdfWidth, result.pdfHeight);
        }
      }
      
      // Add a small delay between batches
      if (batchIndex < totalBatches - 1) {
        console.log(`Batch ${batchIndex + 1} complete, pausing briefly before next batch...`);
        await new Promise(resolve => setTimeout(resolve, RENDER_DELAY));
      }
    }
    
    console.log('Full presentation PDF export completed, saving file...');
    pdf.save(filename);
    console.log('Full PDF saved successfully!');
  } catch (error) {
    console.error('Error exporting entire presentation:', error);
  } finally {
    cleanupAfterExport(tempStyle);
  }
};
