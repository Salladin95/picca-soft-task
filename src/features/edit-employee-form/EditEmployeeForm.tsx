import * as z from "zod"
import { parse, subYears } from "date-fns"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { ERROR_MESSAGES } from "~/shared/constants"
import { EmployeeType, MIN_EMPLOYEE_AGE } from "~/entities/employee"
import { FormField, Input, DatePicker, PhoneInput } from "~/shared/ui"
import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input"

const editEmployeeSchema = z.object({
	name: z.string().min(1, ERROR_MESSAGES.NAME_REQUIRED),
	phone: z.string().min(1, ERROR_MESSAGES.PHONE_REQUIRED).refine(isValidPhoneNumber, ERROR_MESSAGES.INVALID_PHONE),
	birthday: z
		.date({ required_error: ERROR_MESSAGES.DATE_REQUIRED })
		.max(subYears(new Date(), MIN_EMPLOYEE_AGE), ERROR_MESSAGES.DATE_IN_PAST),
	isArchive: z.boolean(),
})

export type EditEmployeeFormData = z.infer<typeof editEmployeeSchema>

type EmployeeFormProps = {
	employee: EmployeeType
	onSubmit: (data: EditEmployeeFormData) => void
}

export function EditEmployeeForm(props: EmployeeFormProps) {
	const { employee, onSubmit } = props

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<z.infer<typeof editEmployeeSchema>>({
		resolver: zodResolver(editEmployeeSchema),
		defaultValues: {
			name: employee.name,
			phone: parsePhoneNumber(employee.phone)?.format("E.164"),
			birthday: parse(employee.birthday, "dd.mm.yyyy", new Date()),
			isArchive: employee.isArchive,
		},
	})

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormField forId={`name-${employee.id}`} label="Имя работника:" error={errors.name?.message} required>
				<Input type="text" id={`name-${employee.id}`} {...register("name")} />
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
							dateFormat="dd.mm.yyyy"
							placeholderText="Выберите дату"
							id={`birthday-${employee.id}`}
						/>
					)}
				/>
			</FormField>

			<FormField forId={`is-archive-${employee.id}`} label="В архиве:">
				<Input type="checkbox" id={`is-archive-${employee.id}`} {...register("isArchive")} />
			</FormField>

			<button type="submit">Сохранить</button>
		</form>
	)
}
