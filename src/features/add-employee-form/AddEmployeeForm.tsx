import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { isValidPhoneNumber } from "react-phone-number-input"
import { FilterRoleSelect } from "~/entities/filter-role-select"
import { FormField, Input, DatePicker, PhoneInput } from "~/shared/ui"
import { EMPLOYEE_ROLES, EmployeeRoleType, EmployeeType } from "~/entities/employee"

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
	role: z.string().refine((role) => Object.values(EMPLOYEE_ROLES).includes(role as EmployeeRoleType)),
})

export type AddEmployeeFormData = z.infer<typeof employeeSchema>

type EmployeeFormProps = {
	employee: Omit<EmployeeType, "birthday"> & { birthday: Date }
	onSubmit: (data: AddEmployeeFormData) => void
}

export function AddEmployeeForm(props: EmployeeFormProps) {
	const { onSubmit, employee } = props

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<z.infer<typeof employeeSchema>>({
		resolver: zodResolver(employeeSchema),
		defaultValues: employee,
	})

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormField forId={`name-${employee.id}`} label="Имя работника:" error={errors.name?.message} required>
				<Input placeholder={"Имя"} type="text" id={`name-${employee.id}`} {...register("name")} />
			</FormField>

			<FormField forId={`phone-${employee.id}`} label="Телефон:" error={errors.phone?.message} required>
				<Controller
					name="phone"
					control={control}
					render={({ field: { onChange, ...rest } }) => (
						<PhoneInput country={"RU"} id={`phone-${employee.id}`} {...rest} onChange={(value) => onChange(value)} />
					)}
				/>
			</FormField>

			<FormField forId={`birthday-${employee.id}`} label="Дата рождения:" error={errors.birthday?.message} required>
				<Controller
					name="birthday"
					control={control}
					render={({ field: { onChange, value } }) => (
						<DatePicker
							selected={value}
							onChange={(date) => onChange(date)}
							dateFormat="dd.MM.yyyy"
							placeholderText="Выберите дату"
							id={`birthday-${employee.id}`}
						/>
					)}
				/>
			</FormField>

			<FormField forId={`role-${employee.id}`} label="Должность" error={errors.role?.message} required>
				<FilterRoleSelect id={`name-${employee.id}`} {...register("role")} />
			</FormField>

			<button type="submit">Сохранить</button>
		</form>
	)
}
