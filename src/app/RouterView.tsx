import { BrowserRouter, Route, Routes } from "react-router-dom"

import { MainPageLayout } from "~/widgets"
import { HomePage, EditEmployeePage, AddEmployeePage } from "~/pages"

export function RouterView() {
	return (
		<BrowserRouter basename="/picca-soft/">
			<Routes>
				<Route path="/" element={<MainPageLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/add-employee" element={<AddEmployeePage />} />
					<Route path="/employee/:id" element={<EditEmployeePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
