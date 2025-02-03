import { FilterType } from "~/features/filter-panel/index.ts"
import { EMPLOYEE_ROLES, EmployeeType } from "~/entities/employee"

export const applyFilter = (employees: EmployeeType[], filter: FilterType): EmployeeType[] => {
	return employees.filter((employee) => {
		const roleMatch = filter.role === EMPLOYEE_ROLES.ALL || employee.role === filter.role
		const archiveMatch = employee.isArchive === filter.isArchive
		return roleMatch && archiveMatch
	})
}
