import { EmployeeType } from "~/shared/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { isFilter, isSortBy } from "~/shared/guards"
import { applyFilters, applySort } from "~/app/redux/helpers"
import { getSafeLocalStoreItem, setToLocalStorage } from "~/shared/lib/localStore"
import { EMPLOYEES_LOCAL_STORE_KEYS, FILTER_ROLES, FilterType, SORT_BY, SortByType } from "~/app/redux/types"

export interface EmployeeState {
	employees: EmployeeType[]
	modifiedEmployees: EmployeeType[]
	filter: FilterType
	sortBy: SortByType
	editMode: number | null // id редактируемого сотрудника или null
}

const initialFilter = getSafeLocalStoreItem<FilterType>(EMPLOYEES_LOCAL_STORE_KEYS.FILTER_BY, isFilter, {
	role: FILTER_ROLES.ALL,
	isArchive: false,
})

const initialState: EmployeeState = {
	employees: [],
	modifiedEmployees: [],
	filter: initialFilter,
	sortBy: getSafeLocalStoreItem<SortByType>(EMPLOYEES_LOCAL_STORE_KEYS.SORT_BY, isSortBy, SORT_BY.NAME),
	editMode: null,
}

const employeeSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
			state.employees = action.payload
			const modifiedEmployees = applySort(applyFilters(action.payload, state.filter), state.sortBy)
			state.modifiedEmployees = modifiedEmployees
		},
		setModifiedEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
			state.modifiedEmployees = action.payload
		},
		setFilter: (state, action: PayloadAction<FilterType>) => {
			state.filter = action.payload
			const modifiedEmployees = applyFilters(state.employees, action.payload)
			state.modifiedEmployees = applySort(modifiedEmployees, state.sortBy)
			setToLocalStorage(EMPLOYEES_LOCAL_STORE_KEYS.FILTER_BY, action.payload)
		},
		setSortBy: (state, action: PayloadAction<SortByType>) => {
			state.sortBy = action.payload
			const modifiedEmployees = applySort(state.modifiedEmployees, action.payload)
			state.modifiedEmployees = modifiedEmployees
			setToLocalStorage(EMPLOYEES_LOCAL_STORE_KEYS.SORT_BY, action.payload)
		},
		setEditMode: (state, action: PayloadAction<number | null>) => {
			state.editMode = action.payload
		},
		updateEmployee: (state, action: PayloadAction<EmployeeType>) => {
			const updatedEmployees = state.employees.map((employee) =>
				employee.id === action.payload.id ? action.payload : employee,
			)
			state.employees = updatedEmployees
			state.editMode = null
		},
		addEmployee: (state, action: PayloadAction<EmployeeType>) => {
			const newEmployees = [...state.employees, action.payload]
			const newModifiedEmployees = [...state.modifiedEmployees, action.payload]
			state.employees = newEmployees
			state.modifiedEmployees = newModifiedEmployees
		},
	},
})

export const { setEmployees, setSortBy, setFilter, setModifiedEmployees, setEditMode, updateEmployee, addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
