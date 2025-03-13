import { useState, useEffect } from "react";
import { getAuthenticatedUser } from "../lib/common";
import { APP_ROUTES } from "../lib/constants";
import { useNavigate } from "react-router";

export function useUser() {
	const [user, setUser] = useState(null);
	const [authenticated, setAutenticated] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		async function getUserDetails() {
			const { authenticated, user } = await getAuthenticatedUser();
			if (!authenticated) {
				navigate(APP_ROUTES.SIGN_IN);
				return;
			}
			setUser(user);
			setAutenticated(authenticated);
		}
		getUserDetails();
	}, []);

	return { user, authenticated };
}
