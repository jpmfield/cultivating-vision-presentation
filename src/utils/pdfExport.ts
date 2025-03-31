
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
      const canvas = await html2canvas(slide, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
      });
      
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      if (!isFirstPage) {
        pdf.addPage();
      } else {
        isFirstPage = false;
      }
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      console.log(`Slide ${i + 1} added to PDF`);
      
    } catch (error) {
      console.error(`Error capturing slide ${i + 1}:`, error);
    }
  }
  
  console.log('PDF export completed, saving file...');
  pdf.save(filename);
  console.log('PDF saved successfully!');
};

// Export the entire presentation as a single PDF
export const exportEntirePresentation = async (filename: string = 'kuguta-budget-complete.pdf') => {
  const container = document.getElementById('presentation-container');
  if (!container) {
    console.error('Presentation container not found');
    return;
  }

  console.log('Exporting entire presentation as a single PDF...');
  
  try {
    // Temporarily hide the print buttons to avoid them showing in the PDF
    const printButtons = document.querySelectorAll('.print-button');
    printButtons.forEach(button => {
      (button as HTMLElement).style.display = 'none';
    });
    
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: '#ffffff',
      windowWidth: 1200, // Set a consistent width for better results
      onclone: (clonedDoc) => {
        // Additional processing on the cloned document if needed
        const clonedSlides = clonedDoc.querySelectorAll('.slide-container');
        clonedSlides.forEach((slide) => {
          (slide as HTMLElement).style.marginBottom = '30px';
          (slide as HTMLElement).style.pageBreakAfter = 'always';
        });
      }
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Add the entire canvas to the PDF, potentially spanning multiple pages
    let heightLeft = imgHeight;
    let position = 0;
    let isFirstPage = true;
    
    while (heightLeft > 0) {
      if (!isFirstPage) {
        pdf.addPage();
      } else {
        isFirstPage = false;
      }
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      position -= pageHeight;
    }
    
    pdf.save(filename);
    console.log('Complete presentation PDF saved successfully!');
    
    // Restore print buttons
    printButtons.forEach(button => {
      (button as HTMLElement).style.display = '';
    });
    
  } catch (error) {
    console.error('Error exporting entire presentation:', error);
    
    // Restore print buttons on error
    const printButtons = document.querySelectorAll('.print-button');
    printButtons.forEach(button => {
      (button as HTMLElement).style.display = '';
    });
  }
};
