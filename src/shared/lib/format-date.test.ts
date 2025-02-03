import { describe, it, expect } from "vitest"

import { formatDate } from "~/shared/lib/format-date"

describe("formatDate", () => {
	it("should format a date to dd.MM.yyyy", () => {
		const date = new Date("1986-01-26")
		const formattedDate = formatDate(date)
		expect(formattedDate).toBe("26.01.1986")
	})

	it("should handle invalid date input gracefully", () => {
		const date = new Date("invalid date")
		expect(() => formatDate(date)).toThrow(Error)
	})
})
