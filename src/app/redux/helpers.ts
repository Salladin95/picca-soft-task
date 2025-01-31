import { EmployeeType } from "~/shared/types"

type ApplyFilterParams = {
	employees: EmployeeType[]
	filter: { role: string; isArchive: boolean }
}

export function filterEmployees(params: ApplyFilterParams): EmployeeType[] {
	const { employees, filter } = params
	const filteredEmployees = employees.filter((employee) => {
		const roleMatch = filter.role === "" || employee.role === filter.role
		const archiveMatch = employee.isArchive === filter.isArchive
		return roleMatch && archiveMatch
	})
	return filteredEmployees
}

type ApplySortParams = {
	employees: EmployeeType[]
	sortBy: string
}

export function sortEmployees(params: ApplySortParams): EmployeeType[] {
	const { employees, sortBy } = params
	const newEmployees = [...employees]

	newEmployees.sort((a, b) => {
		const aValue = sortBy === "name" ? a.name : a.birthday
		const bValue = sortBy === "name" ? b.name : b.birthday
		return aValue.localeCompare(bValue)
	})

	return newEmployees
}
