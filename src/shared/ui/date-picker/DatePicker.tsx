import DatePickerComp from "react-datepicker"
import { DatePickerProps } from "react-datepicker"

import { cn } from "~/shared/lib"

import "react-datepicker/dist/react-datepicker.css"

import "./date-picker.scss"

export function DatePicker(props: DatePickerProps) {
	const { className, ...rest } = props
	return <DatePickerComp {...rest} className={cn("date-picker", className)} />
}
