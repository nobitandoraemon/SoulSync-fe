import { ChatBox } from "../../../config/components";

const ChatContainer = ({
	isFinding,
	setIsFinding,
	content,
	isScroll,
	socket,
	matchedUser,
	chat,
	ok,
	setOk,
	setIsRefuse,
	isMatched,
	setIsMatched,
	sendMessage,
}) => {
	return (
		<>
			{isMatched && (
				<>
					<ChatBox
						chat={chat}
						matchedUser={matchedUser}
						sendMessage={sendMessage}
					/>
				</>
			)}
		</>
	);
};

export default ChatContainer;
