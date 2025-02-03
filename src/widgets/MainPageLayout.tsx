import { Link, Outlet } from "react-router-dom"

export function MainPageLayout() {
	return (
		<>
			<header>
				<Link to={"/"}>Employees</Link>
			</header>
			<Outlet />
		</>
	)
}
