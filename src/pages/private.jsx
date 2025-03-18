import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { APP_ROUTES } from "../lib/constants";
const PrivateRoute = () => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			toast("You are not logged in", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);
		}
	}, [token]);
	return <Outlet />;
};

export default PrivateRoute;
