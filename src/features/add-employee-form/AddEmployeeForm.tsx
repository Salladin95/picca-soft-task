import * as z from "zod"
import { Link } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { EmployeeType } from "~/entities/employee"
import { ERROR_MESSAGES } from "~/shared/constants"
import { isValidPhoneNumber } from "react-phone-number-input"
import { EmployeeRoleSelect } from "~/entities/filter-role-select"
import { validateDateInPast, validateEmployeeRole } from "~/shared/lib"
import { FormField, Input, DatePicker, PhoneInput, Button } from "~/shared/ui"

import "./add-employee-form.scss"

const addEmployeeSchema = z.object({
	name: z.string().min(1, ERROR_MESSAGES.NAME_REQUIRED),
	phone: z.string().min(1, ERROR_MESSAGES.PHONE_REQUIRED).refine(isValidPhoneNumber, ERROR_MESSAGES.INVALID_PHONE),
	birthday: z
		.date({ required_error: ERROR_MESSAGES.DATE_REQUIRED })
		.refine(validateDateInPast, { message: ERROR_MESSAGES.DATE_IN_PAST }),
	role: z.string().refine(validateEmployeeRole),
})

export type AddEmployeeFormData = z.infer<typeof addEmployeeSchema>

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
	} = useForm<z.infer<typeof addEmployeeSchema>>({
		resolver: zodResolver(addEmployeeSchema),
		defaultValues: employee,
	})

	return (
		<form className={"add-employee-form"} onSubmit={handleSubmit(onSubmit)}>
			<div className={"add-employee-form__inputs"}>
				<FormField forId={`name-${employee.id}`} label="Имя работника:" error={errors.name?.message} required>
					<Input placeholder={"Имя"} type="text" id={`name-${employee.id}`} {...register("name")} />
				</FormField>

				<FormField forId={`phone-${employee.id}`} label="Телефон:" error={errors.phone?.message} required>
					<Controller
						name="phone"
						control={control}
						render={({ field: { onChange, ...rest } }) => (
							<PhoneInput
								country={"RU"}
								id={`phone-${employee.id}`}
								{...rest}
								onChange={(value: string) => onChange(value)}
							/>
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
			</div>

			<FormField
				className={"add-employee-form__select"}
				forId={`role-${employee.id}`}
				label="Должность"
				error={errors.role?.message}
				required
			>
				<EmployeeRoleSelect variant={"employee"} id={`role-${employee.id}`} {...register("role")} />
			</FormField>

			<div className={"add-employee-form__controls"}>
				<Button variant="link">
					<Link to={"/"}>Отмена</Link>
				</Button>

				<Button className={"add-employee-form__submit-btn"} type="submit">
					Сохранить
				</Button>
			</div>
		</form>
	)
}
