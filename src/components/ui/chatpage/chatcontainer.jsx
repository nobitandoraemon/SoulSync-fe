import Content from "./content";
import ChatBox from "./chatbox";

const ChatContainer = ({ content, isActive, isScroll }) => {
	return (
		<>
			<Content content={content} isActive={isActive} isScroll={isScroll} />
			<ChatBox />
		</>
	);
};

export default ChatContainer;
