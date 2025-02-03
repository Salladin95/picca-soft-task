import { WithChildren } from "~/shared/types"
import { cn } from "~/shared/lib"

import "./form-field.scss"

type FormFieldProps = {
	error?: string
	required?: boolean
	className?: string
	forId: string
	label: string
} & Required<WithChildren>

export function FormField(props: FormFieldProps) {
	const { forId: id, label, children, error, className, required } = props
	return (
		<div data-error={Boolean(error)} className={cn("form-field", className)}>
			<div className="flex gap-1">
				{Boolean(required) && <span className="form-field__required">*</span>}
				<label className={"form-field__label"} htmlFor={id}>
					{label}
				</label>
			</div>
			{children}
			{error && <span className={"form-field__error"}>{error}</span>}
		</div>
	)
}
