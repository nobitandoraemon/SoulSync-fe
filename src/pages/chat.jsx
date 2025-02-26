import { useState } from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbZodiacLibra, TbZodiacLeo } from "react-icons/tb";
import { UserIcon, InfoIcon, SettingIcon } from "../components/ui/general/icon";
import Profile from "../components/ui/chatpage/profile";
import Info from "../components/ui/chatpage/info";
import Setting from "../components/ui/chatpage/setting";
import { SideBar, ChatContainer, useScroll } from "../config/components";
import { div } from "motion/react-client";

const otherUser = {
	name: "Người dùng ẩn danh",
	id: 1020,
	age: 18,
	location: "Cần thơ, VN",
	zodiac: <TbZodiacLeo />,
	avatar:
		"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
	social: [
		{
			icon: <FaFacebookF />,
			href: "https://fb.me/1020phug",
		},
		{
			icon: <FaGithub />,
			href: "https://github.com/1020phug",
		},
		{
			icon: <FaInstagram />,
			href: "https://instagram.com/1020phug",
		},
	],
	quote: `I see tears in your eyes, I feel helpless inside`,
};

const user = {
	main: true,
	name: "Phùng Quang Anh",
	job: "Website Developer",
	location: "Hà Nội, VN",
	id: "1020",
	zodiac: <TbZodiacLibra />,
	age: 25,
	avatar:
		"https://media.daily.dev/image/upload/s--wzOhK88f--/f_auto/v1724228753/avatars/avatar_nyNDZ2Trf7sk4FgOodgWN",
	social: [
		{
			icon: <FaFacebookF />,
			href: "https://fb.me/1020phug",
		},
		{
			icon: <FaGithub />,
			href: "https://github.com/1020phug",
		},
		{
			icon: <FaInstagram />,
			href: "https://instagram.com/1020phug",
		},
	],
	quote: `Cause when a heart break, and it don't break even`,
};

const content = [
	{
		id: 1,
		icon: <UserIcon />,
		component: <Profile user={user} />,
	},

	{
		id: 2,
		icon: <InfoIcon />,
		component: <Info user={otherUser} />,
	},
	{
		id: 3,
		icon: <SettingIcon />,
		component: <Setting user={user} />,
	},
];

const Chat = ({ socket }) => {
	const [isActive, setActive] = useState(3);
	const toggleActive = (id) => {
		setActive(id);
	};
	const isScroll = useScroll();
	return (
		<div className="flex w-screen max-w-full min-h-screen">
			<SideBar
				content={content}
				isActive={isActive}
				toggleActive={toggleActive}
				isScroll={isScroll}
				user={user}
			/>
			{(isActive === 1 || isActive === 2) && (
				<ChatContainer
					content={content}
					isActive={isActive}
					isScroll={isScroll}
					socket={socket}
					user={user}
				/>
			)}
			{isActive === 3 && <Setting user={user} isScroll={isScroll} />}
		</div>
	);
};

export default Chat;
