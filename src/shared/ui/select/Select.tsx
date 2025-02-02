import { forwardRef, HTMLProps } from "react"

export interface Option {
	value: string
	label: string
}

export type SelectProps = HTMLProps<HTMLSelectElement> & {
	options: Option[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { options, ...rest } = props
	return (
		<select {...rest} ref={ref} className={"select-element"}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
})
