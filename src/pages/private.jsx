import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { APP_ROUTES } from "../lib/constants";
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
      axios
        .get(`https://soulsync-api.onrender.com/users/${formData.username}`) 
        .then((response) => {
					if (!response.data.gender || !response.data.birthday || !response.data.zodiac) {
						toast("Please fill out your missing information", { type: "warning" });
						setTimeout(() => {
							navigate(APP_ROUTES.FORM); // Replace with your form route
						}, 1500);
					}
        })
        .catch((error) => {
          console.error(error);
        });
			
    }
	}, []);
	
	return <Outlet />;
};

export default PrivateRoute;
