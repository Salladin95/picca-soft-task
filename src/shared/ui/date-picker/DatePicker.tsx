import DatePickerComp from "react-datepicker"
import { DatePickerProps } from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

export function DatePicker(props: DatePickerProps) {
	const { className, ...rest } = props
	return <DatePickerComp {...rest} className={`${className} date-picker`} />
}
