import { memo } from "react"
import { cn } from "~/shared/lib"
import { Button } from "~/shared/ui"
import { WithClassName } from "~/shared/types"
import { SORT_BY, SortByType } from "~/features/sort-controls/contracts"

import "./sort-controls.scss"

export type SortControlsProps = {
	onSortUpdate: (sort: SortByType) => void
	sortBy: SortByType
} & WithClassName

export const SortControls = memo(function SortControls(props: SortControlsProps) {
	const { onSortUpdate, className, sortBy } = props

	function handleSortUpdate(sort: SortByType) {
		onSortUpdate(sort)
	}

	return (
		<div className={cn("sort-controls", className)}>
			<p className={"p1"}>Сортировать по:</p>
			<Button
				className={"sort-controls__btn"}
				data-active={SORT_BY.NAME === sortBy}
				onClick={() => handleSortUpdate(SORT_BY.NAME)}
			>
				Имени
			</Button>
			<Button
				className={"sort-controls__btn"}
				data-active={SORT_BY.BIRTHDAY === sortBy}
				onClick={() => handleSortUpdate(SORT_BY.BIRTHDAY)}
			>
				Дате рождения
			</Button>
		</div>
	)
})
