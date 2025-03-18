import { useState, useEffect } from "react";
import { getUser, refreshToken, getTokenFromLocalStorage } from "../lib/common"; // Import refreshToken và getTokenFromLocalStorage
import { APP_ROUTES } from "../lib/constants";
import { useNavigate } from "react-router";

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

			const newToken = await refreshToken(); // Gọi hàm refreshToken
			if (newToken) {
				// Nếu có token mới, tiếp tục lấy thông tin người dùng
				const user = await getUser();
				if (!user) {
					navigate(APP_ROUTES.SIGN_IN);
					return;
				}
				setUser(user);
			} else {
				navigate(APP_ROUTES.SIGN_IN); // Nếu không có token mới, điều hướng đến trang đăng nhập
			}
		}
		getUserDetails();
	}, []); // Empty dependency array to run only once on mount

	return { user };
}
