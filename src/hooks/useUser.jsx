import { useState, useEffect } from "react";
import { getUser } from "../lib/common";
import { APP_ROUTES } from "../lib/constants";
import { useNavigate } from "react-router";

export function useUser() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		async function getUserDetails() {
			const user = await getUser();
			if (!user) {
				navigate(APP_ROUTES.SIGN_IN);
				return;
			}
			setUser(user);
		}
		getUserDetails();
	}, []);

	return { user };
}
