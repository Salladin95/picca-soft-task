/**
 *  Focuses first input of event
 * */
export const focusFirstInput = (e: React.MouseEvent) => {
	const input = e.currentTarget.querySelector("input")
	input?.focus()
}

/**
 *  Focuses first select of event
 * */
export const focusFirstSelect = (e: React.MouseEvent) => {
	const input = e.currentTarget.querySelector("select")
	input?.focus()
}
