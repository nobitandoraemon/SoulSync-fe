import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useLayoutEffect } from "react";

const PrivateRoute = () => {
	const navigate = useNavigate();

	useLayoutEffect(() => {
		const isLoggin = localStorage.getItem("token") ? true : false;
		if (!isLoggin) {
			toast("You are not logged in");
			window.location.href = "/login";
			navigate("/login");
		}
	}, []);

	return <Outlet />;
};

export default PrivateRoute;
