
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// Batch rendering settings
const BATCH_SIZE = 3; // Process slides in batches of 3
const RENDER_DELAY = 200; // Small delay between batches to allow browser to breathe

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
    /* Chart styling fixes */
    .recharts-wrapper {
      width: 100% !important;
      height: 100% !important;
    }
    .recharts-surface {
      width: 100% !important;
      height: 100% !important;
    }
    .recharts-legend-wrapper {
      font-size: 6pt !important;
    }
    .recharts-text {
      font-size: 6pt !important;
    }
    .recharts-cartesian-axis-tick-value {
      font-size: 5pt !important;
    }
    /* Table fixes */
    table.data-table {
      table-layout: fixed !important;
      width: 100% !important;
    }
    table.data-table th, table.data-table td {
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
  `;
  document.head.appendChild(tempStyle);

  // Process slides in batches
  const slidesArray = Array.from(slides);
  const totalBatches = Math.ceil(slidesArray.length / BATCH_SIZE);
  
  for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
    const batchStart = batchIndex * BATCH_SIZE;
    const batchEnd = Math.min(batchStart + BATCH_SIZE, slidesArray.length);
    const currentBatch = slidesArray.slice(batchStart, batchEnd);
    
    console.log(`Processing batch ${batchIndex + 1}/${totalBatches} (slides ${batchStart + 1}-${batchEnd})`);
    
    // Process each slide in the current batch
    const batchPromises = currentBatch.map(async (slide, slideIndex) => {
      const slideElement = slide as HTMLElement;
      const globalSlideIndex = batchStart + slideIndex;
      
      console.log(`Preparing slide ${globalSlideIndex + 1}/${slides.length}`);
      
      try {
        // Scale factor for better quality - adjust based on content type
        let scale = 3; // Default scale
        
        // Identify content type for optimized rendering
        if (slideElement.id === 'cash-flow-statement' || slideElement.querySelector('#cash-flow-statement')) {
          scale = 4; // Higher scale for detailed tables
        } else if (slideElement.querySelector('.recharts-wrapper')) {
          scale = 3.5; // Adjusted scale for charts
        }
        
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
        const clonedSlide = slideElement.cloneNode(true) as HTMLElement;
        clonedSlide.style.width = '100%';
        clonedSlide.style.height = '100%';
        clonedSlide.style.transform = 'scale(1)';
        clonedSlide.style.margin = '0';
        clonedSlide.style.padding = '2mm'; // Reduced padding
        clonedSlide.style.boxSizing = 'border-box';
        clonedSlide.style.overflow = 'hidden';
        clonedSlide.style.boxShadow = 'none';
        clonedSlide.style.borderRadius = '0';
        
        // Special handling for content types
        if (clonedSlide.id === 'cash-flow-statement' || clonedSlide.querySelector('#cash-flow-statement')) {
          // Apply special styles for cash flow statement
          const tables = clonedSlide.querySelectorAll('table');
          tables.forEach(table => {
            (table as HTMLElement).style.tableLayout = 'fixed';
            (table as HTMLElement).style.width = '100%';
            (table as HTMLElement).style.fontSize = '5pt';
            
            // Set fixed width for table cells
            const cells = table.querySelectorAll('td, th');
            cells.forEach(cell => {
              (cell as HTMLElement).style.padding = '0.2mm 0.5mm';
              (cell as HTMLElement).style.whiteSpace = 'nowrap';
              (cell as HTMLElement).style.overflow = 'hidden';
              (cell as HTMLElement).style.textOverflow = 'ellipsis';
            });
          });
        } else if (clonedSlide.querySelector('.recharts-wrapper')) {
          // Apply special styles for charts
          const charts = clonedSlide.querySelectorAll('.recharts-wrapper');
          charts.forEach(chart => {
            (chart as HTMLElement).style.width = '100%';
            (chart as HTMLElement).style.height = 'auto';
            
            // Adjust chart text sizes
            const texts = chart.querySelectorAll('.recharts-text');
            texts.forEach(text => {
              (text as HTMLElement).style.fontSize = '6pt';
            });
            
            // Adjust legend
            const legends = chart.querySelectorAll('.recharts-legend-wrapper');
            legends.forEach(legend => {
              (legend as HTMLElement).style.fontSize = '6pt';
            });
          });
        }
        
        // Add to temp container and to body
        tempContainer.appendChild(clonedSlide);
        document.body.appendChild(tempContainer);
        
        // Wait a small amount of time to ensure rendering completes
        await new Promise(resolve => setTimeout(resolve, 50)); 
        
        const canvas = await html2canvas(tempContainer, {
          scale: scale,
          useCORS: true,
          logging: false,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: 842, // A4 landscape width in points at 72 DPI
          height: 595, // A4 landscape height in points at 72 DPI
          onclone: (document, element) => {
            // Additional modifications to the cloned document if needed
            const charts = element.querySelectorAll('.recharts-wrapper');
            charts.forEach(chart => {
              const svg = chart.querySelector('svg');
              if (svg) {
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
              }
            });
            return element;
          }
        });
        
        // Remove the temp container
        document.body.removeChild(tempContainer);
        
        const imgData = canvas.toDataURL('image/png', 1.0); // Using maximum quality
        
        // A4 dimensions in mm for landscape
        const pdfWidth = 297;
        const pdfHeight = 210;
        
        return {
          imgData,
          isFirst: globalSlideIndex === 0,
          pdfWidth,
          pdfHeight
        };
        
      } catch (error) {
        console.error(`Error capturing slide ${globalSlideIndex + 1}:`, error);
        return null;
      }
    });
    
    // Wait for all slides in this batch to be processed
    const batchResults = await Promise.all(batchPromises);
    
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
    /* Chart styling fixes */
    .recharts-wrapper {
      width: 100% !important;
      height: 100% !important;
    }
    .recharts-surface {
      width: 100% !important;
      height: 100% !important;
    }
    .recharts-legend-wrapper {
      font-size: 6pt !important;
    }
    .recharts-text {
      font-size: 6pt !important;
    }
    .recharts-cartesian-axis-tick-value {
      font-size: 5pt !important;
    }
    /* Table fixes */
    table.data-table {
      table-layout: fixed !important;
      width: 100% !important;
    }
    table.data-table th, table.data-table td {
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
  `;
  document.head.appendChild(tempStyle);

  try {
    const slides = document.querySelectorAll('.slide-container');
    console.log(`Found ${slides.length} slides to export in full presentation`);
    
    const pdf = new jsPDF('landscape', 'mm', 'a4'); // Using landscape orientation
    let isFirstPage = true;

    // Process slides in batches
    const slidesArray = Array.from(slides);
    const BATCH_SIZE = 3; // Process slides in batches of 3
    const totalBatches = Math.ceil(slidesArray.length / BATCH_SIZE);
    
    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      const batchStart = batchIndex * BATCH_SIZE;
      const batchEnd = Math.min(batchStart + BATCH_SIZE, slidesArray.length);
      const currentBatch = slidesArray.slice(batchStart, batchEnd);
      
      console.log(`Processing batch ${batchIndex + 1}/${totalBatches} (slides ${batchStart + 1}-${batchEnd})`);
      
      // Process each slide in the current batch
      const batchPromises = currentBatch.map(async (slide, slideIndex) => {
        const slideElement = slide as HTMLElement;
        const globalSlideIndex = batchStart + slideIndex;
        
        console.log(`Preparing slide ${globalSlideIndex + 1}/${slides.length} for full presentation`);
        
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
        const clonedSlide = slideElement.cloneNode(true) as HTMLElement;
        clonedSlide.style.width = '100%';
        clonedSlide.style.height = '100%';
        clonedSlide.style.transform = 'scale(1)';
        clonedSlide.style.margin = '0';
        clonedSlide.style.padding = '2mm'; // Reduced padding
        clonedSlide.style.boxSizing = 'border-box';
        clonedSlide.style.overflow = 'hidden';
        clonedSlide.style.boxShadow = 'none';
        clonedSlide.style.borderRadius = '0';
        
        // Special handling for content types
        if (clonedSlide.id === 'cash-flow-statement' || clonedSlide.querySelector('#cash-flow-statement')) {
          // Apply special styles for cash flow statement
          const tables = clonedSlide.querySelectorAll('table');
          tables.forEach(table => {
            (table as HTMLElement).style.tableLayout = 'fixed';
            (table as HTMLElement).style.width = '100%';
            (table as HTMLElement).style.fontSize = '5pt';
            
            // Set fixed width for table cells
            const cells = table.querySelectorAll('td, th');
            cells.forEach(cell => {
              (cell as HTMLElement).style.padding = '0.2mm 0.5mm';
              (cell as HTMLElement).style.whiteSpace = 'nowrap';
              (cell as HTMLElement).style.overflow = 'hidden';
              (cell as HTMLElement).style.textOverflow = 'ellipsis';
            });
          });
        } else if (clonedSlide.querySelector('.recharts-wrapper')) {
          // Apply special styles for charts
          const charts = clonedSlide.querySelectorAll('.recharts-wrapper');
          charts.forEach(chart => {
            (chart as HTMLElement).style.width = '100%';
            (chart as HTMLElement).style.height = 'auto';
            
            // Adjust chart text sizes
            const texts = chart.querySelectorAll('.recharts-text');
            texts.forEach(text => {
              (text as HTMLElement).style.fontSize = '6pt';
            });
            
            // Adjust legend
            const legends = chart.querySelectorAll('.recharts-legend-wrapper');
            legends.forEach(legend => {
              (legend as HTMLElement).style.fontSize = '6pt';
            });
          });
        }
        
        // Add to temp container and to body
        tempContainer.appendChild(clonedSlide);
        document.body.appendChild(tempContainer);
        
        // Scale factor for better quality - adjust based on content type
        let scale = 3; // Default scale
        
        // Identify content type for optimized rendering
        if (slideElement.id === 'cash-flow-statement' || slideElement.querySelector('#cash-flow-statement')) {
          scale = 4; // Higher scale for detailed tables
        } else if (slideElement.querySelector('.recharts-wrapper')) {
          scale = 3.5; // Adjusted scale for charts
        }
        
        // Wait a small amount of time to ensure rendering completes
        await new Promise(resolve => setTimeout(resolve, 50));
        
        const canvas = await html2canvas(tempContainer, {
          scale: scale,
          useCORS: true,
          logging: false,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: 842, // A4 landscape width in points at 72 DPI
          height: 595, // A4 landscape height in points at 72 DPI
          onclone: (document, element) => {
            // Additional modifications to the cloned document if needed
            const charts = element.querySelectorAll('.recharts-wrapper');
            charts.forEach(chart => {
              const svg = chart.querySelector('svg');
              if (svg) {
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
              }
            });
            return element;
          }
        });
        
        // Remove the temp container
        document.body.removeChild(tempContainer);
        
        const imgData = canvas.toDataURL('image/png', 1.0); // Using maximum quality
        
        // A4 dimensions in mm for landscape
        const pdfWidth = 297;
        const pdfHeight = 210;
        
        return {
          imgData,
          isFirst: globalSlideIndex === 0,
          pdfWidth,
          pdfHeight
        };
      });
      
      // Wait for all slides in this batch to be processed
      const batchResults = await Promise.all(batchPromises);
      
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
    // Remove temporary style element
    document.head.removeChild(tempStyle);
    
    // Restore print buttons
    printButtons.forEach(button => {
      (button as HTMLElement).style.display = '';
    });
  }
};
