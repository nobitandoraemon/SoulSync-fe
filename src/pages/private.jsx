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

	const [username, setUsername] = useState(localStorage.getItem("username")); // Lấy user hiện tại để gửi auth cho socket
	// const [chat, setChat] = useState([]); // Lấy thống tin chat : messages
	const [matchedUser, setMatchedUser] = useState(null); // Lấy thông tin người sau khi match
	const [isMatched, setIsMatched] = useState(false); //2 người dùng cùng chấp nhận chat chưa
	const [failMessage, setFailMessage] = useState(""); //nếu be không tìm được đối tượng, hoặc đối phương từ chối, hoặc bản thân từ chối, thì server sẽ trả lại fail message để thông báo đến người còn lại
	const [isFinding, setIsFinding] = useState(false); //check xem user có đang muốn match hay không
	const [newSocket, setNewSocket] = useState(socket);
	useEffect(() => {
		//start socket, send username to socket-be
		newSocket.auth = { username };
		newSocket.connect();

		//nhận thông tin về user B sẽ match -> chuyển đến waiting room
		newSocket.on("wait", (data) => {
			if (isFinding) {
				const { A, B } = data;
				if (A.username == username) {
					setMatchedUser(B);
				} else {
					setMatchedUser(A);
				}
				console.log(matchedUser);
			}
		});

		// server gửi về match -> cả 2 đã accept -> cho Chat
		newSocket.on("match", (data) => {
			if (data.message === "Sucessfull") {
				setIsMatched(true);
			}
		});

		newSocket.on("fail", (data) => {
			const { message } = data;
			if (message) {
				setFailMessage(message);
				console.log(message);
			}
		});

		// Kết nối newSocket
		newSocket.on("connect", () => {
			console.log("Connected to server");
		});
		// Ngắt kết nối newSocket
		newSocket.on("disconnect", () => {
			console.log("Disconnected from server");
		});

		return () => {
			newSocket.close();
		};
	}, [newSocket, isFinding, isMatched]);

	return (
		<Outlet
			context={{
				user,
				matchedUser,
				setMatchedUser,
				isMatched,
				setIsMatched,
				failMessage,
				setFailMessage,
				isFinding,
				setIsFinding,
				newSocket,
				setNewSocket,
			}}
		/>
	);
};

export default PrivateRoute;
