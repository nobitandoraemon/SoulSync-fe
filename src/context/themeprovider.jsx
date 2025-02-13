import { useState, useEffect, createContext } from "react";

const ThemeProvider = ({ children }) => {
	const localTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(localTheme || "dark");
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		console.log(theme);
		localStorage.setItem("theme", theme);
		document.body.classList.remove("dark", "light");
		document.body.classList.add(theme);
	}, [theme]);

	const ThemeContext = createContext({ theme, toggleTheme });

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
