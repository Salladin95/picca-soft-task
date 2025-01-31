import React from "react"

export type EmployeeType = {
	id: number
	name: string
	isArchive: boolean
	role: string
	phone: string
	birthday: string
}

export type WithChildren = { children: React.ReactNode }
