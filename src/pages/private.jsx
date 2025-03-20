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
			toast("You are not logged in", { type: "warning" });
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
	const [chat, setChat] = useState([]); // Lấy thống tin chat : messages
	const [matchedUser, setMatchedUser] = useState(null); // Lấy thông tin người sau khi match
	const [ok, setOk] = useState(false); // Check xem người dùng có chấp nhận vào Chat hay không
	const [isMatched, setIsMatched] = useState(false); //2 người dùng cùng chấp nhận chat chưa
	const [failMessage, setFailMessage] = useState(""); //nếu be không tìm được đối tượng, hoặc đối phương từ chối, hoặc bản thân từ chối, thì server sẽ trả lại fail message để thông báo đến người còn lại
	const [isFinding, setIsFinding] = useState(false); //check xem user có đang muốn match hay không
	const [isRefuse, setIsRefuse] = useState(false); //check xem user có refuse hay không
	//start socket, send username to socket-be
	socket.auth = { username };
	socket.connect();

	//nhận thông tin về user B sẽ match -> chuyển đến waiting room
	socket.on("wait", (data) => {
		const { A, B } = data;
		if (A.username == username) {
			setMatchedUser(B);
		} else {
			setMatchedUser(A);
		}
		console.log(matchedUser);
	});

	// server gửi về match -> cả 2 đã accept -> cho Chat
	socket.on("match", (data) => {
		console.log(data);
		setIsMatched(true);
	});

	socket.on("fail", (data) => {
		const { message } = data;
		setFailMessage(message);
		console.log(message);
	});

	// Nhận thông tin chat từ server socket
	socket.on("message", (data) => {
		setChat((prevChat) => [...prevChat, data]);
	});

	// Kết nối socket
	socket.on("connect", () => {
		console.log("Connected to server");
	});
	// Ngắt kết nối socket
	socket.on("disconnect", () => {
		console.log("Disconnected from server");
	});

	const sendMessage = (content) => {
		socket.emit("chat", {
			receiver: matchedUser.username,
			content: content,
		});
	};

	return (
		<Outlet
			context={[
				user,
				chat,
				setChat,
				matchedUser,
				setMatchedUser,
				ok,
				setOk,
				isMatched,
				setIsMatched,
				failMessage,
				setFailMessage,
				isFinding,
				setIsFinding,
				isRefuse,
				setIsRefuse,
				sendMessage,
			]}
		/>
	);
};

export default PrivateRoute;
