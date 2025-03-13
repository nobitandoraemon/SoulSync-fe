import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_ROUTES, APP_ROUTES } from "../lib/constants";
import { storeTokenInLocalStorage } from "../lib/common";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	// State to hold the authentication token
	const [token, setToken_] = useState(localStorage.getItem("token"));
	// Function to set the authentication token
	const setToken = (newToken) => {
		setToken_(newToken);
	};

	const loginAction = async (data) => {
		try {
			const response = await axios({
				method: "POST",
				data: data,
				url: API_ROUTES.SIGN_IN,
			});
			if (response?.data?.accessToken) {
				toast("Login successfully", { type: "success" });
				storeTokenInLocalStorage(response.data.accessToken);
				localStorage.setItem("username", data.username);
			}
			setTimeout(() => {
				navigate(APP_ROUTES.CHAT);
			}, 1500);
		} catch (err) {
			console.log(err);
			toast("Login failed", { type: "error" });
		}
	};

	const regAction = async (data) => {
		try {
			const response = await axios({
				method: "POST",
				data: data,
				url: API_ROUTES.SIGN_UP,
			});
			if (response) {
				toast("Registration successfully", { type: "success" });
				setTimeout(() => {
					navigate(APP_ROUTES.SIGN_IN);
				}, 1500);
			}
		} catch (err) {
			console.log(err);
			toast(`${err.response.data.message}`, { type: "error" });
		}
	};
	const logOut = () => {
		axios
			.post(`/auth/logout`)
			.then((res) => {
				toast("Logout successfully", { type: "success" });
				localStorage.removeItem("token");
				localStorage.removeItem("username");
				setToken_();
				setTimeout(() => {
					navigate("/login");
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// Memoized value of the authentication context
	const contextValue = useMemo(
		() => ({
			token,
			setToken,
			loginAction,
			regAction,
			logOut,
		}),
		[token]
	);

	// Provide the authentication context to the children components
	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

export default AuthProvider;
