import { render } from "@testing-library/react"
import { describe, it, vi, expect } from "vitest"
import userEvent from "@testing-library/user-event"

import { validEmployee } from "~/shared/mock"
import { BrowserRouter } from "react-router-dom"
import { EditEmployeeForm } from "~/features/edit-employee-form/EditEmployeeForm.tsx"

describe("EditEmployeeForm", () => {
	it("shows validation errors when fields are empty", async () => {
		const { getByTestId, getAllByTestId } = render(
			<BrowserRouter>
				<EditEmployeeForm employee={validEmployee} onSubmit={vi.fn()} />
			</BrowserRouter>,
		)

		await userEvent.clear(getByTestId("employee-phone"))
		await userEvent.clear(getByTestId("employee-name"))

		await userEvent.click(getByTestId("submit-btn"))

		getByTestId("submit-btn").click()
		expect(getAllByTestId("form-field-error").length).toBe(2)
	})
})
