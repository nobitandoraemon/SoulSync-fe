import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { APP_ROUTES } from "../lib/constants";
const PrivateRoute = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const userData = JSON.parse(localStorage.getItem('userData'))

	useEffect(() => {
		if (!token) {
			toast("You are not logged in", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);
		} else if (!userData.gender || !userData.birthday || !userData.zodiac){
			toast("Please fill out your missing information ", {type: 'warning'})
			setTimeout(() => {
				navigate(APP_ROUTES.FORM);
			}, 1500);
		} 
	}, []);
	return <Outlet />;
};

export default PrivateRoute;
