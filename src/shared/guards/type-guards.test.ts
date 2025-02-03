import { describe, it, expect } from "vitest"

import { SORT_BY } from "~/features/sort-controls"
import { FilterType } from "~/features/filter-panel"
import { EMPLOYEE_ROLES, EmployeeType } from "~/entities/employee"
import { areEmployees, isEmployee, isEmployeeRole, isFilter, isSortBy } from "~/shared/guards/type-guards"

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
		const validFilter: FilterType = {
			role: EMPLOYEE_ROLES.WAITER,
			isArchive: true,
		}
		const invalidFilter = {
			role: "INVALID_ROLE",
			isArchive: "not_a_boolean",
		}
		expect(isFilter(validFilter)).toBe(true)
		expect(isFilter(invalidFilter)).toBe(false)
	})

	it("should correctly identify EmployeeType", () => {
		const validEmployee: EmployeeType = {
			id: 1,
			name: "John Doe",
			role: EMPLOYEE_ROLES.DRIVER,
			isArchive: false,
			phone: "123-456-7890",
			birthday: "1990-01-01",
		}
		const invalidEmployee = {
			id: "not_a_number",
			name: 123,
			role: "INVALID_ROLE",
			isArchive: "not_a_boolean",
			phone: 1234567890,
			birthday: "not_a_date",
		}
		expect(isEmployee(validEmployee)).toBe(true)
		expect(isEmployee(invalidEmployee)).toBe(false)
	})

	it("should correctly identify EmployeeType array", () => {
		const validEmployees: EmployeeType[] = [
			{
				id: 1,
				name: "John Doe",
				role: EMPLOYEE_ROLES.COOK,
				isArchive: false,
				phone: "123-456-7890",
				birthday: "1990-01-01",
			},
			{
				id: 2,
				name: "Jane Doe",
				role: EMPLOYEE_ROLES.WAITER,
				isArchive: true,
				phone: "098-765-4321",
				birthday: "1992-02-02",
			},
		]
		const invalidEmployees = [
			{
				id: 1,
				name: "John Doe",
				role: EMPLOYEE_ROLES.COOK,
				isArchive: false,
				phone: "123-456-7890",
				birthday: "1990-01-01",
			},
			{
				id: "not_a_number",
				name: 123,
				role: "INVALID_ROLE",
				isArchive: "not_a_boolean",
				phone: 1234567890,
				birthday: "not_a_date",
			},
		]
		expect(areEmployees(validEmployees)).toBe(true)
		expect(areEmployees(invalidEmployees)).toBe(false)
	})
})
