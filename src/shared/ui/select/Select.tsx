import { forwardRef, HTMLProps } from "react"

import { cn } from "~/shared/lib"

import "./select.scss"

export interface Option {
	value: string
	label: string
}

export type SelectProps = HTMLProps<HTMLSelectElement> & {
	options: Option[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { options, className, ...rest } = props
	return (
		<select {...rest} ref={ref} className={cn("select", className)}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
})
