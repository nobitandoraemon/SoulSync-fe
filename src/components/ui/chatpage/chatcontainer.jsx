import { useEffect } from "react";
import { ChatBox } from "../../../config/components";
const ChatContainer = ({
	isFinding,
	toggleFinding,
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
	user,
}) => {
	useEffect(() => {
		if (matchedUser) {
			console.log("Found!");
		}
	}, [matchedUser]);
	return (
		<>
			{matchedUser && (
				<>
					<ChatBox
						chat={chat}
						matchedUser={matchedUser}
						sendMessage={sendMessage}
						user={user}
						toggleFinding={toggleFinding}
					/>
				</>
			)}
		</>
	);
};

export default ChatContainer;
