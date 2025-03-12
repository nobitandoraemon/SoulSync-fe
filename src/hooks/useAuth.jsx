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
				localStorage.setItem("username", data.username);
				toast("Login successfully", { type: "success" });
				setToken_(token);
				setTimeout(() => {
					navigate("/chat");
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
				toast("Login failed", { type: "error" });
			});
	};

	const regAction = (data) => {
		axios
			.post(`${API}/register`, data)
			.then((res) => {
				toast("Register successfully", { type: "success" });
				setTimeout(() => {
					navigate("/login");
				}, 3000);
			})
			.catch((err) => {
				toast(err.response.data.message);
			});
	};
	const logOut = () => {
		axios
			.post(`${API}/auth/logout`)
			.then((res) => {
				console.log(res.status === 204 && "Đăng xuất thành công");
				localStorage.removeItem("token");
				localStorage.removeItem("username");
				setToken_();
				toast("Logout successfully", { type: "success" });
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
