import { useNavigate } from "react-router-dom"

import { type EmployeeType, EMPLOYEE_ROLE_TO_LABEL } from "~/entities/employee/contracts"

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
			<p>{EMPLOYEE_ROLE_TO_LABEL[employee.role]}</p>
			<p>{employee.phone}</p>
		</section>
	)
}
