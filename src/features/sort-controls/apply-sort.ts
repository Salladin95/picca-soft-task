import { EmployeeType } from "~/entities/employee"
import { SORT_BY, SortByType } from "~/features/sort-controls/contracts"

export const applySort = (employees: EmployeeType[], sortBy: SortByType): EmployeeType[] => {
	const newEmployees = [...employees] // Create a copy to avoid mutation
	newEmployees.sort((a, b) => {
		const aValue = sortBy === SORT_BY.NAME ? a.name : a.birthday
		const bValue = sortBy === SORT_BY.NAME ? b.name : b.birthday
		return aValue.localeCompare(bValue)
	})
	return newEmployees
}
