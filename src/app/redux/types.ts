export const EMPLOYEES_LOCAL_STORE_KEYS = {
	EMPLOYEES: "EMPLOYEES",
	SORT_BY: "SORT_BY",
	FILTER_BY: "FILTER_BY",
} as const

export const SORT_BY = {
	NAME: "name",
	BIRTHDAY: "birthday",
} as const

export type SortByType = (typeof SORT_BY)[keyof typeof SORT_BY]

export const FILTER_ROLES = {
	ALL: "",
	COOK: "cook",
	WAITER: "waiter",
	DRIVER: "driver",
} as const
export type FilterRolesType = (typeof FILTER_ROLES)[keyof typeof FILTER_ROLES]

export type FilterType = {
	role: FilterRolesType
	isArchive: boolean
}
