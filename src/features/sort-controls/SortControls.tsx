import { cn } from "~/shared/lib"
import { WithClassName } from "~/shared/types"
import { SORT_BY, SortByType } from "~/features/sort-controls/contracts"

import "./sort-controls.scss"

export type SortControlsProps = {
	onSortUpdate: (sort: SortByType) => void
	sortBy: SortByType
} & WithClassName

export function SortControls(props: SortControlsProps) {
	const { onSortUpdate, className, sortBy } = props

	function handleSortUpdate(sort: SortByType) {
		onSortUpdate(sort)
	}

	return (
		<div className={cn("sort-controls", className)}>
			<button data-active={SORT_BY.NAME === sortBy} onClick={() => handleSortUpdate(SORT_BY.NAME)}>
				Сортировать по имени
			</button>
			<button data-active={SORT_BY.BIRTHDAY === sortBy} onClick={() => handleSortUpdate(SORT_BY.BIRTHDAY)}>
				Сортировать по дате рождения
			</button>
		</div>
	)
}
