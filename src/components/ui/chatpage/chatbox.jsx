import { ChatBody, ChatInput, ChatHeader } from "../../../config/components";

const ChatBox = ({ chat, sendMessage, matchedUser, user, socket }) => {
	return (
		<div className="flex flex-col w-screen h-screen md:h-auto">
			<div className="relative z-50 items-center justify-center w-full">
				<ChatHeader matchedUser={matchedUser} user={user} />
			</div>
			<div className="relative flex flex-col flex-1 w-full p-4 mb-16 md:mb-0 bg-secondary/20">
				<ChatBody
					socket={socket}
					user={user}
					chat={chat}
					matchedUser={matchedUser}
				/>
				<ChatInput
					user={user}
					sendMessage={sendMessage}
					matchedUser={matchedUser}
					socket={socket}
				/>
			</div>
		</div>
	);
};

export default ChatBox;
