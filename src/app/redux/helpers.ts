import { EmployeeType } from "~/shared/types"

type ApplyFiltersAndSortingParams = {
	employees: EmployeeType[]
	filter: { role: string; isArchive: boolean }
	sortBy: string
}

export function applyFiltersAndSorting(params: ApplyFiltersAndSortingParams): EmployeeType[] {
	const { employees, filter, sortBy } = params
	const filteredEmployees = employees.filter((employee) => {
		const roleMatch = filter.role === "" || employee.role === filter.role
		const archiveMatch = employee.isArchive === filter.isArchive
		return roleMatch && archiveMatch
	})

	filteredEmployees.sort((a, b) => {
		const aValue = sortBy === "name" ? a.name : a.birthday
		const bValue = sortBy === "name" ? b.name : b.birthday
		return aValue.localeCompare(bValue)
	})

	return filteredEmployees
}
