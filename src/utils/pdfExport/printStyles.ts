
/**
 * Applies print styles to the document for better PDF rendering
 * @returns The created style element
 */
export const applyPrintStyles = (): HTMLStyleElement => {
  const tempStyle = document.createElement('style');
  tempStyle.textContent = `
    .slide-container {
      width: 297mm !important;
      height: 210mm !important;
      padding: 0 !important;
      margin: 0 !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
      break-after: page !important;
      page-break-after: always !important;
    }
    .slide-content {
      padding: 10mm !important;
      margin: 0 !important;
      overflow: hidden !important;
      max-height: 190mm !important;
      box-sizing: border-box !important;
    }
    h1 { font-size: 14pt !important; }
    h2 { font-size: 12pt !important; }
    h3 { font-size: 10pt !important; }
    p, li { font-size: 9pt !important; }
    td, th { font-size: 8pt !important; }
    .text-xs, .text-sm { font-size: 7pt !important; }
    .data-table td, .data-table th { 
      padding: 1mm 2mm !important; 
      word-wrap: break-word !important;
    }
    .data-table {
      table-layout: fixed !important;
      width: 100% !important;
    }
    #cash-flow-statement .data-table td, 
    #cash-flow-statement .data-table th { 
      padding: 0.5mm 1mm !important;
      font-size: 6pt !important;
    }
    .grid {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 5mm !important;
    }
  `;
  document.head.appendChild(tempStyle);
  return tempStyle;
};

/**
 * Removes print styles from the document
 * @param styleElement The style element to remove
 */
export const removePrintStyles = (styleElement: HTMLStyleElement): void => {
  if (styleElement && document.head.contains(styleElement)) {
    document.head.removeChild(styleElement);
  }
};
