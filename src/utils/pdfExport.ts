
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
      
      // Create a temporary container with exact A4 dimensions for capturing
      const tempContainer = document.createElement('div');
      tempContainer.style.width = '210mm';
      tempContainer.style.height = '297mm';
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.backgroundColor = 'white';
      
      // Clone the slide content
      const clonedSlide = slide.cloneNode(true) as HTMLElement;
      clonedSlide.style.width = '100%';
      clonedSlide.style.height = '100%';
      clonedSlide.style.transform = 'scale(1)';
      clonedSlide.style.margin = '0';
      clonedSlide.style.padding = '10mm';
      clonedSlide.style.boxSizing = 'border-box';
      clonedSlide.style.overflow = 'hidden';
      clonedSlide.style.boxShadow = 'none';
      clonedSlide.style.borderRadius = '0';
      
      // Add to temp container and to body
      tempContainer.appendChild(clonedSlide);
      document.body.appendChild(tempContainer);
      
      const canvas = await html2canvas(tempContainer, {
        scale: scale,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 595, // A4 width in points at 72 DPI
        height: 842, // A4 height in points at 72 DPI
      });
      
      // Remove the temp container
      document.body.removeChild(tempContainer);
      
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
      
      // Create a temporary container with exact A4 dimensions
      const tempContainer = document.createElement('div');
      tempContainer.style.width = '210mm';
      tempContainer.style.height = '297mm';
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.backgroundColor = 'white';
      
      // Clone the slide content
      const clonedSlide = slide.cloneNode(true) as HTMLElement;
      clonedSlide.style.width = '100%';
      clonedSlide.style.height = '100%';
      clonedSlide.style.transform = 'scale(1)';
      clonedSlide.style.margin = '0';
      clonedSlide.style.padding = '10mm';
      clonedSlide.style.boxSizing = 'border-box';
      clonedSlide.style.overflow = 'hidden';
      clonedSlide.style.boxShadow = 'none';
      clonedSlide.style.borderRadius = '0';
      
      // Add to temp container and to body
      tempContainer.appendChild(clonedSlide);
      document.body.appendChild(tempContainer);
      
      // Scale factor for better quality
      const scale = 2;
      
      const canvas = await html2canvas(tempContainer, {
        scale: scale,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 595, // A4 width in points at 72 DPI
        height: 842, // A4 height in points at 72 DPI
      });
      
      // Remove the temp container
      document.body.removeChild(tempContainer);
      
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
