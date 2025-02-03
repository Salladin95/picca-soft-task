import { useState, useEffect } from "react"

import { EmployeeType } from "~/entities/employee"
import { applySort, SortByType } from "~/features/sort-controls"
import { applyFilter, FilterType } from "~/features/filter-panel"

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
	const [currentEmployees, setCurrentEmployees] = useState<EmployeeType[]>(() =>
		applySort(applyFilter(employees, filter), sortBy),
	)

	useEffect(() => {
		setCurrentEmployees(applySort(applyFilter(employees, filter), sortBy))
	}, [employees, filter, sortBy])

	return currentEmployees
}
