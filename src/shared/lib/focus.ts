import { MouseEvent } from "react"

/**
 *  Focuses first input of event
 * */
export const focusFirstInput = (e: MouseEvent) => {
	const input = e.currentTarget.querySelector("input")
	input?.focus()
}
