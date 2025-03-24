import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
// <<<<<<< origin/long
// import { useEffect, useLayoutEffect, useState } from "react";
// import { APP_ROUTES, API_ROUTES } from "../lib/constants";
// import axios from "axios";
// import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
// import { TbZodiacLibra } from "react-icons/tb";
// const testuser = {
//   main: true,
//   name: "Phùng Quang Anh",
//   job: "Website Developer",
//   location: "Hà Nội, VN",
//   id: "1020",
//   zodiac: 2,
//   age: 25,
//   avatar:
//     "https://media.daily.dev/image/upload/s--wzOhK88f--/f_auto/v1724228753/avatars/avatar_nyNDZ2Trf7sk4FgOodgWN",
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
//   quote: `Cause when a heart break, and it don't break even`,
// };
// const PrivateRoute = () => {
//   const token = localStorage.getItem("token");
//   const username = localStorage.getItem("username");
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     console.log("Matched User Changed");
//     console.log(matchedUser);
//   }, [matchedUser]);

//   // useEffect(() => {
//   // 	if (!token) {
//   // 		toast("You are not logged in", { type: "warning" });
//   // 		setTimeout(() => {
//   // 			navigate(APP_ROUTES.SIGN_IN);
//   // 		}, 1500);
//   // 	}
//   // }, []);

//   useLayoutEffect(() => {
//     const getUser = async () => {
//       try {
//         const res = await axios({
//           method: "GET",
//           url: API_ROUTES.GET_USER + `/${username}`,
//           headers: {
//             authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         });
//         setUser(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     if (!user) getUser();
//     console.log(user);
//   });

//   return (
//     <Outlet context={([matchedUser, setMatchedUser], [testuser, setUser])} />
//   );
// =======
import { useEffect, useState } from "react";
import { APP_ROUTES } from "../lib/constants";
import { useUser } from "../hooks/useUser";
import { getTokenFromLocalStorage } from "../lib/common";

const PrivateRoute = ({ socket }) => {
	// ============ Get user data
	const { user } = useUser();
	const navigate = useNavigate();
	const token = getTokenFromLocalStorage();
	// ============ Get user data

	// ============ Check login
	useEffect(() => {
		if (!token) {
			toast("Bạn chưa đăng nhập", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);
		}
	}, []);

	// ============ Check login

	// ============ Get user data

	// ============ Get user data

	// ======================================= Chat socket ==========================================

	// Check tab active bên sidebar

	const [username, setUsername] = useState(localStorage.getItem("username")); // Lấy user hiện tại để gửi auth cho socket
	const [chat, setChat] = useState([]); // Lấy thống tin chat : messages
	const [matchedUser, setMatchedUser] = useState(null); // Lấy thông tin người sau khi match
	const [ok, setOk] = useState(false); // Check xem người dùng có chấp nhận vào Chat hay không
	const [isMatched, setIsMatched] = useState(false); //2 người dùng cùng chấp nhận chat chưa
	const [failMessage, setFailMessage] = useState(""); //nếu be không tìm được đối tượng, hoặc đối phương từ chối, hoặc bản thân từ chối, thì server sẽ trả lại fail message để thông báo đến người còn lại
	const [isFinding, setIsFinding] = useState(false); //check xem user có đang muốn match hay không
	const [isRefuse, setIsRefuse] = useState(false); //check xem user có refuse hay không
	const [newSocket, setNewSocket] = useState(socket);
	useEffect(() => {
		//start socket, send username to socket-be
		newSocket.auth = { username };
		newSocket.connect();

		//nhận thông tin về user B sẽ match -> chuyển đến waiting room
		newSocket.on("wait", (data) => {
			if (isFinding) {
				const { A, B } = data;
				if (A.username == username) {
					setMatchedUser(B);
				} else {
					setMatchedUser(A);
				}
				console.log(matchedUser);
			}
		});

		// server gửi về match -> cả 2 đã accept -> cho Chat
		newSocket.on("match", (data) => {
			if (data.message === "Sucessfull") {
				setIsMatched(true);
			}
		});

		newSocket.on("fail", (data) => {
			const { message } = data;
			if (message) {
				setFailMessage(message);
				console.log(message);
			}
		});

		// Nhận thông tin chat từ server newSocket
		newSocket.on("message", (data) => {
			setChat((prevChat) => [...prevChat, data]);
		});

		// Kết nối newSocket
		newSocket.on("connect", () => {
			console.log("Connected to server");
		});
		// Ngắt kết nối newSocket
		newSocket.on("disconnect", () => {
			console.log("Disconnected from server");
		});

		const sendMessage = (content) => {
			newSocket.emit("chat", {
				receiver: matchedUser.username,
				content: content,
			});
		};

		return () => {
			newSocket.close();
		};
	}, [newSocket, isFinding, isMatched]);

	return (
		<Outlet
			context={{
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
				setIsFinding,
				newSocket,
				setNewSocket,
				isRefuse,
				setIsRefuse,
			}}
		/>
	);
};

export default PrivateRoute;
