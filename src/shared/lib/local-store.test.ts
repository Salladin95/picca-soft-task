import { afterEach, describe, expect, it } from "vitest"

import { isEmployeeRole } from "~/shared/guards"
import { EMPLOYEE_ROLES } from "~/entities/employee"
import { getSafeLocalStoreItem, setToLocalStorage } from "~/shared/lib/local-store"

describe("Local Storage Functions", () => {
	afterEach(() => {
		localStorage.clear()
	})

	it("should set and get an item from local storage", () => {
		const key = "testKey"
		const value = { name: "Test" }

		setToLocalStorage(key, value)

		const result = JSON.parse(localStorage.getItem(key) || "{}")
		expect(result).toEqual(value)
	})

	it("should get a safe item from local storage", () => {
		const key = "testKey"
		const value = EMPLOYEE_ROLES.COOK
		const guard = isEmployeeRole

		setToLocalStorage(key, value)

		const result = getSafeLocalStoreItem(key, guard, EMPLOYEE_ROLES.ALL)
		expect(result).toEqual(value)
	})

	it("should return default value if local storage item is invalid", () => {
		const key = "testKey"
		const invalidValue = "INVALID_ROLE"
		const guard = isEmployeeRole
		const defaultValue = EMPLOYEE_ROLES.WAITER

		setToLocalStorage(key, invalidValue)

		const result = getSafeLocalStoreItem(key, guard, defaultValue)
		expect(result).toEqual(defaultValue)
	})
})
