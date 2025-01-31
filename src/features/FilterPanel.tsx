import { useState } from "react"

export function FilterPanel() {
	// const [employees, setEmployees] = useState(employeesData)
	// const [positionFilter, setPositionFilter] = useState("Все")
	// const [archivedFilter, setArchivedFilter] = useState(false)
	//
	// const filterEmployees = () => {
	// 	let filteredEmployees = employeesData.filter((employee) => {
	// 		if (positionFilter === "Все" || employee.position === positionFilter) {
	// 			return archivedFilter ? employee.archived : !employee.archived
	// 		}
	// 		return false
	// 	})
	// 	setEmployees(filteredEmployees)
	// }
	//
	// const sortByName = () => {
	// 	const sortedEmployees = [...employees]
	// 	sortedEmployees.sort((a, b) => a.name.localeCompare(b.name))
	// 	setEmployees(sortedEmployees)
	// }
	//
	// const sortByBirthdate = () => {
	// 	const sortedEmployees = [...employees]
	// 	sortedEmployees.sort((a, b) => new Date(a.birthdate) - new Date(b.birthdate))
	// 	setEmployees(sortedEmployees)
	// }

	return (
		<div>
			{/*<div>*/}
			{/*	<label htmlFor="positionFilter">Должность:</label>*/}
			{/*	<select id="positionFilter" value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)}>*/}
			{/*		<option value="Все">Все</option>*/}
			{/*		<option value="Повар">Повар</option>*/}
			{/*		<option value="Официант">Официант</option>*/}
			{/*		<option value="Водитель">Водитель</option>*/}
			{/*	</select>*/}

			{/*	<label>*/}
			{/*		<input type="checkbox" checked={archivedFilter} onChange={(e) => setArchivedFilter(e.target.checked)} />В*/}
			{/*		архиве*/}
			{/*	</label>*/}

			{/*	<button onClick={filterEmployees}>Применить фильтр</button>*/}
			{/*</div>*/}

			{/*<div>*/}
			{/*	<button onClick={sortByName}>Сортировать по имени</button>*/}
			{/*	<button onClick={sortByBirthdate}>Сортировать по дате рождения</button>*/}
			{/*</div>*/}

			{/*<ul>*/}
			{/*	{employees.map((employee) => (*/}
			{/*		<li key={employee.name}>*/}
			{/*			{employee.name} - {employee.position} - {employee.phone}*/}
			{/*		</li>*/}
			{/*	))}*/}
			{/*</ul>*/}
		</div>
	)
}
