import { Employee } from "~/entities"

import { type EmployeeType } from "~/shared/types"

type EmployeeListProps = {
	employees: EmployeeType[]
}

export function EmployeeList(props: EmployeeListProps) {
	return (
		<section>
			{props.employees.map((employee) => (
				<Employee key={employee.id} employee={employee} />
			))}
		</section>
	)
}
