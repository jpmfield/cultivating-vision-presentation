
/**
 * Formats a number or string value as currency
 * @param value The value to format
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number | string) => {
  if (value === 0 || value === '-') {
    return '$-';
  }
  return `$${Number(value).toLocaleString()}`;
};
