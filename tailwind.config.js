/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), daisyui, scrollbarHide],
	daisyui: {
		themes: ["valentine", "halloween"],
	},
};
