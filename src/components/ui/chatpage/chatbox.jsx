import { ChatBody, ChatInput, ChatHeader } from "../../../config/components";

const ChatBox = ({ chat, matchedUser, user, newSocket, handleLeave }) => {
	return (
		<div className="flex flex-col flex-auto w-screen h-screen md:h-full">
			<div className="relative z-50 items-center justify-center w-full">
				<ChatHeader
					matchedUser={matchedUser}
					user={user}
					handleLeave={handleLeave}
				/>
			</div>
			<div className="flex flex-col flex-auto flex-shrink-0 h-full min-h-screen md:mb-0">
				<ChatBody
					newSocket={newSocket}
					user={user}
					matchedUser={matchedUser}
					chat={chat}
					handleLeave={handleLeave}
				/>
				<ChatInput
					newSocket={newSocket}
					user={user}
					matchedUser={matchedUser}
				/>
			</div>
		</div>
	);
};

export default ChatBox;
