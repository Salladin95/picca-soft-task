import { useNavigate } from "react-router-dom"

import { addEmployee } from "~/app/redux"
import { formatDate } from "~/shared/lib"
import { EmployeeType, initEmployee } from "~/entities/employee"
import { useAppDispatch, useEmployees } from "~/app/redux/hooks.ts"
import { AddEmployeeForm, AddEmployeeFormData } from "~/features/add-employee-form"

import "./add-employee.scss"
import { useMemo } from "react"

export function AddEmployeePage() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const employees = useEmployees()
	const initialEmployee = useMemo(() => initEmployee(employees.length + 1), [employees.length])

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
		<main className={"add-employee-page"}>
			<h1 className={"add-employee-page__title"}>Создание карточки работника</h1>
			<AddEmployeeForm employee={initialEmployee} onSubmit={onSubmit} />
		</main>
	)
}
