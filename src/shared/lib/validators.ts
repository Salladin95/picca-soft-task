import { EMPLOYEE_ROLES, EmployeeRoleType } from "~/entities/employee"

export const validateDateInPast = (date: Date): boolean => {
	const oneDayAgo = new Date()
	oneDayAgo.setDate(oneDayAgo.getDate() - 1) // Subtract 1 day from current date
	return date < oneDayAgo // Ensure the date is older than one day
}

export const validateEmployeeRole = (role: string): boolean => {
	return Object.values(EMPLOYEE_ROLES).includes(role as EmployeeRoleType)
}
