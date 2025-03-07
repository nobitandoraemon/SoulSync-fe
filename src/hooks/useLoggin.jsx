import { useLayoutEffect } from "react";
import { toast } from "react-toastify";

const useLoggin = () => {
	useLayoutEffect(() => {
		const isLoggin = localStorage.getItem("token");
		if (!isLoggin) {
			toast("You need to log in", { type: "warning" });
			setTimeout(() => {
				window.location.href = "/login";
			}, 3000);
		} else {
			return;
		}
	}, []);
};

export default useLoggin;
