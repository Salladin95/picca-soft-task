import { useParams, useNavigate } from "react-router-dom"

import { WithId } from "~/shared/types"
import { formatDate } from "~/shared/lib"
import { updateEmployee } from "~/app/redux"
import { useAppDispatch, useSelectEmployeeById } from "~/app/redux/hooks"
import { EditEmployeeForm, EditEmployeeFormData } from "src/features/edit-employee-form"

export function EditEmployeePage() {
	const navigate = useNavigate()
	const params = useParams<WithId>()
	const employee = useSelectEmployeeById(Number(params.id))
	const dispatch = useAppDispatch()

	if (!employee) {
		navigate("/e404")
		return null
	}

	const onSubmit = (data: EditEmployeeFormData) => {
		dispatch(updateEmployee({ ...employee, ...data, birthday: formatDate(data.birthday) }))
	}

	return (
		<section>
			<EditEmployeeForm employee={employee} onSubmit={onSubmit} />
		</section>
	)
}
