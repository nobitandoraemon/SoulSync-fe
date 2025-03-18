import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { APP_ROUTES } from "../lib/constants";
import { useUser } from "../hooks/useUser";
const PrivateRoute = () => {
	const { user } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			toast("You are not logged in", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);
		}
	}, []);
	return <Outlet />;
};

export default PrivateRoute;
