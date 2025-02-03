import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { WithId } from "~/shared/types"
import { formatDate } from "~/shared/lib"
import { updateEmployee } from "~/app/redux"
import { useAppDispatch, useSelectEmployeeById } from "~/app/redux/hooks.ts"
import { EditEmployeeForm, EditEmployeeFormData } from "~/features/edit-employee-form"

import "./edit-employee.scss"

export function EditEmployeePage() {
	const navigate = useNavigate()
	const params = useParams<WithId>()
	const employee = useSelectEmployeeById(Number(params.id))
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!employee) {
			navigate("/e404")
		}
	}, [employee, navigate])

	if (!employee) return null // TODO: WHAT IF WE SHOW LOADING SPINNER?

	const onSubmit = (data: EditEmployeeFormData) => {
		dispatch(updateEmployee({ ...employee, ...data, birthday: formatDate(data.birthday) }))
		navigate("/")
	}

	return (
		<main className={"edit-employee-page"}>
			<h1 className={"edit-employee-page__title"}>Создание карточки работника</h1>
			<EditEmployeeForm employee={employee} onSubmit={onSubmit} />
		</main>
	)
}
