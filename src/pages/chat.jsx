import Content from "../components/ui/chatpage/content";
import SideBar from "../components/ui/chatpage/sidebar";
import { useState } from "react";
import Profile from "../components/ui/chatpage/profile";
import { UserIcon, InfoIcon } from "../components/ui/general/icon";
import ChatBox from "../components/ui/chatpage/chatbox";
import Info from "../components/ui/chatpage/info";

const content = [
	{
		id: 1,
		icon: <UserIcon />,
		component: <Profile />,
	},

	{
		id: 2,
		icon: <InfoIcon />,
		component: <Info />,
	},
];

const Chat = () => {
	const [isActive, setActive] = useState(1);
	const toggleActive = (id) => {
		setActive(id);
	};
	return (
		<div className="w-screen flex min-h-screen">
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
