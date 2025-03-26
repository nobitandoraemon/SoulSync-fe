import { useEffect, useRef, useState } from "react";

const ChatBody = ({ newSocket, user, matchedUser }) => {
	const [chat, setChat] = useState([]);
	const [notify, setNotify] = useState(null);
	const lastMessage = useRef(null);

	// Xử lí nhận tin nhắn
	const handleMessage = (data) => {
		setChat((prevChat) => [...prevChat, data]);
	};

	// Nhận thông tin chat từ server socket

	useEffect(() => {
		newSocket.on("message", handleMessage);
		newSocket.on("end", (data) => {
			setNotify(data.message);
		});
		return () => {
			newSocket.close();
		};
	}, [newSocket]);

	useEffect(() => {
		lastMessage.current?.scrollIntoView({ behavior: "smooth" });
	}, [chat]);
	return (
		<div className="flex flex-col h-full p-6 mt-12 mb-8 overflow-x-auto">
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
				{notify && (
					<div className="chat chat-start">
						<div className="chat-image avatar">
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS chat bubble component"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<div className="chat-header">
							Admin
							<time className="text-xs opacity-50">Now</time>
						</div>
						<div className="chat-bubble chat-bubble-info">{notify}</div>
						<div className="opacity-50 chat-footer">Warning</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ChatBody;
