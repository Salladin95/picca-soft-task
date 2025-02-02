import { forwardRef, HTMLProps, Ref } from "react"

import "./checkbox.scss"

type CheckboxProps = HTMLProps<HTMLInputElement> & {
	label: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, ...rest }, ref: Ref<HTMLInputElement>) => {
		return (
			<label className="checkbox">
				<input {...rest} type="checkbox" className="checkbox__input" ref={ref} />
				<span className="checked" />
				<span className="checkbox__label">{label}</span>
			</label>
		)
	},
)
