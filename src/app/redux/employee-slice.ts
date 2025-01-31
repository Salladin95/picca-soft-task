import { EmployeeType } from "~/shared/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { filterEmployees, sortEmployees } from "~/app/redux/helpers"

interface EmployeeState {
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
			state.employees = sortEmployees({ employees: action.payload, sortBy: state.sortBy })
			state.modifiedEmployees = [...state.employees]
		},
		setFilter: (state, action: PayloadAction<{ role: string; isArchive: boolean }>) => {
			const { payload } = action
			state.filter = payload
			state.modifiedEmployees = filterEmployees({
				employees: state.employees,
				filter: action.payload,
			})
		},
		setSortBy: (state, action: PayloadAction<string>) => {
			const { payload } = action
			state.sortBy = payload
			console.log(state.sortBy)
			state.modifiedEmployees = sortEmployees({
				employees: state.modifiedEmployees,
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
			state.editMode = null
		},
		addEmployee: (state, action: PayloadAction<EmployeeType>) => {
			const newEmployees = [...state.employees, action.payload]
			state.employees = newEmployees
		},
	},
})

export const { setEmployees, setFilter, setSortBy, setEditMode, updateEmployee, addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
