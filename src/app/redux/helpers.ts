import { EmployeeType } from "~/shared/types"
import { FILTER_ROLES, FilterType, SORT_BY, SortByType } from "~/app/redux/types"

export const applyFilters = (employees: EmployeeType[], filter: FilterType): EmployeeType[] => {
	return employees.filter((employee) => {
		const roleMatch = filter.role === FILTER_ROLES.ALL || employee.role === filter.role
		const archiveMatch = employee.isArchive === filter.isArchive
		return roleMatch && archiveMatch
	})
}

export const applySort = (employees: EmployeeType[], sortBy: SortByType): EmployeeType[] => {
	const newEmployees = [...employees] // Create a copy to avoid mutation
	newEmployees.sort((a, b) => {
		const aValue = sortBy === SORT_BY.NAME ? a.name : a.birthday
		const bValue = sortBy === SORT_BY.NAME ? b.name : b.birthday
		return aValue.localeCompare(bValue)
	})
	return newEmployees
}
