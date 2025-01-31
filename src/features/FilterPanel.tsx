import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

import { useFilterRole } from "~/app/redux/hooks"
import { AppDispatch, setFilter } from "~/app/redux"

export function FilterPanel() {
	const filterBy = useFilterRole()
	const dispatch = useDispatch<AppDispatch>()

	const [role, setRole] = useState("")
	const [isArchive, setIsArchive] = useState(false)

	useEffect(() => {
		dispatch(setFilter({ role, isArchive }))
	}, [role, isArchive])

	return (
		<div>
			<div>
				<label htmlFor="positionFilter">Должность:</label>
				<select id="positionFilter" value={filterBy.role} onChange={(e) => setRole(e.target.value)}>
					<option value="">Все</option>
					<option value="cook">Повар</option>
					<option value="waiter">Официант</option>
					<option value="driver">Водитель</option>
				</select>

				<label>
					<input
						type="checkbox"
						checked={isArchive}
						onClick={() => {
							setIsArchive(!isArchive)
						}}
					/>
					<span>В архиве</span>
				</label>
			</div>
		</div>
	)
}
