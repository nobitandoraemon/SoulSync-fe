import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
	const localTheme = localStorage.getItem("theme") || "valentine"; // Get the theme from local storage
	const [theme, setTheme] = useState(localTheme); // Initial theme state

	// Function to toggle the theme
	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === "valentine" ? "halloween" : "valentine"
		);
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
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}
