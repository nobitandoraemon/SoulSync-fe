/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				text: {
					primary: "var(--text)",
					secondary: "var(--text2)",
				},
				background: {
					primary: "var(--background)",
					secondary: "var(--background2)",
				},
			},
		},
	},
	plugins: [],
};
