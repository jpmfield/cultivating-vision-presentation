
/**
 * Formats a number or string value as currency
 * @param value The value to format
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number | string) => {
  if (value === 0 || value === '-') {
    return '$-';
  }
  
  const numValue = Number(value);
  
  if (isNaN(numValue)) {
    return '$-';
  }
  
  // Handle negative numbers
  if (numValue < 0) {
    return `-$${Math.abs(numValue).toLocaleString()}`;
  }
  
  return `$${numValue.toLocaleString()}`;
};
