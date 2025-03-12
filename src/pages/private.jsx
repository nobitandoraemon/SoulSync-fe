import { Outlet } from "react-router";
import useLoggin from "../hooks/useLoggin";

const PrivateRoute = () => {
	useLoggin();

	return <Outlet />;
};

export default PrivateRoute;
