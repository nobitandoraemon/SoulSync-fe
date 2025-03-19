import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { APP_ROUTES } from "../lib/constants";
import { useUser } from "../hooks/useUser";
import { getTokenFromLocalStorage } from "../lib/common";
const PrivateRoute = () => {
	const { user } = useUser();
	const navigate = useNavigate();

	const token = getTokenFromLocalStorage();
	useEffect(() => {
		if (!token) {
			toast("You are not logged in", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);
		}
	}, []);

	useEffect(() => {
		if (user) {
			console.log("Get user data successfully");
		}
	}, [user]);

	return <Outlet context={[user]} />;
};

export default PrivateRoute;
