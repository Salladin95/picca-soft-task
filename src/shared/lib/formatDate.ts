import { format } from "date-fns"

/**
 * Formats a given date into `dd.mm.yyyy` format.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} - The formatted date in `dd.mm.yyyy` format.
 *
 * @example
 * const formattedDate = formatDate(new Date('1986-01-26'));
 * console.log(formattedDate); // "26.01.1986"
 */

export function formatDate(date: Date): string {
	return format(date, "dd.mm.yyyy")
}
