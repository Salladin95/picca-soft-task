import { useNavigate } from "react-router-dom";

import { type EmployeeType, EMPLOYEE_ROLE_TO_LABEL } from "~/entities/employee/contracts";

import "./employee.scss";

type EmployeeProps = {
	employee: EmployeeType;
	onClick?: (employee: EmployeeType) => void;
};

export function Employee(props: EmployeeProps) {
	const { employee, onClick } = props;
	const navigate = useNavigate();

	function handleClick() {
		onClick?.(employee);
		navigate(`/employee/${employee.id}`);
	}

	return (
		<section onClick={handleClick} className="employee">
			<p className="employee__name">
				<span className="employee__label">Имя:</span> {employee.name}
			</p>
			<p className="employee__role">
				<span className="employee__label">Должность:</span> {EMPLOYEE_ROLE_TO_LABEL[employee.role]}
			</p>
			<p className="employee__phone">
				<span className="employee__label">Телефон:</span> {employee.phone}
			</p>
		</section>
	);
}
