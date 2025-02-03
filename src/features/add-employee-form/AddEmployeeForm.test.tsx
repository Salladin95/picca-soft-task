import { render } from "@testing-library/react"
import { describe, it, vi, expect } from "vitest"
import userEvent from "@testing-library/user-event"

import { AddEmployeeForm } from "./AddEmployeeForm"
import { validFormEmployee } from "~/shared/mock"
import { BrowserRouter } from "react-router-dom"

describe("AddEmployeeForm", () => {
	it("shows validation errors when fields are empty", async () => {
		const { getByTestId, getAllByTestId } = render(
			<BrowserRouter>
				<AddEmployeeForm employee={validFormEmployee} onSubmit={vi.fn()} />
			</BrowserRouter>,
		)

		await userEvent.clear(getByTestId("employee-name"))
		await userEvent.clear(getByTestId("employee-phone"))

		await userEvent.click(getByTestId("submit-btn"))

		getByTestId("submit-btn").click()
		expect(getAllByTestId("form-field-error").length).toBe(2)
	})
})
