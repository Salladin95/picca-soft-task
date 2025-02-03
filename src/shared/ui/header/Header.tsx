import { Link } from "react-router-dom"

import "./header.scss"

export function Header() {
	return (
		<header className="header">
			<Link to="/" className="header__logo">
				Employees
			</Link>
		</header>
	)
}
