import Content from "../components/ui/chatpage/content";
import SideBar from "../components/ui/chatpage/sidebar";
import { useState } from "react";
import Profile from "../components/ui/chatpage/profile";
import ChatLists from "../components/ui/chatpage/chatlists";
import { UserIcon, ChatIcon } from "../components/ui/general/icon";
import ChatBox from "../components/ui/chatpage/chatbox";

const content = [
	{
		id: 1,
		icon: <UserIcon />,
		component: <Profile />,
	},
	{
		id: 2,
		icon: <ChatIcon />,
		component: <ChatLists />,
	},
];

const Chat = () => {
	const [isActive, setActive] = useState(1);
	const toggleActive = (id) => {
		setActive(id);
	};
	return (
		<div className="w-screen h-screen flex">
			<SideBar
				content={content}
				isActive={isActive}
				toggleActive={toggleActive}
			/>
			<Content content={content} isActive={isActive} />
			<ChatBox />
		</div>
	);
};

export default Chat;
