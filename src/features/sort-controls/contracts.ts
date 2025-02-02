export const SORT_BY = {
	NAME: "name",
	BIRTHDAY: "birthday",
} as const

export type SortByType = (typeof SORT_BY)[keyof typeof SORT_BY]
