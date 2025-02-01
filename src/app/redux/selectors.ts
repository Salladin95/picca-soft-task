import { RootState } from "~/app/redux/store"

export const selectAllEmployees = (state: RootState) => state.employees.employees
export const selectModifiedEmployees = (state: RootState) => state.employees.modifiedEmployees
export const selectEmployeeById = (state: RootState, id: number) =>
	state.employees.employees.find((employee) => employee.id === id)

export const selectFilter = (state: RootState) => state.employees.filter
export const selectSortBy = (state: RootState) => state.employees.sortBy
