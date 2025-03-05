import { useLayoutEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

const useLoggin = () => {
	const navigate = useNavigate();
	useLayoutEffect(() => {
		const isLoggin = Cookies.getItem("jwt") && localStorage.getItem("soulsync");
		if (!isLoggin) {
			toast("You are not logged in");
			window.location.href = "/login";
			navigate("/login");
		} else {
			return;
		}
	}, []);
};

export default useLoggin;
