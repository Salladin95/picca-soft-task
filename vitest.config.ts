// vitest.config.ts
import * as path from "path"
import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	test: {
		exclude: ["node_modules"],
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		alias: {
			"~/": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [tsconfigPaths()],
})
