import { useState, useEffect } from "react";
import { getUser, getTokenFromLocalStorage } from "../lib/common"; // Import refreshToken và getTokenFromLocalStorage
import { APP_ROUTES } from "../lib/constants";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export function useUser() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		async function getUserDetails() {
			const token = getTokenFromLocalStorage(); // Lấy token từ localStorage
			if (!token) {
				navigate(APP_ROUTES.SIGN_IN);
				return;
			}
			//Check token validity
			const userData = await getUser();
			if (userData) {
				setUser(userData);
			} else {
				toast("Token is expired, please login again", { type: "warning" });

				localStorage.removeItem("token");
				localStorage.removeItem("username");
				setTimeout(() => {
					navigate(APP_ROUTES.SIGN_IN);
				}, 1500);
			}
		}
		getUserDetails();
	}, []); // Empty dependency array to run only once on mount

	return { user };
}
