import { useEffect, useState } from "react";
// <<<<<<< origin/long
// import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
// import { TbZodiacLibra, TbZodiacLeo } from "react-icons/tb";
// import {
//   UserIcon,
//   InfoIcon,
//   SettingIcon,
//   ChatIcon,
// } from "../components/ui/general/icon";
// import Profile from "../components/ui/chatpage/profile";
// import Info from "../components/ui/chatpage/info";
// import Setting from "../components/ui/chatpage/setting";
// import {
//   SideBar,
//   ChatContainer,
//   useScroll,
//   Toast,
//   ChatHeader,
// } from "../config/components";
// import logo from "../assets/12_zodiac.svg";

// import { io } from "socket.io-client";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Waiting from "../components/ui/chatpage/waiting";
// import ZodiacInfo from "../components/ui/zodiacinfo";
// import { zodiacInfo } from "../lib/data";
// import { API_ROUTES } from "../lib/constants";
// import { getTokenFromLocalStorage } from "../lib/common";
// import { useUser } from "../hooks/useUser";
// import { Navigate, useNavigate, useOutletContext } from "react-router";
// const otherUser = {
//   name: "Người dùng ẩn danh",
//   id: 1021,
//   age: 18,
//   location: "Cần thơ, VN",
//   zodiac: <TbZodiacLeo />,
//   avatar:
//     "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
//   social: [
//     {
//       icon: <FaFacebookF />,
//       href: "https://fb.me/1020phug",
//     },
//     {
//       icon: <FaGithub />,
//       href: "https://github.com/1020phug",
//     },
//     {
//       icon: <FaInstagram />,
//       href: "https://instagram.com/1020phug",
//     },
//   ],
//   quote: `I see tears in your eyes, I feel helpless inside`,
// };
// =======
import { ChatContainer, useScroll, Toast } from "../config/components";
import { cn } from "../lib/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { useOutletContext } from "react-router";
// >>>>>>> main

const Chat = ({ socket }) => {
	const {
		user,
		chat,
		setChat,
		matchedUser,
		setMatchedUser,
		ok,
		setOk,
		isMatched,
		setIsMatched,
		failMessage,
		setFailMessage,
		isFinding,
		toggleFinding,
		isRefuse,
		setIsRefuse,
		sendMessage,
	} = useOutletContext();

	//Check người dùng có đang cuộn trang
	const isScroll = useScroll();
	//Màn hình loading
	const [isLoading, setIsLoading] = useState(true);
	const handleLoading = () => {
		if (isMatched) {
			setIsLoading(false);
		} else {
			setIsLoading(true);
		}
	};

// <<<<<<< origin/long
// const content = {
//   other: <Info user={otherUser} />,
//   mine: <Info user={user} />,
// };
// const Chat = ({ socket }) => {
//   // Check tab active bên sidebar
//   const [isActive, setActive] = useState(1);
//   const toggleActive = (id) => {
//     setActive(id);
//   };
//   //Check người dùng có đang cuộn trang
//   const isScroll = useScroll();
//   //Màn hình loading
//   const [isLoading, setIsLoading] = useState(true);
//   const handleLoading = () => {
//     setIsLoading(false);
//   };
//   //Loading 1,5s trước khi vào app
//   useEffect(() => {
//     const loadingInterval = setInterval(() => {
//       handleLoading();
//     }, 1500);
// =======
	// Khi người dùng chấp nhận match
// >>>>>>> main

	useEffect(() => {
		if (ok) {
			console.log("ok");

// <<<<<<< origin/long
//   const [username, setUsername] = useState(localStorage.getItem("username")); // Lấy user hiện tại để gửi auth cho socket
//   const [chat, setChat] = useState([]); // Lấy thống tin chat : messages
//   const [socketIO, setSocketIO] = useState(socket); // Lấy thống tin socket
//   const [ok, setOk] = useState(false); // Check xem người dùng có chấp nhận vào Chat hay không
//   const [matchedUser, setMatchedUser] = useOutletContext();
//   useEffect(() => {
//     // Khởi tạo socket, gửi auth cho socket
//     const newSocket = io("https://soulsync-api.onrender.com", {
//       auth: { username: username },
//     });
//     setSocketIO(newSocket);
//     // Kết nối socket
//     newSocket.on("connect", () => {
//       console.log("Connected to server");
//     });
//     // Đẩy 2 người dùng vào phòng chat
//     newSocket.on("match", (data) => {
//       if (data.B) setMatchedUser(data.B); // Assuming data.B is the matched user's username
//       console.log(`Matched with ${data.B}`);
//       /// Logic ///
//     });
//     // Nhận thông tin chat từ server socket
//     newSocket.on("message", (data) => {
//       setChat((prevChat) => [...prevChat, data]);
//     });
// =======
// 			socket.emit("ok", {});
// 			setOk(false);
// 		}
// 	}, [ok]);
// >>>>>>> main

	useEffect(() => {
		if (isFinding) {
			console.log("find");

// <<<<<<< origin/long
//     return () => newSocket.close();
//   }, [username, ok]);
//   ///CHeck
//   useEffect(() => {
//     console.log("Matched User Changed");
//     console.log(matchedUser);
//   }, [matchedUser]);
//   ////
//   return !isLoading ? (
//     <div className="flex w-screen max-w-full min-h-screen">
//       {isActive === 1 && (
//         <ChatContainer
//           content={content}
//           isActive={isActive}
//           setActive={setActive}
//           isScroll={isScroll}
//           socket={socket}
//           user={user}
//           matchedUser={matchedUser}
//           chat={chat}
//           ok={ok}
//           setOk={setOk}
//         />
//       )}
//     </div>
//   ) : (
//     <div className="flex items-center justify-center w-screen h-screen">
//       <Toast />
//       <span className=" loading loading-spinner text-primary"></span>
//     </div>
//   );
// };
// =======
			socket.emit("find", {});
			toggleFinding();
		}
	}, [isFinding]);

	useEffect(() => {
		if (isRefuse) {
			console.log("refuse");

			socket.emit("refuse", {});
			setIsRefuse(false);
		}
	}, [isRefuse]);

	//Loading 1,5s trước khi vào app
	useEffect(() => {
		const loadingInterval = setInterval(() => {
			handleLoading();
		}, 1500);

		return () => {
			clearInterval(loadingInterval);
		};
	}, []);
// >>>>>>> main

	useEffect(() => {
		if (!matchedUser) {
			console.log("There's still no user to match");
		} else {
			console.log("UserMatched", matchedUser);
		}
		return () => {};
	}, [matchedUser]);

	return isMatched ? (
		<div className="flex w-screen max-w-full min-h-screen">
			<ChatContainer
				isFinding={isFinding}
				toggleFinding={toggleFinding}
				isScroll={isScroll}
				socket={socket}
				matchedUser={matchedUser}
				chat={chat}
				ok={ok}
				setOk={setOk}
				setIsRefuse={setIsRefuse}
				isMatched={isMatched}
				setIsMatched={setIsMatched}
				sendMessage={sendMessage}
				user={user}
			/>
		</div>
	) : (
		<div className="flex items-center justify-center w-screen h-screen">
			<Toast />
			<div className="inline-grid *:[grid-area:1/1] mr-8">
				<div
					className={cn("status animate-ping", {
						"status-info": isFinding,
						"status-error": !isFinding,
					})}
				></div>
				<div
					className={cn("status", {
						"status-info": isFinding,
						"status-error": !isFinding,
					})}
				></div>
			</div>{" "}
			<span className="text-2xl animate-pulse">
				{" "}
				{failMessage ? `${failMessage}` : "We're finding you a match"}
			</span>
			<span className="ml-8 loading loading-spinner text-info"></span>
		</div>
	);
};

export default Chat;
