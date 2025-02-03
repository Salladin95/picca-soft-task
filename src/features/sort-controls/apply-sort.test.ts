import { describe, it, expect } from "vitest"

import { validEmployees } from "~/shared/mock"
import { SORT_BY } from "~/features/sort-controls/contracts"
import { applySort } from "~/features/sort-controls/apply-sort"

describe("applySort", () => {
	it("should sort employees by name", () => {
		const sortedByName = applySort(validEmployees, SORT_BY.NAME)
		expect(sortedByName[0].name).toBe("Александр Ларионов")
		expect(sortedByName[1].name).toBe("Богдан Давыдов")
		expect(sortedByName[2].name).toBe("Илья Емельянов")
	})

	it("should sort employees by birthday", () => {
		const sortedByBirthday = applySort(validEmployees, SORT_BY.BIRTHDAY)
		expect(sortedByBirthday[0].birthday).toBe("12.02.1982")
		expect(sortedByBirthday[1].birthday).toBe("26.01.1986")
		expect(sortedByBirthday[2].birthday).toBe("29.11.1990")
	})
})
