import { ChangeEvent } from "react"
import { useDispatch } from "react-redux"

import { useFilter } from "~/app/redux/hooks"
import { isFilterRoles } from "~/shared/guards"
import { FILTER_ROLES } from "~/app/redux/types"
import { AppDispatch, setFilter } from "~/app/redux"

export function FilterPanel() {
	const filterBy = useFilter()
	const dispatch = useDispatch<AppDispatch>()

	function handleRoleUpdate(e: ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value
		if (isFilterRoles(value)) {
			dispatch(setFilter({ ...filterBy, role: value }))
		}
	}

	function handleArchiveUpdate(e: ChangeEvent<HTMLInputElement>) {
		const isArchive = e.target.checked
		dispatch(setFilter({ ...filterBy, isArchive }))
	}

	return (
		<div>
			<div>
				<label htmlFor="positionFilter">Должность:</label>
				<select id="positionFilter" value={filterBy.role} onChange={handleRoleUpdate}>
					<option value={FILTER_ROLES.ALL}>Все</option>
					<option value={FILTER_ROLES.COOK}>Повар</option>
					<option value={FILTER_ROLES.WAITER}>Официант</option>
					<option value={FILTER_ROLES.DRIVER}>Водитель</option>
				</select>

				<label>
					<input type="checkbox" checked={filterBy.isArchive} onChange={handleArchiveUpdate} />
					<span>В архиве</span>
				</label>
			</div>
		</div>
	)
}
