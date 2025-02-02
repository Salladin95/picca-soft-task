import { EmployeeRoleType } from "~/entities/employee/contracts"

export type FilterType = {
	role: EmployeeRoleType
	isArchive: boolean
}
