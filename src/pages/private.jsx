import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { APP_ROUTES } from "../lib/constants";
import { useUser } from "../hooks/useUser";
import { getTokenFromLocalStorage } from "../lib/common";

const PrivateRoute = ({ socket }) => {
	// ============ Get user data
	const { user } = useUser();
	const navigate = useNavigate();
	const token = getTokenFromLocalStorage();
	// ============ Get user data

	// ============ Check login
	useEffect(() => {
		if (!token) {
			toast("Bạn chưa đăng nhập", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);
		}
	}, []);

	// ============ Check login

	// ============ Get user data

	// ============ Get user data

	// ======================================= Chat socket ==========================================

	// Check tab active bên sidebar

	const [entered, setEntered] = useState(false);

	return (
		<Outlet
			context={
				{ user, token, entered, setEntered }
				// matchedUser,
				// setMatchedUser,
				// isMatched,
				// setIsMatched,
				// failMessage,
				// setFailMessage,
				// isFinding,
				// setIsFinding,
				// newSocket,
				// setNewSocket,
			}
		/>
	);
};

export default PrivateRoute;
