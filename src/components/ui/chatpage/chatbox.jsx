import ChatBody from "./chatbody";
import ChatInput from "./chatinput";
import Header from "./header";

const ChatBox = () => {
	return (
		<div className="p-4 bg-secondary/20 flex-1 relative flex flex-col">
			<Header
				user={{
					name: "Người dùng ẩn danh",
					id: "1020",
					avatar:
						"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
				}}
				isLoggin={true}
			/>
			<ChatBody />
			<ChatInput />
		</div>
	);
};

export default ChatBox;
