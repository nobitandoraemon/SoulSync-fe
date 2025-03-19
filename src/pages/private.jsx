import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import axios from "axios";
const PrivateRoute = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	const token = localStorage.getItem("token");
	const username = localStorage.getItem("username");
	// useEffect(() => {
	// 	if (!token) {
	// 		toast("You are not logged in", { type: "warning" });
	// 		setTimeout(() => {
	// 			navigate(APP_ROUTES.SIGN_IN);
	// 		}, 1500);
	// 	}
	// }, []);

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axios({
					method: "GET",
					url: API_ROUTES.GET_USER + `/${username}`,
					headers: {
						authorization: `Bearer ${token}`,
					},
					withCredentials: true,
				});
				setUser(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		getUser();
		console.log(user);
	}, []);
	return <Outlet context={[user]} />;
};

export default PrivateRoute;
