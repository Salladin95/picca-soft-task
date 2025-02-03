import { ChangeEvent, memo } from "react"

import { cn } from "~/shared/lib"
import { type FilterType } from "./contracts.ts"
import { WithClassName } from "~/shared/types"
import { isEmployeeRole } from "~/shared/guards"
import { Checkbox, FormField } from "~/shared/ui"
import { EMPLOYEE_ROLES } from "~/entities/employee"
import { EmployeeRoleSelect } from "~/entities/filter-role-select"

import "./filter-panel.scss"

export type FilterPanelProps = {
	onFilterUpdate: (filter: FilterType) => void
	filter: FilterType
} & WithClassName

export const FilterPanel = memo(function FilterPanel(props: FilterPanelProps) {
	const { onFilterUpdate, className, filter } = props

	function handleRoleUpdate(e: ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value
		onFilterUpdate({ ...filter, role: isEmployeeRole(value) ? value : EMPLOYEE_ROLES.ALL })
	}

	function handleArchiveUpdate(e: ChangeEvent<HTMLInputElement>) {
		onFilterUpdate({ ...filter, isArchive: e.currentTarget.checked })
	}

	return (
		<div className={cn("filter-panel", className)}>
			{/* Form field for selecting employee role */}
			<FormField forId={"filter-by"} label="Фильтр по роли сотрудников" className={"mb-4"}>
				<EmployeeRoleSelect value={filter.role} id={"filter-by"} onChange={handleRoleUpdate} />
			</FormField>

			{/* Checkbox for the archive filter */}
			<Checkbox label={"В архиве"} checked={filter.isArchive} onChange={handleArchiveUpdate} />
		</div>
	)
})
