import { toast } from "react-toastify";
import { API_ROUTES } from "./constants";
import axios from "axios";
export function storeTokenInLocalStorage(token) {
	localStorage.setItem("token", token);
}

export function getTokenFromLocalStorage() {
	return localStorage.getItem("token");
}
export async function logOut() {
	try {
		await axios({
			method: "POST",
			url: API_ROUTES.LOG_OUT,
		});
		localStorage.removeItem("token");
		localStorage.removeItem("username");
		toast("Logout successfully", { type: "success" });
		setTimeout(() => {
			window.location.href = "/";
		}, 3000);
	} catch (err) {
		toast(`	${err.response.data.message}`, { type: "error" });
	}
}
export async function getAuthenticatedUser() {
	const defaultReturnObject = { authenticated: false, user: null };
	try {
		const token = getTokenFromLocalStorage();
		if (!token) {
			return defaultReturnObject;
		}
		const username = localStorage.getItem("username");
		const response = await axios({
			method: "GET",
			url: API_ROUTES.GET_USER + `/${username}`,
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
		const { authenticated = false } = response.data;
		return authenticated ? response.data : false;
	} catch (err) {
		console.log("getAuthenticatedUser, Something Went Wrong", err);
		return defaultReturnObject;
	}
}
