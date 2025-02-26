import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(localStorage.getItem("site") || "");
	const navigate = useNavigate();
	const loginAction = async (data) => {
		try {
			const response = await fetch("your-api-endpoint/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const res = await response.json();
			if (res.data) {
				setUser(res.data.user);
				setToken(res.token);
				localStorage.setItem("site", res.token);
				navigate("/chat");
				return;
			}
			throw new Error(res.message);
		} catch (err) {
			console.error(err);
		}
	};

	const regAction = async (data) => {
		try {
			const response = await fetch("your-api-endpoint/auth/reg", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const res = await response.json();
			if (res.data) {
				navigate("/login");
				return;
			}
			throw new Error(res.message);
		} catch (err) {
			console.error(err);
		}
	};

	const logOut = () => {
		setUser(null);
		setToken("");
		localStorage.removeItem("site");
		navigate("/login");
	};
	return (
		<AuthContext.Provider
			value={{ token, user, loginAction, regAction, logOut }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => {
	return useContext(AuthContext);
};
