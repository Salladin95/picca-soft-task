import { Providers } from "~/app/providers"
import { RouterView } from "~/app/RouterView"

import "./index.scss"

function App() {
	return (
		<Providers>
			<RouterView />
		</Providers>
	)
}

export default App
