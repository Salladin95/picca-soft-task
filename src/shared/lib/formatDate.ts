/**
 * Formats a given date into `dd.MM.yyyy` format.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} - The formatted date in `dd.MM.yyyy` format.
 *
 * @example
 * const formattedDate = formatDate(new Date('1986-01-26'));
 * console.log(formattedDate); // "26.01.1986"
 */

export function formatDate(date: Date): string {
	const day = String(date.getDate()).padStart(2, "0") // Add leading zero if necessary
	const month = String(date.getMonth() + 1).padStart(2, "0") // Months are 0-indexed, so add 1
	const year = date.getFullYear()
	return `${day}.${month}.${year}`
}
