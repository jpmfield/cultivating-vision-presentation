
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
  const pdf = new jsPDF('landscape', 'mm', 'a4'); // Using landscape orientation
  let isFirstPage = true;

  // Show a loading indicator in the console
  console.log('Starting PDF export process...');
  console.log(`Found ${slides.length} slides to export`);
  
  // Create a temporary style element to enforce print styles during export
  const tempStyle = document.createElement('style');
  tempStyle.textContent = `
    .slide-container {
      width: 297mm !important;
      height: 210mm !important;
      padding: 3mm !important;
      margin: 0 !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
      break-after: page !important;
      page-break-after: always !important;
    }
    .slide-content {
      padding: 2mm !important;
      margin: 0 !important;
      overflow: hidden !important;
      max-height: 200mm !important;
    }
    h1 { font-size: 12pt !important; }
    h2 { font-size: 10pt !important; }
    h3 { font-size: 9pt !important; }
    p, li, td, th { font-size: 7pt !important; }
    .text-xs, .text-sm { font-size: 6pt !important; }
    .data-table td, .data-table th { padding: 0.5mm 1mm !important; }
    #cash-flow-statement .data-table td, #cash-flow-statement .data-table th { 
      padding: 0.2mm 0.5mm !important;
      font-size: 5pt !important;
    }
  `;
  document.head.appendChild(tempStyle);

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i] as HTMLElement;
    
    console.log(`Processing slide ${i + 1}/${slides.length}`);
    
    try {
      // Scale factor for better quality
      const scale = 3; // Increased scale for better quality
      
      // Create a temporary container with exact A4 landscape dimensions for capturing
      const tempContainer = document.createElement('div');
      tempContainer.style.width = '297mm'; // A4 landscape width
      tempContainer.style.height = '210mm'; // A4 landscape height
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.boxSizing = 'border-box';
      
      // Clone the slide content
      const clonedSlide = slide.cloneNode(true) as HTMLElement;
      clonedSlide.style.width = '100%';
      clonedSlide.style.height = '100%';
      clonedSlide.style.transform = 'scale(1)';
      clonedSlide.style.margin = '0';
      clonedSlide.style.padding = '2mm'; // Reduced padding
      clonedSlide.style.boxSizing = 'border-box';
      clonedSlide.style.overflow = 'hidden';
      clonedSlide.style.boxShadow = 'none';
      clonedSlide.style.borderRadius = '0';
      
      // Special handling for cash flow statement
      if (clonedSlide.id === 'cash-flow-statement' || clonedSlide.querySelector('#cash-flow-statement')) {
        const cfTables = clonedSlide.querySelectorAll('.cash-flow-statement table');
        cfTables.forEach(table => {
          (table as HTMLElement).style.fontSize = '5pt';
          const cells = table.querySelectorAll('td, th');
          cells.forEach(cell => {
            (cell as HTMLElement).style.padding = '0.2mm 0.5mm';
          });
        });
      }
      
      // Add to temp container and to body
      tempContainer.appendChild(clonedSlide);
      document.body.appendChild(tempContainer);
      
      const canvas = await html2canvas(tempContainer, {
        scale: scale,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 842, // A4 landscape width in points at 72 DPI
        height: 595, // A4 landscape height in points at 72 DPI
      });
      
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
      
    } catch (error) {
      console.error(`Error capturing slide ${i + 1}:`, error);
    }
  }
  
  // Remove temporary style element
  document.head.removeChild(tempStyle);
  
  console.log('PDF export completed, saving file...');
  pdf.save(filename);
  console.log('PDF saved successfully!');
};

export const exportEntirePresentation = async (filename: string = 'kuguta-budget-complete.pdf') => {
  // Hide print buttons during export
  const printButtons = document.querySelectorAll('.print-button, .print-menu');
  printButtons.forEach(button => {
    (button as HTMLElement).style.display = 'none';
  });

  // Create a temporary style element to enforce print styles during export
  const tempStyle = document.createElement('style');
  tempStyle.textContent = `
    .slide-container {
      width: 297mm !important;
      height: 210mm !important;
      padding: 3mm !important;
      margin: 0 !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
      break-after: page !important;
      page-break-after: always !important;
    }
    .slide-content {
      padding: 2mm !important;
      margin: 0 !important;
      overflow: hidden !important;
      max-height: 200mm !important;
    }
    h1 { font-size: 12pt !important; }
    h2 { font-size: 10pt !important; }
    h3 { font-size: 9pt !important; }
    p, li, td, th { font-size: 7pt !important; }
    .text-xs, .text-sm { font-size: 6pt !important; }
    .data-table { font-size: 6pt !important; }
    .data-table td, .data-table th { padding: 0.5mm 1mm !important; }
    #cash-flow-statement .data-table { font-size: 5pt !important; }
    #cash-flow-statement .data-table td, #cash-flow-statement .data-table th { 
      padding: 0.2mm 0.5mm !important; 
    }
  `;
  document.head.appendChild(tempStyle);

  try {
    const slides = document.querySelectorAll('.slide-container');
    console.log(`Found ${slides.length} slides to export in full presentation`);
    
    const pdf = new jsPDF('landscape', 'mm', 'a4'); // Using landscape orientation
    let isFirstPage = true;

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      
      console.log(`Processing slide ${i + 1}/${slides.length} for full presentation`);
      
      // Create a temporary container with exact A4 landscape dimensions
      const tempContainer = document.createElement('div');
      tempContainer.style.width = '297mm'; // A4 landscape width
      tempContainer.style.height = '210mm'; // A4 landscape height
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.boxSizing = 'border-box';
      
      // Clone the slide content
      const clonedSlide = slide.cloneNode(true) as HTMLElement;
      clonedSlide.style.width = '100%';
      clonedSlide.style.height = '100%';
      clonedSlide.style.transform = 'scale(1)';
      clonedSlide.style.margin = '0';
      clonedSlide.style.padding = '2mm'; // Reduced padding
      clonedSlide.style.boxSizing = 'border-box';
      clonedSlide.style.overflow = 'hidden';
      clonedSlide.style.boxShadow = 'none';
      clonedSlide.style.borderRadius = '0';
      
      // Special handling for cash flow statement
      if (clonedSlide.id === 'cash-flow-statement' || clonedSlide.querySelector('#cash-flow-statement')) {
        const cfTables = clonedSlide.querySelectorAll('.cash-flow-statement table');
        cfTables.forEach(table => {
          (table as HTMLElement).style.fontSize = '5pt';
          const cells = table.querySelectorAll('td, th');
          cells.forEach(cell => {
            (cell as HTMLElement).style.padding = '0.2mm 0.5mm';
          });
        });
      }
      
      // Add to temp container and to body
      tempContainer.appendChild(clonedSlide);
      document.body.appendChild(tempContainer);
      
      // Scale factor for better quality
      const scale = 3; // Increased scale for better quality
      
      const canvas = await html2canvas(tempContainer, {
        scale: scale,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 842, // A4 landscape width in points at 72 DPI
        height: 595, // A4 landscape height in points at 72 DPI
      });
      
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
      
      // Add image exactly fitting to A4 page
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }
    
    console.log('Full presentation PDF export completed, saving file...');
    pdf.save(filename);
    console.log('Full PDF saved successfully!');
  } catch (error) {
    console.error('Error exporting entire presentation:', error);
  } finally {
    // Remove temporary style element
    document.head.removeChild(tempStyle);
    
    // Restore print buttons
    printButtons.forEach(button => {
      (button as HTMLElement).style.display = '';
    });
  }
};
