import { ChatBody, ChatInput, ChatHeader } from "../../../config/components";
import { TbZodiacLeo } from "react-icons/tb";

const ChatBox = ({ chat, sendMessage, matchedUser, user }) => {
	return (
		<div className="flex flex-col flex-1">
			<div className="relative z-50 items-center justify-center w-full">
				<ChatHeader user={user} />
			</div>
			<div className="relative flex flex-col flex-1 w-full p-4 mb-16 md:mb-0 bg-secondary/20">
				<ChatBody user={user} chat={chat} matchedUser={matchedUser} />
				<ChatInput
					user={user}
					sendMessage={sendMessage}
					matchedUser={matchedUser}
				/>
			</div>
		</div>
	);
};

export default ChatBox;
