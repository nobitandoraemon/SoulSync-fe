import ChatBody from "./chatbody";
import ChatInput from "./chatinput";
import Header from "./header";

const ChatBox = () => {
	return (
		<div className="p-4 bg-secondary/20 flex-1 relative flex flex-col">
			<Header />
			<ChatBody />
			<ChatInput />
		</div>
	);
};

export default ChatBox;
