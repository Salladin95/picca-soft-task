import { useEffect } from "react"
import { Link } from "react-router-dom"

import { EmployeeType } from "~/shared/types"
import { areEmployees } from "~/shared/guards"
import { getSafeLocalStoreItem } from "~/shared/lib"
import { EmployeeList, FilterPanel, SortControls } from "~/features"
import { EMPLOYEES_LOCAL_STORE_KEYS, setEmployees } from "~/app/redux"
import { useAppDispatch, useModifiedEmployees } from "~/app/redux/hooks"

import EMPLOYEES from "~/app/employees.json"

export function HomePage() {
	const dispatch = useAppDispatch()
	const originalEmployees = getSafeLocalStoreItem(
		EMPLOYEES_LOCAL_STORE_KEYS.EMPLOYEES,
		areEmployees,
		EMPLOYEES as EmployeeType[],
	)

	useEffect(() => {
		dispatch(setEmployees(originalEmployees))
	}, [dispatch, originalEmployees])

	const currentEmployees = useModifiedEmployees()

	return (
		<div>
			<h1 className={"text-center"}>Список сотрудников</h1>
			<FilterPanel />
			<SortControls />
			<EmployeeList employees={currentEmployees} />
			<Link to="/add-employee">Добавить сотрудника</Link>
		</div>
	)
}
