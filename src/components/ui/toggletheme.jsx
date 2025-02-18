import { useContext } from "react";
import { ThemeContext } from "../../context/themeprovider";
import { motion } from "motion/react";

const Love = () => {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="size-6"
			whileHover={{ scale: 1.3 }}
			whileTap={{ scale: 0.9 }}
			initial={{ rotate: 0 }}
			animate={{ rotate: 360 }}
			transition={{ duration: 0.25 }}
		>
			<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
		</motion.svg>
	);
};

const Dark = () => {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="size-6"
			whileHover={{ scale: 1.3 }}
			whileTap={{ scale: 0.9 }}
			initial={{ rotate: 0 }}
			animate={{ rotate: 360 }}
			transition={{ duration: 0.25 }}
		>
			<path
				fillRule="evenodd"
				d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
				clipRule="evenodd"
			/>
		</motion.svg>
	);
};

const ToggleTheme = ({ className }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<button onClick={toggleTheme} className={className}>
			{theme === "valentine" ? <Dark /> : <Love />}
		</button>
	);
};

export default ToggleTheme;
