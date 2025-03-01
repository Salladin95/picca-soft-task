import { Link } from "react-router-dom"

import { Button } from "~/shared/ui"
import { FilterPanel } from "~/features/filter-panel"
import { EmployeeList } from "~/features/employee-list"
import { SortControls } from "~/features/sort-controls"
import { useFilterSort } from "~/pages/home-page/useFilterSort"
import { useCurrentEmployees, useEmployees } from "~/app/redux/hooks"

import "./home-page.scss"

export function HomePage() {
	const employees = useEmployees()
	const { filter, sortBy, handleFilterSortUpdate, handleSortUpdate } = useFilterSort()
	const currentEmployees = useCurrentEmployees({ employees, filter, sortBy })

	return (
		<main className={"home-page"}>
			<h1 className={" home-page__title"}>Список сотрудников</h1>
			<div className={"home-page__controls"}>
				<FilterPanel filter={filter} onFilterUpdate={handleFilterSortUpdate} />
				<SortControls sortBy={sortBy} onSortUpdate={handleSortUpdate} />
			</div>
			<EmployeeList className={"home-page__employee-list"} employees={currentEmployees} />
			<Button className={"home-page__add-employee"} variant={"link"}>
				<Link to="/add-employee">Добавить сотрудника</Link>
			</Button>
		</main>
	)
}
