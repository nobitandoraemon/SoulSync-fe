import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { API_ROUTES, APP_ROUTES } from "../lib/constants";
import axios from "axios";
const PrivateRoute = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	
	

	useEffect(() => {
		if (!token) {
			toast("You are not logged in", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);
		} else {
			const getData = async () => {
				try {
					const response = await axios({
						method: "GET",
						url: API_ROUTES.GET_USER + `/${username}`,
						headers: {
							authorization: `Bearer ${token}`,
							"Content-Type": "application/json",
						},
						withCredentials: true,
					});
					console.log(response);
					if (!response.data.gender || !response.data.birthday || !response.data.zodiac ) {
						toast("Please fill out your missing information", { type: "warning" });
			      setTimeout(() => {
				      navigate(APP_ROUTES.FORM);
			}, 1500);
					}
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			};
	
			getData(); // Call the function
		}
	}, [navigate, token]);
	
	return <Outlet />;
};

export default PrivateRoute;
