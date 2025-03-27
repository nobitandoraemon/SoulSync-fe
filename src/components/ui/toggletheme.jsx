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

export const ToggleTheme = ({ className }) => {
	const { theme, handleTheme } = useContext(ThemeContext);

	return (
		<button onClick={handleTheme} className={className}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
				/>
			</svg>
		</button>
	);
};
// export const DropdownTheme = ({ className }) => {
// 	const { theme, toggleTheme } = useContext(ThemeContext);
// 	return (
// 		<div className="dropdown mb-72">
// 			<div tabIndex={0} role="button" className="m-1 btn">
// 				Theme
// 				<svg
// 					width="12px"
// 					height="12px"
// 					className="inline-block w-2 h-2 fill-current opacity-60"
// 					xmlns="http://www.w3.org/2000/svg"
// 					viewBox="0 0 2048 2048"
// 				>
// 					<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
// 				</svg>
// 			</div>
// 			<ul
// 				tabIndex={0}
// 				className="p-2 shadow-2xl dropdown-content bg-base-300 rounded-box z-1 w-52"
// 			>
// 				{themeList.map((theme) => {
// 					return (
// 						<li key={theme.label}>
// 							<input
// 								type="radio"
// 								name="theme-dropdown"
// 								className="justify-start w-full theme-controller btn btn-sm btn-block btn-ghost"
// 								aria-label={theme.label}
// 								value={theme.value}
// 								onChange={(e) => toggleTheme(e.target.value)}
// 							/>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// };
