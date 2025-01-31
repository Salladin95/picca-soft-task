import { type EmployeeType } from "~/shared/types"

type EmployeeProps = {
	employee: EmployeeType
}

export function Employee(props: EmployeeProps) {
	return <section>{JSON.stringify(props.employee)}</section>
}
