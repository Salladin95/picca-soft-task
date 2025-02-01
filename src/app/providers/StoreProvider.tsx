import { Provider } from "react-redux"

import store from "~/app/redux/store"
import { setEmployees } from "~/app/redux"
import { EmployeeType, type WithChildren } from "~/shared/types"

import EMPLOYEES from "~/app/employees.json"

export function StoreProvider(props: WithChildren) {
	store.dispatch(setEmployees(EMPLOYEES as EmployeeType[]))
	return <Provider store={store}>{props.children}</Provider>
}
