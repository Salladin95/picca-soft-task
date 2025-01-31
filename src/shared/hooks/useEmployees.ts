import employees from "~/app/employees.json"
import { EmployeeType } from "~/shared/types"

export function useEmployees(): EmployeeType[] {
	return employees
}
