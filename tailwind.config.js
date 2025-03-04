/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
	],
	theme: {
		extend: {
			animation: {
				"infinite-scroll": "infinite-scroll 60s linear infinite",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-80% - 2rem))" },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), daisyui, scrollbarHide],
	daisyui: {
		themes: ["valentine", "halloween"],
	},
};
