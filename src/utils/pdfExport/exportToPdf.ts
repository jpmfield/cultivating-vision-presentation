
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { applyPrintStyles, removePrintStyles } from './printStyles';

/**
 * Exports a specific element as a PDF file
 * @param elementId The ID of the element to export
 * @param filename The name of the output PDF file
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
  
  // Apply print styles
  const tempStyle = applyPrintStyles();

  try {
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      
      console.log(`Processing slide ${i + 1}/${slides.length}`);
      
      // Create a temporary container with exact A4 landscape dimensions for capturing
      const tempContainer = createTempContainer();
      
      // Clone the slide content
      const clonedSlide = cloneSlide(slide);
      
      // Add to temp container and to body
      tempContainer.appendChild(clonedSlide);
      document.body.appendChild(tempContainer);
      
      // Wait briefly for the content to render
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Capture the slide as canvas
      const canvas = await captureSlideAsCanvas(tempContainer);
      
      // Remove the temp container
      document.body.removeChild(tempContainer);
      
      const imgData = canvas.toDataURL('image/png', 1.0); // Using maximum quality
      
      // A4 dimensions in mm for landscape
      const pdfWidth = 297;
      const pdfHeight = 210;
      
      if (!isFirstPage) {
        pdf.addPage();
      } else {
        isFirstPage = false;
      }
      
      // Add image exactly fitting to A4 page (no stretch/distortion)
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      console.log(`Slide ${i + 1} added to PDF`);
    }
    
    console.log('PDF export completed, saving file...');
    pdf.save(filename);
    console.log('PDF saved successfully!');
  } catch (error) {
    console.error('Error during PDF export:', error);
  } finally {
    // Remove temporary style element
    removePrintStyles(tempStyle);
  }
};

/**
 * Creates a temporary container for slide capturing
 */
const createTempContainer = () => {
  const tempContainer = document.createElement('div');
  tempContainer.style.width = '297mm'; // A4 landscape width
  tempContainer.style.height = '210mm'; // A4 landscape height
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.overflow = 'hidden';
  tempContainer.style.backgroundColor = 'white';
  tempContainer.style.boxSizing = 'border-box';
  return tempContainer;
};

/**
 * Clones a slide for capturing
 */
const cloneSlide = (slide: HTMLElement) => {
  const clonedSlide = slide.cloneNode(true) as HTMLElement;
  clonedSlide.style.width = '100%';
  clonedSlide.style.height = '100%';
  clonedSlide.style.transform = 'scale(1)';
  clonedSlide.style.margin = '0';
  clonedSlide.style.padding = '0'; // No padding on the container
  clonedSlide.style.boxSizing = 'border-box';
  clonedSlide.style.overflow = 'hidden';
  clonedSlide.style.boxShadow = 'none';
  clonedSlide.style.borderRadius = '0';
  
  // Make sure charts are properly displayed
  const charts = clonedSlide.querySelectorAll('.recharts-wrapper');
  charts.forEach(chart => {
    (chart as HTMLElement).style.overflow = 'visible';
  });
  
  return clonedSlide;
};

/**
 * Captures a slide as canvas
 */
const captureSlideAsCanvas = async (element: HTMLElement) => {
  const scale = 3; // Increased scale for better quality
  return await html2canvas(element, {
    scale: scale,
    useCORS: true,
    logging: false,
    allowTaint: true,
    backgroundColor: '#ffffff',
    width: 842, // A4 landscape width in points at 72 DPI
    height: 595, // A4 landscape height in points at 72 DPI
    onclone: (clonedDoc) => {
      // Additional manipulation of the cloned document if needed
      const clonedSlide = clonedDoc.querySelector('.slide-container');
      if (clonedSlide) {
        (clonedSlide as HTMLElement).style.transform = 'none';
      }
    }
  });
};
