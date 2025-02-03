import { describe, it, expect } from "vitest"

import { validEmployees } from "~/shared/mock"
import { EMPLOYEE_ROLES } from "~/entities/employee"
import { FilterType } from "~/features/filter-panel/contracts"
import { applyFilter } from "~/features/filter-panel/apply-filter"

describe("applyFilter", () => {
	const employees = validEmployees

	it("should filter employees by role", () => {
		const filter: FilterType = {
			role: EMPLOYEE_ROLES.DRIVER,
			isArchive: false,
		}
		const result = applyFilter(employees, filter)
		expect(result.length).toBe(2)
		expect(result[0].role).toBe(EMPLOYEE_ROLES.DRIVER)
		expect(result[1].role).toBe(EMPLOYEE_ROLES.DRIVER)
	})

	it("should filter employees by archive status", () => {
		const filter: FilterType = {
			role: EMPLOYEE_ROLES.ALL,
			isArchive: true,
		}
		const result = applyFilter(employees, filter)
		expect(result.length).toBe(1)
		expect(result[0].isArchive).toBe(true)
	})

	it("should filter employees by role and archive status", () => {
		const filter: FilterType = {
			role: EMPLOYEE_ROLES.COOK,
			isArchive: true,
		}
		const result = applyFilter(employees, filter)
		expect(result.length).toBe(1)
		expect(result[0].role).toBe(EMPLOYEE_ROLES.COOK)
		expect(result[0].isArchive).toBe(true)
	})

	it("should return all employees when filter is set to ALL and not archived", () => {
		const filter: FilterType = {
			role: EMPLOYEE_ROLES.ALL,
			isArchive: false,
		}
		const result = applyFilter(employees, filter)
		expect(result.length).toBe(2)
	})

	it("should return no employees when filter does not match any", () => {
		const filter: FilterType = {
			role: EMPLOYEE_ROLES.WAITER,
			isArchive: true,
		}
		const result = applyFilter(employees, filter)
		expect(result.length).toBe(0)
	})
})
