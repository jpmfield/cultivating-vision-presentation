
/**
 * Applies print styles to the document for better PDF rendering
 * @returns The created style element
 */
export const applyPrintStyles = (): HTMLStyleElement => {
  const tempStyle = document.createElement('style');
  tempStyle.textContent = `
    @page {
      size: 297mm 210mm landscape;
      margin: 0;
    }
    .slide-container {
      width: 297mm !important;
      height: 210mm !important;
      padding: 0 !important;
      margin: 0 !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
      break-after: page !important;
      page-break-after: always !important;
      position: relative !important;
    }
    .slide-content {
      padding: 10mm !important;
      margin: 0 !important;
      overflow: hidden !important;
      max-height: 190mm !important;
      box-sizing: border-box !important;
      position: relative !important;
    }
    h1 { font-size: 14pt !important; margin-top: 0 !important; margin-bottom: 4mm !important; }
    h2 { font-size: 12pt !important; margin-top: 0 !important; margin-bottom: 3mm !important; }
    h3 { font-size: 10pt !important; margin-top: 0 !important; margin-bottom: 2mm !important; }
    p, li { font-size: 9pt !important; margin: 0 0 1mm 0 !important; }
    td, th { font-size: 8pt !important; }
    .text-xs, .text-sm { font-size: 7pt !important; }
    .data-table td, .data-table th { 
      padding: 1mm 2mm !important; 
      word-wrap: break-word !important;
      text-align: left !important;
    }
    .data-table {
      table-layout: fixed !important;
      width: 100% !important;
      border-collapse: collapse !important;
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
    .recharts-wrapper, .recharts-surface {
      overflow: visible !important;
    }
    /* Hide any scrollbars during export */
    ::-webkit-scrollbar {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
    }
    * {
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
      print-color-adjust: exact !important;
      -webkit-print-color-adjust: exact !important;
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
