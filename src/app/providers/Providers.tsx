import { WithChildren } from "~/shared/types"
import { StoreProvider } from "~/app/providers/StoreProvider"

export function Providers(props: WithChildren) {
	return <StoreProvider>{props.children}</StoreProvider>
}
