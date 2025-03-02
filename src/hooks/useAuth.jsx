import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();
const API = "https://soulsync-api.onrender.com";

const AuthProvider = ({ children }) => {
	// State to hold the authentication token
	const [token, setToken_] = useState(localStorage.getItem("token"));

	// Function to set the authentication token
	const setToken = (newToken) => {
		setToken_(newToken);
	};

	const loginAction = (data) => {
		axios
			.post(`${API}/auth/login`, data)
			.then((res) => {
				const token = res.data.accessToken;
				Cookies.set("jwt", token);
				setToken_(token);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const logOut = () => {
		axios
			.post(`${API}/auth/logout`)
			.then((res) => {
				console.log(res);
				Cookies.remove("jwt");

				localStorage.removeItem("token");
				setToken_();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		if (token) {
			axios.defaults.headers.common["Authorization"] = "Bearer " + token;
			localStorage.setItem("token", token);
		} else {
			delete axios.defaults.headers.common["Authorization"];
			localStorage.removeItem("token");
		}
	}, [token]);

	// Memoized value of the authentication context
	const contextValue = useMemo(
		() => ({
			token,
			setToken,
			loginAction,
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
