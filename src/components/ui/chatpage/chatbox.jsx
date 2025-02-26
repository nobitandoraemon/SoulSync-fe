import { useEffect, useState } from "react";

import { ChatBody, ChatInput, ChatHeader } from "../../../config/components";
import { TbZodiacLeo } from "react-icons/tb";

const ChatBox = ({ socket, user }) => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on("messageResponse", (data) => setMessages([...messages, data]));
	}, [socket, messages]);
	return (
		<div className="relative flex flex-col flex-1 p-4 bg-secondary/20">
			<ChatHeader
				user={{
					name: "Người dùng ẩn danh",
					id: 1020,
					age: 18,
					location: "Cần thơ, VN",
					zodiac: <TbZodiacLeo />,
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
