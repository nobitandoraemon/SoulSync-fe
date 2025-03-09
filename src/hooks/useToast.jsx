import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ThemeContext } from "../context/themeprovider";

const Toast = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<ToastContainer
			limit={1}
			autoClose={3000}
			theme={theme === "halloween" ? "dark" : "light"}
		/>
	);
};

export default Toast;
