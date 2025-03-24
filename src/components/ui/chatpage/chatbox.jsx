import { ChatBody, ChatInput, ChatHeader } from "../../../config/components";

const ChatBox = ({ chat, sendMessage, matchedUser, user, newSocket }) => {
	return (
		<div className="flex flex-col w-screen h-screen md:h-full p-6 flex-auto">
			<div className="relative z-50 items-center justify-center w-full">
				<ChatHeader matchedUser={matchedUser} user={user} />
			</div>
			<div className="flex flex-col flex-auto h-full flex-shrink-0 p-4 mb-16 md:mb-0 bg-secondary/20">
				<ChatBody
					newSocket={newSocket}
					user={user}
					chat={chat}
					matchedUser={matchedUser}
				/>
				<ChatInput
					user={user}
					sendMessage={sendMessage}
					matchedUser={matchedUser}
					newSocket={newSocket}
				/>
			</div>
		</div>
	);
};

export default ChatBox;
