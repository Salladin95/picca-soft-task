// vitest.config.ts
import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		include: ["src/**/*.test.{ts,tsx,js,jsx}"], // Adjust to your test file pattern
		exclude: ["node_modules"], // Exclude node_modules
		environment: "jsdom", // or 'node' if not testing DOM-related code
		// reporters: ['html', 'verbose'], // Add reporters as needed (e.g., HTML reports)
		// ... other Vitest options
	},
})
