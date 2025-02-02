import { Employee } from "~/entities/employee"

import { type EmployeeType } from "~/entities/employee"

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
