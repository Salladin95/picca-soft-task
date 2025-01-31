import { EmployeeType } from "~/shared/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { applyFilters, applySort } from "~/app/redux/helpers"

export interface EmployeeState {
	employees: EmployeeType[]
	modifiedEmployees: EmployeeType[]
	filter: {
		role: string
		isArchive: boolean
	}
	sortBy: string
	editMode: number | null // id редактируемого сотрудника или null
}

const initialState: EmployeeState = {
	employees: [],
	modifiedEmployees: [],
	filter: {
		role: "",
		isArchive: false,
	},
	sortBy: "name",
	editMode: null,
}

const employeeSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
			state.employees = action.payload
			const filtered = applyFilters(action.payload, state.filter)
			state.modifiedEmployees = applySort(filtered, state.sortBy)
		},
		setFilter: (state, action: PayloadAction<{ role: string; isArchive: boolean }>) => {
			state.filter = action.payload
			const filtered = applyFilters(state.employees, action.payload)
			state.modifiedEmployees = applySort(filtered, state.sortBy)
		},
		setSortBy: (state, action: PayloadAction<string>) => {
			state.sortBy = action.payload
			state.modifiedEmployees = applySort(applyFilters(state.employees, state.filter), action.payload)
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
			state.employees = newEmployees
		},
	},
})

export const { setEmployees, setSortBy, setFilter, setEditMode, updateEmployee, addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
