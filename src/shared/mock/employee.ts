import { EMPLOYEE_ROLES, EmployeeType } from "~/entities/employee"

// Mock valid employees data
export const validEmployees: EmployeeType[] = [
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

// Mock invalid employee data
export const invalidEmployee = {
	id: "not_a_number",
	name: 123,
	role: "INVALID_ROLE",
	isArchive: "not_a_boolean",
	phone: 1234567890,
	birthday: "not_a_date",
}

export const validEmployee = {
	id: "not_a_number",
	name: 123,
	role: "INVALID_ROLE",
	isArchive: "not_a_boolean",
	phone: 1234567890,
	birthday: "not_a_date",
}

export function getValidEmployees(): EmployeeType[] {
	return validEmployees
}


export function getValidEmployee(): unknown {
	return validEmployee
}

export function getInvalidEmployee(): unknown {
	return invalidEmployee
}

export function getMixedEmployees(): unknown[] {
	return [...validEmployees, invalidEmployee]
}
