import { useLayoutEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const useLoggin = () => {
	const navigate = useNavigate();
	useLayoutEffect(() => {
		const isLoggin = localStorage.getItem("token") ? true : false;
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
