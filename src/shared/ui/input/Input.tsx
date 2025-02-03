import React from "react"

import { cn, focusFirstInput } from "~/shared/lib"

import "./input.scss"

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "size"> & {
	/**
	 * Applies error styles
	 * */
	error?: boolean
	/**
	 * Adds prefix content before the input
	 */
	prefix?: React.ReactNode
	/**
	 * Adds suffix content after the input
	 */
	suffix?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { id, className, error, prefix, suffix, ...rest } = props
	return (
		<div className={cn("input-wrapper", className, { "input-wrapper_error": error })} onClick={focusFirstInput}>
			{prefix || null}
			<input
				aria-invalid={Boolean(error)}
				autoComplete="off"
				className={"input-wrapper__input input p3"}
				data-error={Boolean(error)}
				id={id}
				ref={ref}
				{...rest}
			/>
			{suffix || null}
		</div>
	)
})
