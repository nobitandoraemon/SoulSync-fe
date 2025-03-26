import { useEffect, useRef, useState } from "react";
const ChatBody = ({ newSocket, user, matchedUser, handleLeave }) => {
	const [chat, setChat] = useState([]);
	const [notify, setNotify] = useState(null);
	const lastMessage = useRef(null);
	const handleOut = () => {
		handleLeave();
		setTimeout(() => {
			window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
			window.location.reload();
		}, 2000);
	};
	// Xử lí nhận tin nhắn
	const handleMessage = (data) => {
		setChat((prevChat) => [...prevChat, data]);
	};

	// Nhận thông tin chat từ server socket

	useEffect(() => {
		newSocket.on("message", handleMessage);

		return () => {
			newSocket.off("message");
		};
	}, [newSocket]);

	useEffect(() => {
		newSocket.on("end", (data) => {
			console.log(data.message);
			setNotify(data.message);
		});
		return () => {
			newSocket.off("end");
		};
	}, [newSocket]);

	useEffect(() => {
		lastMessage.current?.scrollIntoView({ behavior: "smooth" });
	}, [chat]);
	return (
		<div className="flex flex-col h-full min-h-screen px-6 overflow-x-auto pt-36 md:pt-40 bg-base-100">
			<div className="flex flex-col h-full pb-36">
				<div className="chat chat-start" key="defaultMsg">
					<button className="chat-image avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Admin"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</button>
					<div className="chat-header">
						Admin
						<time className="text-xs opacity-50">Now</time>
					</div>
					<div className="chat-bubble chat-bubble-warning">
						Vui lòng xin chờ trong giây lát cho đến khi nửa kia kết nối thành
						công 😁 ...
					</div>
					<div className="opacity-50 chat-footer">Warning</div>
				</div>
				{chat.map((message) => {
					const isMainUser = message.sender === user.username ? true : false;
					return (
						<>
							<li
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
								<div
									className={`chat-bubble ${
										isMainUser ? "chat-bubble-success" : "chat-bubble-info"
									}`}
								>
									{message.content}
								</div>
								<div className="opacity-50 chat-footer">Delivered</div>
							</li>
							<div ref={lastMessage}></div>
						</>
					);
				})}
				{notify && (
					<>
						<div className="chat chat-start" key="warningMsg">
							<div className="chat-image avatar">
								<div className="w-10 rounded-full">
									<img
										alt="Admin"
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									/>
								</div>
							</div>
							<div className="chat-header">
								Admin
								<time className="text-xs opacity-50">Now</time>
							</div>
							<div className="chat-bubble chat-bubble-warning">
								Nửa kia đã rời đi trong tĩnh lặng ...
							</div>
							<div className="opacity-50 chat-footer">Sad</div>
						</div>

						<button
							className="btn btn-soft btn-md btn-accent"
							onClick={handleOut}
						>
							Nhấn vào đây để quay lại
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default ChatBody;
