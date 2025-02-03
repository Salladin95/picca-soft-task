import { EMPLOYEE_ROLES, EmployeeType } from "~/entities/employee"

export const validEmployees: EmployeeType[] = [
	{
		id: 1,
		name: "Илья Емельянов",
		isArchive: false,
		role: EMPLOYEE_ROLES.DRIVER,
		phone: "+7 (883) 508-3269",
		birthday: "12.02.1982",
	},
	{
		id: 2,
		name: "Александр Ларионов",
		isArchive: true,
		role: EMPLOYEE_ROLES.COOK,
		phone: "+7 (823) 440-3602",
		birthday: "26.01.1986",
	},
	{
		id: 3,
		name: "Богдан Давыдов",
		isArchive: false,
		role: EMPLOYEE_ROLES.DRIVER,
		phone: "+7 (971) 575-2645",
		birthday: "29.11.1990",
	},
]

export const invalidEmployee = {
	id: "not_a_number",
	name: 123,
	role: "INVALID_ROLE",
	isArchive: "not_a_boolean",
	phone: 1234567890,
	birthday: "not_a_date",
}

export const validEmployee = {
	id: 1,
	name: "Илья Емельянов",
	isArchive: false,
	role: EMPLOYEE_ROLES.DRIVER,
	phone: "+7 (883) 508-3269",
	birthday: "12.02.1982",
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
