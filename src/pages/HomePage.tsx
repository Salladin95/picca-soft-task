import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { useEmployees } from "~/app/redux/hooks"
import { LOCAL_STORE_KEYS } from "~/app/contracts"
import { isFilter, isSortBy } from "~/shared/guards"
import { EmployeeList } from "~/features/employee-list"
import { EMPLOYEE_ROLES, EmployeeType } from "~/entities/employee"
import { getSafeLocalStoreItem, setToLocalStorage } from "~/shared/lib"
import { FilterPanel, FilterType, applyFilter } from "~/features/filter-panel"
import { SortControls, SORT_BY, SortByType, applySort } from "~/features/sort-controls"

export function HomePage() {
	const employees = useEmployees()

	const [filter, setFilter] = useState<FilterType>(
		getSafeLocalStoreItem<FilterType>(LOCAL_STORE_KEYS.FILTER_BY, isFilter, {
			role: EMPLOYEE_ROLES.ALL,
			isArchive: false,
		}),
	)
	const [sortBy, setSortBy] = useState<SortByType>(
		getSafeLocalStoreItem<SortByType>(LOCAL_STORE_KEYS.SORT_BY, isSortBy, SORT_BY.NAME),
	)

	const [currentEmployees, setCurrentEmployees] = useState<EmployeeType[]>(
		applySort(applyFilter(employees, filter), sortBy),
	)

	const handleFilterSortUpdate = (filter: FilterType) => {
		setFilter(filter)
		setToLocalStorage(LOCAL_STORE_KEYS.FILTER_BY, filter)
	}

	const handleSortUpdate = (sortBy: SortByType) => {
		setSortBy(sortBy)
		setToLocalStorage(LOCAL_STORE_KEYS.SORT_BY, sortBy)
	}

	useEffect(() => {
		setCurrentEmployees(applySort(applyFilter(employees, filter), sortBy))
	}, [employees, filter, sortBy])

	return (
		<div>
			<h1 className={"text-center"}>Список сотрудников</h1>
			<FilterPanel className={"mb-4"} filter={filter} onFilterUpdate={handleFilterSortUpdate} />
			<SortControls sortBy={sortBy} className={"mb-4"} onSortUpdate={handleSortUpdate} />
			<EmployeeList employees={currentEmployees} />
			<Link to="/add-employee">Добавить сотрудника</Link>
		</div>
	)
}
