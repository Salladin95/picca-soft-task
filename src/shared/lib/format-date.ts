import { format } from "date-fns"

export const DATE_FORMAT = "dd.MM.yyyy"

/**
 * Formats a given date into `dd.MM.yyyy` format.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} - The formatted date in `dd.mm.yyyy` format.
 *
 * @example
 * const formattedDate = formatDate(new Date('1986-01-26'));
 * console.log(formattedDate); // "26.01.1986"
 */

export function formatDate(date: Date): string {
	return format(date, DATE_FORMAT)
}
