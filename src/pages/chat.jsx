import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbZodiacLibra, TbZodiacLeo } from "react-icons/tb";
import {
	UserIcon,
	InfoIcon,
	SettingIcon,
	ChatIcon,
} from "../components/ui/general/icon";
import Profile from "../components/ui/chatpage/profile";
import Info from "../components/ui/chatpage/info";
import Setting from "../components/ui/chatpage/setting";
import {
	SideBar,
	ChatContainer,
	useScroll,
	Toast,
	ChatHeader,
} from "../config/components";
import logo from "../image/12_zodiac.svg";

import { io } from "socket.io-client";
import axios from "axios";
import { toast } from "react-toastify";

const API = "https://soulsync-api.onrender.com";
import Waiting from "../components/ui/chatpage/waiting";
import ZodiacInfo from "../components/ui/zodiacinfo";
import { zodiacInfo } from "../lib/data";
const otherUser = {
	name: "Người dùng ẩn danh",
	id: 1021,
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

const sideBarItems = [
	{
		id: 1,
		icon: ChatIcon,
	},
	{
		id: 2,
		icon: InfoIcon,
	},
	{
		id: 3,
		icon: SettingIcon,
	},
];

const content = {
	other: <Info user={otherUser} />,
	mine: <Info user={user} />,
};
const Chat = ({ socket }) => {
	// Check tab active bên sidebar
	const [isActive, setActive] = useState(3);
	const toggleActive = (id) => {
		setActive(id);
	};
	//Check người dùng có đang cuộn trang
	const isScroll = useScroll();
	//Màn hình loading
	const [isLoading, setIsLoading] = useState(true);
	const handleLoading = () => {
		setIsLoading(false);
	};

	//Loading 1,5s trước khi vào app
	useEffect(() => {
		setInterval(() => {
			handleLoading();
		}, 1500);
		return () => {
			clearInterval(handleLoading);
		};
	}, []);

	const [username, setUsername] = useState(localStorage.getItem("username")); // Lấy user hiện tại để gửi auth cho socket
	const [chat, setChat] = useState([]); // Lấy thống tin chat : messages
	const [socketIO, setSocketIO] = useState(socket); // Lấy thống tin socket
	const [match, setMatch] = useState(null); // Lấy thông tin người sẽ match
	const [matchedUser, setMatchedUser] = useState(null); // Lấy thông tin người sau khi match
	const [ok, setOk] = useState(false); // Check xem người dùng có chấp nhận vào Chat hay không
	useEffect(() => {
		// Khởi tạo socket, gửi auth cho socket
		const newSocket = io("https://soulsync-api.onrender.com", {
			auth: { username: username },
		});
		setSocketIO(newSocket);
		// Kết nối socket
		newSocket.on("connect", () => {
			console.log("Connected to server");
		});
		// Đẩy 2 người dùng vào phòng chat
		newSocket.on("match", (data) => {
			if (data.B) setMatchedUser(data.B); // Assuming data.B is the matched user's username
			console.log(`Matched with ${data.B}`);
			/// Logic ///
		});
		// Nhận thông tin chat từ server socket
		newSocket.on("message", (data) => {
			setChat((prevChat) => [...prevChat, data]);
		});
		// Ngắt kết nối socket
		newSocket.on("disconnect", () => {
			console.log("Disconnected from server");
		});
		// Khi người dùng chấp nhận match
		if (ok) {
			newSocket.emit("ok", { username: match });
		}

		return () => newSocket.close();
	}, [username, ok]);

	const requestMatch = () => {
		// Gửi yêu cầu matching -> Nhận thống tin người sẽ match
		axios
			.post(`${API}/match`, { username })
			.then((res) => {
				toast("Request successfully", { type: "success" });
				console.log(res);
				// setTimeout(() => {
				// 	setMatch(res.data.username);
				// }, 2000);
			})
			.catch((err) => {
				toast("Request failed", { type: "error" });
				console.log(err);
			});
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		} else {
			delete axios.defaults.headers.common["Authorization"];
		}
	}, []);

	return !isLoading ? (
		<div className="flex w-screen max-w-full min-h-screen">
			<SideBar
				content={sideBarItems}
				isActive={isActive}
				toggleActive={toggleActive}
				isScroll={isScroll}
				user={user}
			/>
			{isActive === 1 && (
				<ChatContainer
					content={content}
					isActive={isActive}
					setActive={setActive}
					isScroll={isScroll}
					socket={socket}
					user={user}
					matchedUser={matchedUser}
					requestMatch={requestMatch}
					chat={chat}
					ok={ok}
					setOk={setOk}
				/>
			)}
			{isActive === 2 && (
				<ZodiacInfo
					zodiac={zodiacInfo[0]}
					user={user}
					event={() => {
						setOk(true);
						toggleActive(1);
					}}
					requestMatch={requestMatch}
				/>
			)}
			{isActive === 3 && <Setting user={user} isScroll={isScroll} />}
		</div>
	) : (
		<div className="flex items-center justify-center w-screen h-screen">
			<Toast />
			<span className=" loading loading-spinner text-primary"></span>
		</div>
	);
};

export default Chat;
