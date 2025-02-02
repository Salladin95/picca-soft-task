import { subYears } from "date-fns"

import { EMPLOYEE_ROLES } from "~/entities/employee/contracts"
import { parsePhoneNumber } from "react-phone-number-input/min"

export const MIN_EMPLOYEE_AGE = 18

export function initEmployee(id: number) {
	return {
		id,
		name: "",
		isArchive: false,
		role: EMPLOYEE_ROLES.COOK,
		phone: parsePhoneNumber("+7 (928) 000-0000")?.format("E.164") || "+7 (928) 000-0000",
		birthday: subYears(new Date(), MIN_EMPLOYEE_AGE),
	}
}
