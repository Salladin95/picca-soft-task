import { Employee } from "~/entities/employee"

import { cn } from "~/shared/lib"
import { WithClassName } from "~/shared/types"
import { type EmployeeType } from "~/entities/employee"

import "./employee-list.scss"

type EmployeeListProps = {
	employees: EmployeeType[]
} & WithClassName

export function EmployeeList(props: EmployeeListProps) {
	return (
		<section className={cn("employee-list", props.className)}>
			{props.employees.map((employee) => (
				<Employee key={employee.id} employee={employee} />
			))}
		</section>
	)
}
