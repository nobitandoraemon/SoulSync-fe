import { Navigate, Outlet } from "react-router";
import { useUser } from "../hooks/useUser";
import { toast } from "react-toastify";
const PrivateRoute = () => {
	const { user, authenticated } = useUser();
	if (!user || !authenticated) {
		toast("You need to log in", { type: "warning" });
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
};

export default PrivateRoute;
