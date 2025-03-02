import { useEffect, useState } from "react";
import { ChatBox, Content } from "../../../config/components";
import { io } from "socket.io-client";

const ChatContainer = ({ socket, content, isActive, isScroll, user }) => {
	const [username, setUsername] = useState(localStorage.getItem("username"));
	const [chat, setChat] = useState([]);
	const [socketIO, setSocketIO] = useState(socket);
	const [matchedUser, setMatchedUser] = useState(null);
	useEffect(() => {
		const newSocket = io("https://soulsync-api.onrender.com", {
			auth: { username: username },
		});
		setSocketIO(newSocket);

		newSocket.on("connect", () => {
			console.log("Connected to server");
		});

		newSocket.on("match", (data) => {
			setMatchedUser(data.B); // Assuming data.B is the matched user's username
			console.log(`Matched with ${data.B}`);
		});

		newSocket.on("message", (data) => {
			setChat((prevChat) => [...prevChat, data]);
		});

		newSocket.on("disconnect", () => {
			console.log("Disconnected from server");
		});

		return () => newSocket.close();
	}, [username]);

	const requestMatch = () => {
		if (socketIO) {
			socketIO.emit("ok", { username }); // Request a match
		}
	};

	return (
		<>
			{!matchedUser ? (
				<div className="max-w-[80%] mx-auto flex items-center justify-between">
					<input
						type="text"
						placeholder="Enter username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button onClick={requestMatch}>Find a Match</button>
				</div>
			) : (
				<>
					<Content
						user={user}
						content={content}
						isActive={isActive}
						isScroll={isScroll}
					/>
					<ChatBox
						chat={chat}
						user={user}
						socketIO={socketIO}
						matchedUser={matchedUser}
					/>
				</>
			)}
		</>
	);
};

export default ChatContainer;
