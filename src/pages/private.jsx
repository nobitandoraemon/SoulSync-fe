import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";
const PrivateRoute = () => {
	const token = localStorage.getItem("token");
	useEffect(() => {
		if (!token) {
			toast("You need to log in", { type: "warning" });
			setTimeout(() => {}, 3000);
			return <Navigate to="/login" replace />;
		}
	}, [token]);
	return <Outlet />;
};

export default PrivateRoute;
