import { Outlet } from "react-router-dom"

import { Header } from "~/shared/ui"

export function MainPageLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
