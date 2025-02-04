import { z } from "zod"

import { FilterType } from "~/features/filter-panel"
import { SORT_BY, SortByType } from "~/features/sort-controls"
import { EMPLOYEE_ROLES, EmployeeRoleType, EmployeeType } from "~/entities/employee"

export const EmployeeRoleSchema = z.nativeEnum(EMPLOYEE_ROLES)
export const SortBySchema = z.nativeEnum(SORT_BY)
export const FilterSchema = z.object({
	role: EmployeeRoleSchema,
	isArchive: z.boolean(),
})
export const EmployeeSchema = z.object({
	id: z.number(),
	name: z.string(),
	isArchive: z.boolean(),
	role: EmployeeRoleSchema,
	phone: z.string(),
	birthday: z.string(),
})

export function isSortBy(value: unknown): value is SortByType {
	return SortBySchema.safeParse(value).success
}

export function isEmployeeRole(value: unknown): value is EmployeeRoleType {
	return EmployeeRoleSchema.safeParse(value).success
}

export function isFilter(value: unknown): value is FilterType {
	return FilterSchema.safeParse(value).success
}

export function isEmployee(value: unknown): value is EmployeeType {
	return EmployeeSchema.safeParse(value).success
}

export function areEmployees(value: unknown): value is EmployeeType[] {
	return z.array(EmployeeSchema).safeParse(value).success
}
