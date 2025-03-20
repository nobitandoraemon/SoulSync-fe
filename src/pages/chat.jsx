import { useEffect, useState } from "react";
import { ChatContainer, useScroll, Toast } from "../config/components";

import axios from "axios";
import { toast } from "react-toastify";

const Chat = ({ socket }) => {
	// Check tab active bên sidebar

	const [loading, setLoading] = useState(false);
	const [showCountdown, setShowCountdown] = useState(false);
	const [countdown, setCountdown] = useState(30);
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

	// Ngắt kết nối socket
	socket.on("disconnect", () => {
		console.log("Disconnected from server");
	});
	// Khi người dùng chấp nhận match

	useEffect(() => {
		if (ok) {
			console.log("ok");

			socket.emit("ok", {});
			setOk(false);
		}
	}, [ok, setOk]);

	useEffect(() => {
		if (isFinding) {
			console.log("find");

			socket.emit("find", {});
			setIsFinding(false);
		}
	}, [isFinding, setIsFinding]);

	useEffect(() => {
		if (isRefuse) {
			console.log("refuse");

			socket.emit("refuse", {});
			setIsRefuse(false);
		}
	}, [isRefuse, setIsRefuse]);

	const sendMessage = (content) => {
		socket.emit("chat", {
			receiver: matchedUser.username,
			content: content,
		});
	};

	//Check người dùng có đang cuộn trang
	const isScroll = useScroll();
	//Màn hình loading
	const [isLoading, setIsLoading] = useState(true);
	const handleLoading = () => {
		setIsLoading(false);
	};

	//Loading 1,5s trước khi vào app
	useEffect(() => {
		const loadingInterval = setInterval(() => {
			handleLoading();
		}, 1500);

		return () => {
			clearInterval(loadingInterval);
		};
	}, []);

	useEffect(() => {
		if (!matchedUser) {
			console.log("There's still no user to match");
		} else {
			console.log("UserMatched", matchedUser);
		}
		return () => {};
	}, [matchedUser]);

	const startCountdown = () => {
		const countdownInterval = setInterval(() => {
			setCountdown((prevCountdown) => {
				if (prevCountdown <= 1) {
					clearInterval(countdownInterval);
					setShowCountdown(false);
					setCountdown(30);
				}
				return prevCountdown - 1;
			});
		}, 1000);
	};

	return !isLoading ? (
		<div className="flex w-screen max-w-full min-h-screen">
			<ChatContainer
				isFinding={isFinding}
				setIsFinding={setIsFinding}
				isScroll={isScroll}
				socket={socket}
				matchedUser={matchedUser}
				chat={chat}
				ok={ok}
				setOk={setOk}
				setIsRefuse={setIsRefuse}
				isMatched={isMatched}
				setIsMatched={setIsMatched}
				sendMessage={sendMessage}
			/>
		</div>
	) : (
		<div className="flex items-center justify-center w-screen h-screen">
			<Toast />
			<span className=" loading loading-spinner text-primary"></span>
		</div>
	);
};

export default Chat;
