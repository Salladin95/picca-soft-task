import { Provider } from "react-redux"

import EMPLOYEES from "~/app/employees.json"

import store from "~/app/redux/store"
import { setEmployees } from "~/app/redux"
import { EmployeeType, type WithChildren } from "~/shared/types"

export function StoreProvider(props: WithChildren) {
	const storedEmployees = localStorage.getItem("employees")
	if (storedEmployees) {
		const initialEmployees = JSON.parse(storedEmployees) as EmployeeType[]
		store.dispatch(setEmployees(initialEmployees))
	}
	store.dispatch(setEmployees(EMPLOYEES))

	return <Provider store={store}>{props.children}</Provider>
}
