import { useState, useEffect, createContext } from "react";

const ThemeProvider = ({ children }) => {
	const localTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(localTheme || "dark");
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		document.body.classList.toggle(theme);
	}, [theme]);

	const ThemeContext = createContext({ theme, toggleTheme });

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
