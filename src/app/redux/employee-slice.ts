import { EmployeeType } from "~/shared/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { applyFiltersAndSorting } from "~/app/redux/helpers"

interface EmployeeState {
	employees: EmployeeType[]
	filteredEmployees: EmployeeType[]
	filter: {
		role: string
		isArchive: boolean
	}
	sortBy: string // 'name' | 'birthday'
	editMode: number | null // id редактируемого сотрудника или null
}

const initialState: EmployeeState = {
	employees: [],
	filteredEmployees: [],
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
			state.filteredEmployees = applyFiltersAndSorting({
				employees: action.payload,
				filter: state.filter,
				sortBy: state.sortBy,
			})
		},
		setFilter: (state, action: PayloadAction<{ role: string; isArchive: boolean }>) => {
			state.filter = action.payload
			state.filteredEmployees = applyFiltersAndSorting({
				employees: state.employees,
				filter: action.payload,
				sortBy: state.sortBy,
			})
		},
		setSortBy: (state, action: PayloadAction<string>) => {
			state.sortBy = action.payload
			state.filteredEmployees = applyFiltersAndSorting({
				employees: state.employees,
				filter: state.filter,
				sortBy: action.payload,
			})
		},
		setEditMode: (state, action: PayloadAction<number | null>) => {
			state.editMode = action.payload
		},
		updateEmployee: (state, action: PayloadAction<EmployeeType>) => {
			const updatedEmployees = state.employees.map((employee) =>
				employee.id === action.payload.id ? action.payload : employee,
			)
			state.employees = updatedEmployees
			state.filteredEmployees = applyFiltersAndSorting({
				employees: updatedEmployees,
				filter: state.filter,
				sortBy: state.sortBy,
			})
			state.editMode = null
		},
		addEmployee: (state, action: PayloadAction<EmployeeType>) => {
			const newEmployees = [...state.employees, action.payload]
			state.employees = newEmployees
			state.filteredEmployees = applyFiltersAndSorting({
				employees: newEmployees,
				filter: state.filter,
				sortBy: state.sortBy,
			})
		},
	},
})

export const { setEmployees, setFilter, setSortBy, setEditMode, updateEmployee, addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
