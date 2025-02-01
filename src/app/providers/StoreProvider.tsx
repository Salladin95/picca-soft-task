import { Provider } from "react-redux"

import store from "~/app/redux/store"
import { areEmployees } from "~/shared/guards"
import { getSafeLocalStoreItem } from "~/shared/lib"
import { EmployeeType, type WithChildren } from "~/shared/types"
import { EMPLOYEES_LOCAL_STORE_KEYS, setEmployees } from "~/app/redux"

import EMPLOYEES from "~/app/employees.json"

export function StoreProvider(props: WithChildren) {
	const employees = getSafeLocalStoreItem(
		EMPLOYEES_LOCAL_STORE_KEYS.EMPLOYEES,
		areEmployees,
		EMPLOYEES as EmployeeType[],
	)

	store.dispatch(setEmployees(employees))
	return <Provider store={store}>{props.children}</Provider>
}
