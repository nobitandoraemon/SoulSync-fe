import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();
const themeList = [
	{
		label: "Light",
		value: "light",
	},
	{
		label: "Dark",
		value: "dark",
	},
	{
		label: "Cup Cake",
		value: "cupcake",
	},
	{
		label: "Bumble Bee",
		value: "bumblebee",
	},
	{
		label: "Emerald",
		value: "emerald",
	},
	{
		label: "Corporate",
		value: "corporate",
	},
	{
		label: "Synthwave",
		value: "synthwave",
	},
	{
		label: "Retro",
		value: "retro",
	},
	{
		label: "Cyberpunk",
		value: "cyperpunk",
	},
	{
		label: "Valentine",
		value: "valentine",
	},
	{
		label: "Halloween",
		value: "halloween",
	},
	{
		label: "Garden",
		value: "garden",
	},
	{
		label: "Forest",
		value: "forest",
	},
	{
		label: "Aqua",
		value: "aqua",
	},
	{
		label: "Lofi",
		value: "lofi",
	},
	{
		label: "Pastel",
		value: "pastel",
	},
	{
		label: "Fantasy",
		value: "fantasy",
	},
	{
		label: "Wire Frame",
		value: "wireframe",
	},
	{
		label: "Black",
		value: "black",
	},
	{
		label: "Luxury",
		value: "luxury",
	},
	{
		label: "Dracula",
		value: "dracula",
	},
	{
		label: "Cmyk",
		value: "cmyk",
	},
	{
		label: "Autumn",
		value: "autumn",
	},
	{
		label: "Business",
		value: "business",
	},
	{
		label: "Acid",
		value: "acid",
	},
	{
		label: "Lemonade",
		value: "lemonade",
	},
	{
		label: "Night",
		value: "Night",
	},
	{
		label: "Coffee",
		value: "coffee",
	},
	{
		label: "Winter",
		value: "winter",
	},
	{
		label: "Dim",
		value: "dim",
	},
	{
		label: "Nord",
		value: "nord",
	},
	{
		label: "Sun Set",
		value: "sunset",
	},
	{
		label: "Caramel Latte",
		value: "caramellatte",
	},
	{
		label: "Abyss",
		value: "abyss",
	},
	{
		label: "Silk",
		value: "silk",
	},
];
export default function ThemeProvider({ children }) {
	const defaultTheme = "autumn";
	const localTheme = localStorage.getItem("theme") || defaultTheme; // Get the theme from local storage
	const [theme, setTheme] = useState(localTheme); // Initial theme state

	// Function to toggle the theme
	const toggleTheme = (input) => {
		setTheme(input);
	};
	const handleTheme = () => {
		const num = Math.floor(Math.random() * 36);
		toggleTheme(themeList[num].value);
	};

	// Set the theme to local storage
	localStorage.setItem("theme", theme);

	useEffect(() => {
		document.body.removeAttribute("data-theme");
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	// Create the context value
	const contextValue = {
		theme,
		toggleTheme,
		handleTheme,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}
