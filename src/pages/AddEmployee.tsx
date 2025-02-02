import { useNavigate } from "react-router-dom"

import { addEmployee } from "~/app/redux"
import { formatDate } from "~/shared/lib"
import { EmployeeType, initEmployee } from "~/entities/employee"
import { useAppDispatch, useEmployees } from "~/app/redux/hooks"
import { AddEmployeeForm, AddEmployeeFormData } from "~/features/add-employee-form"

export function AddEmployeePage() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const employees = useEmployees()
	const initialEmployee = initEmployee(employees.length + 1)

	const onSubmit = (data: AddEmployeeFormData) => {
		const employee = {
			...data,
			isArchive: false,
			birthday: formatDate(data.birthday),
			id: initialEmployee.id,
		} as EmployeeType
		dispatch(addEmployee(employee))
		navigate("/")
	}

	return (
		<section>
			<AddEmployeeForm employee={initialEmployee} onSubmit={onSubmit} />
		</section>
	)
}
