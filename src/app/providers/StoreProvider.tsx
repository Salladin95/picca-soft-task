import { Provider } from "react-redux"

import EMPLOYEES from "~/app/employees.json"

import store from "~/app/redux/store"
import { setEmployees } from "~/app/redux"
import { WithChildren } from "~/shared/types"
import { areEmployees } from "~/shared/guards"
import { EmployeeType } from "~/entities/employee"
import { LOCAL_STORE_KEYS } from "~/app/contracts"
import { getSafeLocalStoreItem } from "~/shared/lib"

export function StoreProvider(props: WithChildren) {
	const employees = getSafeLocalStoreItem(LOCAL_STORE_KEYS.EMPLOYEES, areEmployees, EMPLOYEES as EmployeeType[])

	store.dispatch(setEmployees(employees))
	return <Provider store={store}>{props.children}</Provider>
}
