import { Navigate, Outlet } from "react-router";
import { useUser } from "../hooks/useUser";
import { toast } from "react-toastify";
import { useEffect } from "react";
const PrivateRoute = () => {
	const user = useUser();
	useEffect(() => {
		if (!user) {
			toast("You need to log in", { type: "warning" });
			setTimeout(() => {}, 3000);
			return <Navigate to="/login" replace />;
		}
	}, []);
	return <Outlet />;
};

export default PrivateRoute;
