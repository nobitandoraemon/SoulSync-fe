import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const AuthContext = createContext();
const API = "https://soulsync-api.onrender.com";

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
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
				localStorage.setItem("token", token);
				setToken_(token);
				toast("Login successfully");
				setTimeout(() => {
					navigate("/chat");
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
				toast("Login failed");
			});
	};

	const regAction = (data) => {
		axios
			.post(`${API}/register`, data)
			.then((res) => {
				console.log(res);
				toast("Register successfully");
				setTimeout(() => {
					navigate("/login");
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
				toast("Register failed");
			});
	};
	const logOut = () => {
		axios
			.post(`${API}/auth/logout`)
			.then((res) => {
				console.log(res.status === 204 && "Đăng xuất thành công");
				localStorage.removeItem("token");
				setToken_();
				toast("Logout successfully");
				setTimeout(() => {
					navigate("/login");
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		if (token) {
			axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		} else {
			delete axios.defaults.headers.common["Authorization"];
		}
	}, [token]);

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
