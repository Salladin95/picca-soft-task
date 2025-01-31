import { useDispatch } from "react-redux"
import { AppDispatch, setSortBy } from "~/app/redux"

export function SortControls() {
	const dispatch = useDispatch<AppDispatch>()

	function handleSortControls(sortBy: "name" | "BY_BIRTHDAY") {
		dispatch(setSortBy(sortBy))
	}

	return (
		<div>
			<button onClick={() => handleSortControls("name")}>Сортировать по имени</button>
			<button onClick={() => handleSortControls("BY_BIRTHDAY")}>Сортировать по дате рождения</button>
		</div>
	)
}
