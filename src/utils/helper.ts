/**
 * Converts a page parameter to a valid page number.
 * Returns 1 if the page is undefined, empty, or invalid (e.g., non-numeric or less than 1).
 * Otherwise, returns the parsed integer page number.
 *
 * @param page - The page number as a string (e.g., "1", "2") or undefined if not provided.
 * @returns A positive integer representing the page number (minimum 1).
 */
export function getPageNumber(page: string | undefined): number {
  if (!page) return 1; // Handles undefined or empty string
  const num = parseInt(page, 10); // Convert string to integer
  return !isNaN(num) && num >= 1 ? num : 1; // Ensure valid positive number
}