import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "~/app/redux/store"
import { selectAllEmployees, selectEmployeeById } from "~/app/redux/selectors"

export const useEmployees = () => useSelector(selectAllEmployees)

export const useSelectEmployeeById = (id: number) => {
	const employee = useSelector((state: RootState) => selectEmployeeById(state, id))
	return employee
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
