import { ChatBody, ChatInput, ChatHeader } from "../../../config/components";

const ChatBox = ({
	chat,
	matchedUser,
	user,
	newSocket,
	handleLeave,
	failMessage,
}) => {
	return (
		<div className="flex flex-col flex-auto w-screen h-screen md:h-full">
			<div className="z-50 items-center justify-center w-full md:relative">
				<ChatHeader
					matchedUser={matchedUser}
					user={user}
					handleLeave={handleLeave}
					failMessage={failMessage}
				/>
			</div>
			<div className="flex flex-col flex-auto flex-shrink-0 h-full min-h-screen pb-12 md:mb-0">
				<ChatBody
					newSocket={newSocket}
					user={user}
					matchedUser={matchedUser}
					chat={chat}
					handleLeave={handleLeave}
					failMessage={failMessage}
				/>
				<ChatInput
					newSocket={newSocket}
					user={user}
					matchedUser={matchedUser}
				/>
				<div className="pt-20 bg-base-100"></div>
			</div>
		</div>
	);
};

export default ChatBox;
