import { EmployeeType } from "~/shared/types"
import { FILTER_ROLES, FilterRolesType, FilterType, SORT_BY, SortByType } from "~/app/redux"

export function isSortBy(value: unknown): value is SortByType {
	return Object.values(SORT_BY).includes(value as SortByType)
}

export function isFilterRoles(value: unknown): value is FilterRolesType {
	return Object.values(FILTER_ROLES).includes(value as FilterRolesType)
}

export function isFilter(value: unknown): value is FilterType {
	return (
		value instanceof Object &&
		value !== null &&
		"role" in value &&
		isFilterRoles(value.role) && // Use the isFilterRoles type guard
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
		isFilterRoles(value.role)
	)
}

export function areEmployees(value: unknown): value is EmployeeType[] {
	return (
		Array.isArray(value) && value.every((item) => isEmployee(item)) // Check if every item in the array is an EmployeeType
	)
}
