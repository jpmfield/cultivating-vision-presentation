
import html2canvas from 'html2canvas';
import { BATCH_SIZE, RENDER_DELAY } from './constants';

/**
 * Applies special styles to a cloned slide based on its content type
 */
const applySpecialStyles = (clonedSlide: HTMLElement): void => {
  // Special handling for cash flow statement
  if (clonedSlide.id === 'cash-flow-statement' || clonedSlide.querySelector('#cash-flow-statement')) {
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
  } 
  // Special handling for charts
  else if (clonedSlide.querySelector('.recharts-wrapper')) {
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
};

/**
 * Process a single slide and convert it to canvas
 */
export const processSlide = async (slide: HTMLElement, globalSlideIndex: number, totalSlides: number): Promise<{
  imgData: string;
  isFirst: boolean;
  pdfWidth: number;
  pdfHeight: number;
} | null> => {
  console.log(`Preparing slide ${globalSlideIndex + 1}/${totalSlides}`);
  
  try {
    // Scale factor for better quality - adjust based on content type
    let scale = 3; // Default scale
    
    // Identify content type for optimized rendering
    if (slide.id === 'cash-flow-statement' || slide.querySelector('#cash-flow-statement')) {
      scale = 4; // Higher scale for detailed tables
    } else if (slide.querySelector('.recharts-wrapper')) {
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
    
    // Apply special styling based on content type
    applySpecialStyles(clonedSlide);
    
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
};

/**
 * Process a batch of slides and return their canvas data
 */
export const processBatch = async (
  slidesArray: HTMLElement[], 
  batchIndex: number, 
  totalBatches: number,
  totalSlides: number
): Promise<Array<{
  imgData: string;
  isFirst: boolean;
  pdfWidth: number;
  pdfHeight: number;
} | null>> => {
  const batchStart = batchIndex * BATCH_SIZE;
  const batchEnd = Math.min(batchStart + BATCH_SIZE, slidesArray.length);
  const currentBatch = slidesArray.slice(batchStart, batchEnd);
  
  console.log(`Processing batch ${batchIndex + 1}/${totalBatches} (slides ${batchStart + 1}-${batchEnd})`);
  
  // Process each slide in the current batch
  const batchPromises = currentBatch.map((slide, slideIndex) => {
    const globalSlideIndex = batchStart + slideIndex;
    return processSlide(slide, globalSlideIndex, totalSlides);
  });
  
  // Wait for all slides in this batch to be processed
  return await Promise.all(batchPromises);
};
