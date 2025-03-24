import { useEffect, useState } from "react";

const ChatBody = ({ newSocket, user, matchedUser }) => {
	const [chat, setChat] = useState([]);

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
	return (
		<div className="flex flex-col overflow-x-auto h-full p-4 mt-20 mb-8">
			<div className="flex flex-col h-full">
				{chat.map((message) => {
					const isMainUser = message.sender === user.username ? true : false;
					return (
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
									: `Người dùng ẩn danh #${message.receiver._id}`}
							</div>
							<div className="chat-bubble h-fit text-wrap">
								{message.content}
							</div>
							<div className="opacity-50 chat-footer">Delivered</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ChatBody;
