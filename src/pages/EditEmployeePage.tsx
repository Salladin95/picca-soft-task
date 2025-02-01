import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams, useNavigate } from "react-router-dom"

import { WithId } from "~/shared/types"
import { formatDate } from "~/shared/lib"
import { useSelectEmployeeById } from "~/app/redux/hooks"
import { FormField, Input, DatePicker, PhoneInput } from "~/shared/ui"
import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input"

const employeeSchema = z.object({
	name: z.string().min(1, "Имя обязательно"),
	phone: z.string().min(1, "Номер телефона обязателен").refine(isValidPhoneNumber, "Номер телефона не валиден"),
	birthday: z.date({ required_error: "Дата рождения обязательна" }).refine(
		(date) => {
			const oneDayAgo = new Date()
			oneDayAgo.setDate(oneDayAgo.getDate() - 1) // Subtract 1 day from current date
			return date < oneDayAgo // Ensure the date is older than one day
		},
		{ message: "Дата должна быть в прошлом" },
	),
	isArchive: z.boolean(),
})

type EmployeeFormData = z.infer<typeof employeeSchema>

export function EditEmployeePage() {
	const navigate = useNavigate()
	const params = useParams<WithId>()
	const employee = useSelectEmployeeById(Number(params.id))

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<z.infer<typeof employeeSchema>>({
		resolver: zodResolver(employeeSchema),
		defaultValues: {
			name: employee?.name,
			phone: employee ? parsePhoneNumber(employee.phone)?.format("E.164") : "",
			birthday: new Date(employee?.birthday || ""),
			isArchive: employee?.isArchive,
		},
	})

	if (!employee) {
		navigate("/e404")
		return null
	}

	const onSubmit = (data: EmployeeFormData) => {
		// Handle form submission, e.g., API call to update employee
		console.log(formatDate(data.birthday)) // Replace with your update logic
	}

	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormField forId={`name-${params.id}`} label="Имя работника:" error={errors.name?.message} required>
					<Input type="text" id={`name-${params.id}`} {...register("name")} />
				</FormField>

				<FormField forId={`phone-${params.id}`} label="Телефон:" error={errors.phone?.message} required>
					<Controller
						name="phone"
						control={control}
						render={({ field: { onChange, ...rest } }) => (
							<PhoneInput country={"RU"} id={`phone-${params.id}`} {...rest} onChange={(value) => onChange(value)} />
						)}
					/>
				</FormField>

				<FormField forId={`birthday-${params.id}`} label="Дата рождения:" error={errors.birthday?.message} required>
					<Controller
						name="birthday"
						control={control}
						render={({ field: { onChange, value } }) => (
							<DatePicker
								selected={value}
								onChange={(date) => onChange(date)}
								dateFormat="dd.MM.yyyy"
								placeholderText="Выберите дату"
								id={`birthday-${params.id}`}
							/>
						)}
					/>
				</FormField>

				<FormField forId={`is-archive-${params.id}`} label="В архиве:">
					<Input type="checkbox" id={`is-archive-${params.id}`} {...register("isArchive")} />
				</FormField>

				<button type="submit">Save Changes</button>
			</form>
		</section>
	)
}
