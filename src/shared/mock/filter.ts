import { FilterType } from "~/features/filter-panel"
import { EMPLOYEE_ROLES } from "~/entities/employee"

export const validFilter: FilterType = {
	role: EMPLOYEE_ROLES.WAITER,
	isArchive: true,
}
export const invalidFilter = {
	role: "INVALID_ROLE",
	isArchive: "not_a_boolean",
}
