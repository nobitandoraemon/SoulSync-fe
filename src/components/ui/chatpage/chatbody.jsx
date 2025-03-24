import { useEffect, useState } from "react";

const ChatBody = ({ socket, user, matchedUser }) => {
	const [chat, setChat] = useState([]);

	// Xử lí nhận tin nhắn
	const handleMessage = (data) => {
		setChat((prevChat) => [...prevChat, data]);
	};

	// Nhận thông tin chat từ server socket

	useEffect(() => {
		socket.on("message", handleMessage);
		return () => {
			socket.off("message", handleMessage);
		};
	}, [socket]);
	return (
		<div className="flex-1 p-4 mt-20 mb-8 absolute top-0 left-0 right-0 bottom-16">
			<div className="flex flex-col justify-end h-full">
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
								<time className="text-xs opacity-50">{message.createTime}</time>
							</div>
							<div className="chat-bubble">{message.content}</div>
							<div className="opacity-50 chat-footer">
								Seen at {message.createTime}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ChatBody;
