import {  useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { EmployeeType } from "~/entities/employee"
import { AppDispatch, RootState } from "~/app/redux/store"
import { applySort, SortByType } from "~/features/sort-controls"
import { applyFilter, FilterType } from "~/features/filter-panel"
import { selectAllEmployees, selectEmployeeById } from "~/app/redux/selectors"

export const useEmployees = () => useSelector(selectAllEmployees)

export const useSelectEmployeeById = (id: number) => {
	const employee = useSelector((state: RootState) => selectEmployeeById(state, id))
	return employee
}

export const useAppDispatch = () => useDispatch<AppDispatch>()

type UseCurrentEmployeesProps = {
	employees: EmployeeType[]
	filter: FilterType
	sortBy: SortByType
}

/**
 * Custom hook to manage and update the current employees state based on the provided employees, filter, and sortBy values.
 *
 * @param {UseCurrentEmployeesProps} props - The employees, filter, and sortBy values to manage the current employees state.
 * @returns {EmployeeType[]} - The filtered and sorted list of current employees.
 */
export function useCurrentEmployees({ employees, filter, sortBy }: UseCurrentEmployeesProps): EmployeeType[] {
	const currentEmployees = useMemo(() => applySort(applyFilter(employees, filter), sortBy), [employees, filter, sortBy])
	return currentEmployees
}
