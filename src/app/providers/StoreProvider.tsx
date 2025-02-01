import { Provider } from "react-redux"

import store from "~/app/redux/store"
import { type WithChildren } from "~/shared/types"

export function StoreProvider(props: WithChildren) {
	return <Provider store={store}>{props.children}</Provider>
}
