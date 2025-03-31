
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const exportToPdf = async (elementId: string, filename: string = 'budget-presentation.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  // Get all slide containers
  const slides = document.querySelectorAll('.slide-container');
  const pdf = new jsPDF('p', 'mm', 'a4');
  let isFirstPage = true;

  // Show a loading indicator in the console
  console.log('Starting PDF export process...');
  console.log(`Found ${slides.length} slides to export`);

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i] as HTMLElement;
    
    console.log(`Processing slide ${i + 1}/${slides.length}`);
    
    try {
      // Scale factor for better quality
      const scale = 2;
      
      const canvas = await html2canvas(slide, {
        scale: scale,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        // Set a fixed width to match A4 proportions
        width: 1240, // Approximately A4 width at 150 DPI
        height: 1754, // Approximately A4 height at 150 DPI
        onclone: (document) => {
          // For the cloned document that will be rendered, we can set explicit dimensions
          const clonedSlide = document.querySelector(`#${slide.id}`) as HTMLElement;
          if (clonedSlide) {
            clonedSlide.style.width = "210mm";
            clonedSlide.style.minHeight = "297mm";
            clonedSlide.style.maxHeight = "297mm";
            clonedSlide.style.margin = "0";
            clonedSlide.style.padding = "0";
            clonedSlide.style.overflow = "hidden";
          }
        }
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;
      
      if (!isFirstPage) {
        pdf.addPage();
      } else {
        isFirstPage = false;
      }
      
      // Add image exactly fitting to A4 page (no stretch/distortion)
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      console.log(`Slide ${i + 1} added to PDF`);
      
    } catch (error) {
      console.error(`Error capturing slide ${i + 1}:`, error);
    }
  }
  
  console.log('PDF export completed, saving file...');
  pdf.save(filename);
  console.log('PDF saved successfully!');
};

// Export the entire presentation as a single PDF with perfect page fitting
export const exportEntirePresentation = async (filename: string = 'kuguta-budget-complete.pdf') => {
  // Hide print buttons during export
  const printButtons = document.querySelectorAll('.print-button, .print-menu');
  printButtons.forEach(button => {
    (button as HTMLElement).style.display = 'none';
  });

  try {
    const slides = document.querySelectorAll('.slide-container');
    console.log(`Found ${slides.length} slides to export in full presentation`);
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    let isFirstPage = true;

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      
      console.log(`Processing slide ${i + 1}/${slides.length} for full presentation`);
      
      // Scale factor for better quality
      const scale = 2;
      
      const canvas = await html2canvas(slide, {
        scale: scale,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        // Set a fixed width to match A4 proportions
        width: 1240, // Approximately A4 width at 150 DPI
        height: 1754, // Approximately A4 height at 150 DPI
        onclone: (document) => {
          // For the cloned document that will be rendered, we can set explicit dimensions
          const clonedSlide = document.querySelector(`#${slide.id}`) as HTMLElement;
          if (clonedSlide) {
            clonedSlide.style.width = "210mm";
            clonedSlide.style.minHeight = "297mm";
            clonedSlide.style.maxHeight = "297mm";
            clonedSlide.style.margin = "0";
            clonedSlide.style.padding = "0";
            clonedSlide.style.overflow = "hidden";
          }
        }
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;
      
      if (!isFirstPage) {
        pdf.addPage();
      } else {
        isFirstPage = false;
      }
      
      // Add image exactly fitting to A4 page
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }
    
    console.log('Full presentation PDF export completed, saving file...');
    pdf.save(filename);
    console.log('Full PDF saved successfully!');
  } catch (error) {
    console.error('Error exporting entire presentation:', error);
  } finally {
    // Restore print buttons
    printButtons.forEach(button => {
      (button as HTMLElement).style.display = '';
    });
  }
};
