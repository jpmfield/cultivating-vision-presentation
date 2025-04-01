
/**
 * Creates and applies temporary print styles for PDF export
 * @returns The created style element that should be removed after export
 */
export const applyPrintStyles = (): HTMLStyleElement => {
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
  return tempStyle;
};
