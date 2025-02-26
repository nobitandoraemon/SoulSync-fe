import { ChatBox, Content } from "../../../config/components";

const ChatContainer = ({ socket, content, isActive, isScroll, user }) => {
	return (
		<>
			<Content
				user={user}
				content={content}
				isActive={isActive}
				isScroll={isScroll}
			/>
			<ChatBox socket={socket} user={user} />
		</>
	);
};

export default ChatContainer;
