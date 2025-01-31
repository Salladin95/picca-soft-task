import { EmployeeType } from "~/shared/types"

export const applyFilters = (
	employees: EmployeeType[],
	filter: {
		role: string
		isArchive: boolean
	},
): EmployeeType[] => {
	return employees.filter((employee) => {
		const roleMatch = filter.role === "" || employee.role === filter.role
		const archiveMatch = employee.isArchive === filter.isArchive
		return roleMatch && archiveMatch
	})
}

export const applySort = (employees: EmployeeType[], sortBy: string): EmployeeType[] => {
	const newEmployees = [...employees] // Create a copy to avoid mutation
	newEmployees.sort((a, b) => {
		const aValue = sortBy === "name" ? a.name : a.birthday
		const bValue = sortBy === "name" ? b.name : b.birthday
		return aValue.localeCompare(bValue)
	})
	return newEmployees
}
