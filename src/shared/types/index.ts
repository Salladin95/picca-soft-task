import React from "react"
import { FilterRolesType } from "~/app/redux/types"

export type EmployeeType = {
	id: number
	name: string
	isArchive: boolean
	role: FilterRolesType
	phone: string
	birthday: string
}

export type WithChildren = { children: React.ReactNode }
