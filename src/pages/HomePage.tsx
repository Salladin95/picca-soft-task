import { Link } from "react-router-dom"

import { useModifiedEmployees } from "~/app/redux/hooks"
import { EmployeeList, FilterPanel, SortControls } from "~/features"

export function HomePage() {
	const employees = useModifiedEmployees()

	return (
		<div>
			<h1 className={"text-center"}>Список сотрудников</h1>
			<FilterPanel />
			<SortControls />
			<EmployeeList employees={employees} />
			<Link to="/add-employee">Добавить сотрудника</Link>
		</div>
	)
}
