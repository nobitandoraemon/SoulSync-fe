import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { APP_ROUTES } from "../lib/constants";
const PrivateRoute = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	useEffect(() => {
		if (!token) {
			toast("You are not logged in", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);

			// } else {
			// 	if (!user.gender) {
			// 		toast("You are not fulfil your information!", { type: "warning" });
			// 		setTimeout(() => {
			// 			navigate(APP_ROUTES.FORM);
			// 		}, 3000);
			// 	}
		}
	}, []);
	return <Outlet />;
};

export default PrivateRoute;
