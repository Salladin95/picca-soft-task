import { forwardRef } from "react"

import { Option, Select, SelectProps } from "~/shared/ui"
import { EMPLOYEE_ROLE_TO_LABEL, EMPLOYEE_ROLES } from "~/entities/employee/contracts.ts"

type EmployeeRoleSelectProps = {
	variant?: "filter" | "employee"
} & Omit<SelectProps, "options">

function createOptions(variant: "filter" | "employee"): Option[] {
	const roles = Object.values(EMPLOYEE_ROLES).filter((role) => {
		return !(variant === "employee" && role === EMPLOYEE_ROLES.ALL)
	})

	const options = roles.reduce(
		(acc, curr) => [
			...acc,
			{
				value: curr,
				label: EMPLOYEE_ROLE_TO_LABEL[curr],
			},
		],
		[] as Option[],
	)

	return options
}

export const EmployeeRoleSelect = forwardRef<HTMLSelectElement, EmployeeRoleSelectProps>((props, ref) => {
	const { variant = "filter", ...rest } = props
	return <Select ref={ref} {...rest} options={createOptions(variant)} />
})
