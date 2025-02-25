import Content from "./content";
import ChatBox from "./chatbox";

const ChatContainer = ({ socket, content, isActive, isScroll }) => {
	return (
		<>
			<Content content={content} isActive={isActive} isScroll={isScroll} />
			<ChatBox socket={socket} />
		</>
	);
};

export default ChatContainer;
