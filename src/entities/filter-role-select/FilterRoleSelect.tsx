import { forwardRef } from "react"

import { Option, Select, SelectProps } from "~/shared/ui"
import { EMPLOYEE_ROLE_TO_LABEL, EMPLOYEE_ROLES } from "~/entities/employee/contracts.ts"

const options = Object.values(EMPLOYEE_ROLES).reduce(
	(acc, curr) => [
		...acc,
		{
			value: curr,
			label: EMPLOYEE_ROLE_TO_LABEL[curr],
		},
	],
	[] as Option[],
)

export const FilterRoleSelect = forwardRef<HTMLSelectElement, Omit<SelectProps, "options">>((props, ref) => {
	return <Select ref={ref} {...props} options={options} />
})
