import { Button } from "~/shared/ui"
import { Link } from "react-router-dom"

import "./e404.scss"

export function E404() {
	return (
		<div className="e404">
			<h1 className={"h1 mb-4"}>404</h1>
			<p className={"p1 mb-4"}>Oops! The page you're looking for doesn't exist.</p>
			<Button variant={"link"}>
				<Link to={"/"}>Go to Home</Link>
			</Button>
		</div>
	)
}
