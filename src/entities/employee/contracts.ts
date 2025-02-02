export const EMPLOYEE_ROLES = {
	ALL: "",
	COOK: "cook",
	WAITER: "waiter",
	DRIVER: "driver",
} as const

export type EmployeeRoleType = (typeof EMPLOYEE_ROLES)[keyof typeof EMPLOYEE_ROLES]

export const EMPLOYEE_ROLE_TO_LABEL: Record<EmployeeRoleType, string> = {
	[EMPLOYEE_ROLES.ALL]: "Все",
	[EMPLOYEE_ROLES.WAITER]: "Официант",
	[EMPLOYEE_ROLES.DRIVER]: "Водитель",
	[EMPLOYEE_ROLES.COOK]: "Повар",
}

export type EmployeeType = {
	id: number
	name: string
	isArchive: boolean
	role: EmployeeRoleType
	phone: string
	birthday: string
}
