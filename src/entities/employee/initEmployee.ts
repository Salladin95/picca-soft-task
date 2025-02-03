import { subYears } from "date-fns"

import { EMPLOYEE_ROLES } from "~/entities/employee/contracts"
import { AddEmployeeFormData } from "~/features/add-employee-form"

export const MIN_EMPLOYEE_AGE = 18

export function initEmployee(id: number): AddEmployeeFormData {
	return {
		id,
		name: "",
		role: EMPLOYEE_ROLES.COOK,
		phone: "",
		birthday: subYears(new Date(), MIN_EMPLOYEE_AGE),
	}
}
