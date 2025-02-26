import { Navigate, Outlet } from "react-router";
import { useAuth } from "../config/components";

const PrivateRoute = () => {
	const user = useAuth();
	if (!user.token) return <Navigate to="/login" />;
	return <Outlet />;
};

export default PrivateRoute;
