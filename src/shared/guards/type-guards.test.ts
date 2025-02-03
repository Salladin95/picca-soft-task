import { describe, it, expect } from "vitest"

import { SORT_BY } from "~/features/sort-controls"
import { EMPLOYEE_ROLES } from "~/entities/employee"
import { areEmployees, isEmployee, isEmployeeRole, isFilter, isSortBy } from "~/shared/guards/type-guards"
import {
	getMixedEmployees,
	invalidEmployee,
	invalidFilter,
	validEmployee,
	validEmployees,
	validFilter,
} from "~/shared/mock"

describe("Type Guards", () => {
	it("should correctly identify SortByType", () => {
		expect(isSortBy(SORT_BY.NAME)).toBe(true)
		expect(isSortBy("INVALID_SORT")).toBe(false)
	})

	it("should correctly identify EmployeeRoleType", () => {
		expect(isEmployeeRole(EMPLOYEE_ROLES.COOK)).toBe(true)
		expect(isEmployeeRole("INVALID_ROLE")).toBe(false)
	})

	it("should correctly identify FilterType", () => {
		expect(isFilter(validFilter)).toBe(true)
		expect(isFilter(invalidFilter)).toBe(false)
	})

	it("should correctly identify EmployeeType", () => {
		expect(isEmployee(validEmployee)).toBe(true)
		expect(isEmployee(invalidEmployee)).toBe(false)
	})

	it("should correctly identify EmployeeType array", () => {
		expect(areEmployees(validEmployees)).toBe(true)
		expect(areEmployees(getMixedEmployees())).toBe(false)
	})
})
