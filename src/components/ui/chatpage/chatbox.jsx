import { useEffect, useState } from "react";
import ChatBody from "./chatbody";
import ChatInput from "./chatinput";
import Header from "./header";

const ChatBox = ({ socket }) => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on("messageResponse", (data) => setMessages([...messages, data]));
	}, [socket, messages]);
	return (
		<div className="relative flex flex-col flex-1 p-4 bg-secondary/20">
			<Header
				user={{
					name: "Người dùng ẩn danh",
					id: "1020",
					avatar:
						"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
				}}
				isLoggin={true}
			/>
			<ChatBody messages={messages} />
			<ChatInput socket={socket} />
		</div>
	);
};

export default ChatBox;
