import { ChatBody, ChatInput, ChatHeader } from "../../../config/components";
import { TbZodiacLeo } from "react-icons/tb";

const ChatBox = ({ chat, sendMessage, matchedUser }) => {
	return (
		<div className="flex flex-col flex-1">
			<div className="relative z-50 items-center justify-center w-full">
				<ChatHeader
					user={{
						name: "Người dùng ẩn danh",
						id: 1021,
						age: 18,
						location: "Cần thơ, VN",
						zodiac: <TbZodiacLeo />,
						avatar:
							"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
					}}
				/>
			</div>
			<div className="relative flex flex-col flex-1 w-full p-4 mb-16 md:mb-0 bg-secondary/20">
				<ChatBody chat={chat} matchedUser={matchedUser} />
				<ChatInput sendMessage={sendMessage} matchedUser={matchedUser} />
			</div>
		</div>
	);
};

export default ChatBox;
