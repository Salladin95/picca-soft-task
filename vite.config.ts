import path from "path"
import { defineConfig } from "vite"
import autoprefixer from "autoprefixer"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

const pathSrc = path.resolve(__dirname, "./src")

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			"~": pathSrc,
		},
	},
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
	base: "/picca-soft-task/",
})
