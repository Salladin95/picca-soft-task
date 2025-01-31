import { useSelector } from "react-redux"

import { RootState } from "~/app/redux/store"

import {
	selectAllEmployees,
	selectEditMode,
	selectEmployeeById,
	selectFilter,
	selectModifiedEmployees,
	selectSortBy,
} from "~/app/redux/selectors.ts"

export const useEmployees = () => useSelector(selectAllEmployees)
export const useModifiedEmployees = () => useSelector(selectModifiedEmployees)

export const useSelectEmployeeById = (id: number) => {
	const employee = useSelector((state: RootState) => selectEmployeeById(state, id))
	return employee
}

export const useFilterRole = () => useSelector(selectFilter)
export const useSelectRole = () => useSelector(selectSortBy)

export const useSelectEditMode = () => useSelector(selectEditMode)
