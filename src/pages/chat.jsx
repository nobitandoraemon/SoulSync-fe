import SideBar from "../components/ui/chatpage/sidebar";
import { useState } from "react";
import Profile from "../components/ui/chatpage/profile";
import { UserIcon, InfoIcon, SettingIcon } from "../components/ui/general/icon";
import Info from "../components/ui/chatpage/info";
import { useScroll } from "../hooks/useScroll";
import ChatContainer from "../components/ui/chatpage/chatcontainer";
import Setting from "../components/ui/chatpage/setting";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbZodiacLibra } from "react-icons/tb";

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
	{
		id: 3,
		icon: <SettingIcon />,
		component: <Setting />,
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
			/>
			{(isActive === 1 || isActive === 2) && (
				<ChatContainer
					content={content}
					isActive={isActive}
					isScroll={isScroll}
					socket={socket}
				/>
			)}
			{isActive === 3 && (
				<Setting
					user={{
						main: true,
						name: "Phùng Quang Anh",
						job: "Website Developer",
						location: "Hà Nội, VN",
						id: "1020",
						zodiac: <TbZodiacLibra />,
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
						quote: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
					}}
					isScroll={isScroll}
				/>
			)}
		</div>
	);
};

export default Chat;
