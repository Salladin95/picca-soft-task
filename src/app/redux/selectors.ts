import { RootState } from "~/app/redux/store"

export const selectAllEmployees = (state: RootState) => state.employees.employees
export const selectEmployeeById = (state: RootState, id: number) =>
	state.employees.employees.find((employee) => employee.id === id)
