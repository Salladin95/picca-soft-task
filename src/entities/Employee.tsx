import { useNavigate } from "react-router-dom"

import { type EmployeeType } from "~/shared/types"

type EmployeeProps = {
	employee: EmployeeType
	onClick?: (employee: EmployeeType) => void
}

export function Employee(props: EmployeeProps) {
	const { employee, onClick } = props
	const navigate = useNavigate()

	function handleClick() {
		onClick?.(employee)
		navigate(`/employee/${employee.id}`)
	}

	return (
		<section onClick={handleClick} className={"employee"}>
			<p>{employee.name}</p>
			<p>{employee.role}</p>
			<p>{employee.phone}</p>
		</section>
	)
}
