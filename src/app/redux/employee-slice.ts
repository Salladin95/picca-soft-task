import { EmployeeType } from "~/entities/employee"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { LOCAL_STORE_KEYS } from "~/app/contracts"
import { setToLocalStorage } from "~/shared/lib/local-store"

export interface EmployeeState {
	employees: EmployeeType[]
}

const initialState: EmployeeState = {
	employees: [],
}

const employeeSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
			state.employees = action.payload
			setToLocalStorage(LOCAL_STORE_KEYS.EMPLOYEES, action.payload)
		},
		updateEmployee: (state, action: PayloadAction<EmployeeType>) => {
			const updatedEmployees = state.employees.map((employee) =>
				employee.id === action.payload.id ? action.payload : employee,
			)
			state.employees = updatedEmployees
			setToLocalStorage(LOCAL_STORE_KEYS.EMPLOYEES, updatedEmployees)
		},
		addEmployee: (state, action: PayloadAction<EmployeeType>) => {
			const newEmployees = [...state.employees, action.payload]
			state.employees = newEmployees
			setToLocalStorage(LOCAL_STORE_KEYS.EMPLOYEES, newEmployees)
		},
	},
})

export const { setEmployees, updateEmployee, addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
