import { FilterType } from "src/features/filter-panel"
import { SORT_BY, SortByType } from "~/features/sort-controls"
import { EMPLOYEE_ROLES, EmployeeRoleType, EmployeeType } from "~/entities/employee"

export function isSortBy(value: unknown): value is SortByType {
	return Object.values(SORT_BY).includes(value as SortByType)
}

export function isEmployeeRole(value: unknown): value is EmployeeRoleType {
	return Object.values(EMPLOYEE_ROLES).includes(value as EmployeeRoleType)
}

export function isFilter(value: unknown): value is FilterType {
	return (
		value instanceof Object &&
		value !== null &&
		"role" in value &&
		isEmployeeRole(value.role) && // Use the isFilterRoles type guard
		"isArchive" in value &&
		typeof value.isArchive === "boolean"
	)
}

export function isEmployee(value: unknown): value is EmployeeType {
	// Duck typing: Check for the presence and type of a few key properties.
	// If it walks like a duck and quacks like a duck, then it must be a duck.
	return (
		typeof value === "object" &&
		value !== null &&
		"id" in value &&
		typeof value.id === "number" &&
		"name" in value &&
		typeof value.name === "string" &&
		"role" in value &&
		isEmployeeRole(value.role)
	)
}

export function areEmployees(value: unknown): value is EmployeeType[] {
	return (
		Array.isArray(value) && value.every((item) => isEmployee(item)) // Check if every item in the array is an Types
	)
}
