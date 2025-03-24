import { useEffect, useRef, useState } from "react";

const ChatBody = ({ newSocket, user, matchedUser }) => {
	const [chat, setChat] = useState([]);
	const lastMessage = useRef(null);

	const handleScroll = (e) => {
		e.preventDefault();
		lastMessage.current?.scrollIntoView({ behavior: "smooth" });
	};

	// Xử lí nhận tin nhắn
	const handleMessage = (data) => {
		setChat((prevChat) => [...prevChat, data]);
	};

	// Nhận thông tin chat từ server socket

	useEffect(() => {
		newSocket.on("message", handleMessage);
		return () => {
			newSocket.off("message", handleMessage);
		};
	}, [newSocket]);

	useEffect(() => {
		handleScroll();
	}, [chat]);
	return (
		<div className="flex flex-col overflow-x-auto h-full p-6 mt-12 mb-8">
			<div className="flex flex-col h-full">
				{chat.map((message) => {
					const isMainUser = message.sender === user.username ? true : false;
					return (
						<>
							<div
								key={message.id}
								className={`chat ${isMainUser ? "chat-end" : "chat-start"}`}
							>
								<div className="chat-image avatar">
									<div className="w-10 rounded-full">
										<img
											alt="User Avatar"
											src={isMainUser ? user.image : matchedUser.image}
										/>
									</div>
								</div>
								<div className="chat-header">
									{isMainUser
										? "Bạn"
										: `Người dùng ẩn danh #${matchedUser.zodiac}`}
								</div>
								<div className="chat-bubble h-fit text-wrap">
									{message.content}
								</div>
								<div className="opacity-50 chat-footer">Delivered</div>
							</div>
							<div ref={lastMessage}></div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default ChatBody;
