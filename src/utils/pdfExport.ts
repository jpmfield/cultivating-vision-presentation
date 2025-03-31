
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

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i] as HTMLElement;
    
    // Skip hidden slides
    if (slide.offsetParent === null) continue;

    try {
      const canvas = await html2canvas(slide, {
        scale: 2,
        useCORS: true,
        logging: false,
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
      
    } catch (error) {
      console.error('Error capturing slide:', error);
    }
  }
  
  pdf.save(filename);
};
