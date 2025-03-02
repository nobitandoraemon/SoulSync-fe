import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
	const token = localStorage.getItem("token");
	if (!token) <Navigate to="/login" />;

	return <Outlet />;
};

export default PrivateRoute;
