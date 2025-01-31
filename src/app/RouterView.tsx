import { BrowserRouter, Route, Routes } from "react-router-dom"

import { HomePage, AddEmployee } from "~/pages"

export function RouterView() {
	return (
		<BrowserRouter basename="/picca-soft">
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="/add-employee" element={<AddEmployee />} />
			</Routes>
		</BrowserRouter>
	)
}
