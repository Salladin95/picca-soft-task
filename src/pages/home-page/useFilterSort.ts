import { useState } from "react"
import { EMPLOYEE_ROLES } from "~/entities/employee"
import { FilterType } from "~/features/filter-panel"
import { LOCAL_STORE_KEYS } from "~/app/contracts.ts"
import { isFilter, isSortBy } from "~/shared/guards"
import { SORT_BY, SortByType } from "~/features/sort-controls"
import { getSafeLocalStoreItem, setToLocalStorage } from "~/shared/lib"


interface UseFilterSortReturnType {
	filter: FilterType
	sortBy: SortByType
	handleFilterSortUpdate: (filter: FilterType) => void
	handleSortUpdate: (sortBy: SortByType) => void
}

/**
 * Custom hook to manage filter and sort state, including updates to local storage.
 *
 * @returns {UseFilterSortReturnType} - The current filter and sort state, along with update functions.
 */
export function useFilterSort(): UseFilterSortReturnType {
	const [filter, setFilter] = useState<FilterType>(
		getSafeLocalStoreItem<FilterType>(LOCAL_STORE_KEYS.FILTER_BY, isFilter, {
			role: EMPLOYEE_ROLES.ALL,
			isArchive: false,
		}),
	)

	const [sortBy, setSortBy] = useState<SortByType>(
		getSafeLocalStoreItem<SortByType>(LOCAL_STORE_KEYS.SORT_BY, isSortBy, SORT_BY.NAME),
	)

	const handleFilterSortUpdate = (filter: FilterType) => {
		setFilter(filter)
		setToLocalStorage(LOCAL_STORE_KEYS.FILTER_BY, filter)
	}

	const handleSortUpdate = (sortBy: SortByType) => {
		setSortBy(sortBy)
		setToLocalStorage(LOCAL_STORE_KEYS.SORT_BY, sortBy)
	}

	return {
		filter,
		sortBy,
		handleFilterSortUpdate,
		handleSortUpdate,
	}
}
