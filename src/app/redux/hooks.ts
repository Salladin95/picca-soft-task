import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "~/app/redux/store"
import {
	selectAllEmployees,
	selectEditMode,
	selectEmployeeById,
	selectFilter,
	selectModifiedEmployees,
	selectSortBy,
} from "~/app/redux/selectors"

export const useEmployees = () => useSelector(selectAllEmployees)
export const useModifiedEmployees = () => useSelector(selectModifiedEmployees)

export const useSelectEmployeeById = (id: number) => {
	const employee = useSelector((state: RootState) => selectEmployeeById(state, id))
	return employee
}

export const useFilter = () => useSelector(selectFilter)
export const useSortBy = () => useSelector(selectSortBy)

export const useSelectEditMode = () => useSelector(selectEditMode)
export const useAppDispatch = () => useDispatch<AppDispatch>()
