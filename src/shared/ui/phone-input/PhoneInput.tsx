import PhoneInputComp from "react-phone-number-input"
import { ComponentProps, ElementRef, forwardRef } from "react"

import { cn } from "~/shared/lib"

import "./phone-input.scss"
import "react-phone-number-input/style.css"

type PhoneInputProps = ComponentProps<typeof PhoneInputComp> & {
	onChange: (event: string) => void
}
type PhoneInputRefType = ElementRef<typeof PhoneInputComp>

export const PhoneInput = forwardRef<PhoneInputRefType, PhoneInputProps>((props, ref) => {
	const { className, onChange, ...rest } = props
	return <PhoneInputComp {...rest} onChange={onChange} className={cn("phone-input", className)} ref={ref} />
})
