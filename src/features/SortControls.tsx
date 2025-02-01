import { useDispatch } from "react-redux"

import { AppDispatch, setSortBy } from "~/app/redux"
import { SORT_BY, SortByType } from "~/app/redux/types"

export function SortControls() {
	const dispatch = useDispatch<AppDispatch>()

	function handleSortUpdate(sortBy: SortByType) {
		dispatch(setSortBy(sortBy))
	}

	return (
		<div>
			<button onClick={() => handleSortUpdate(SORT_BY.NAME)}>Сортировать по имени</button>
			<button onClick={() => handleSortUpdate(SORT_BY.BIRTHDAY)}>Сортировать по дате рождения</button>
		</div>
	)
}
