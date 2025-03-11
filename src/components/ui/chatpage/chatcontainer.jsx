import { useEffect, useState } from "react";
import { ChatBox, Content, Waiting } from "../../../config/components";
import { io } from "socket.io-client";
import axios from "axios";
import { toast } from "react-toastify";
import { TbZodiacLibra, TbZodiacLeo } from "react-icons/tb";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
const API = "https://soulsync-api.onrender.com";

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

const ChatContainer = ({ socket, content, isActive, isScroll, user }) => {
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
      socketIO.emit("ok", { username: match });
    }

    return () => newSocket.close();
  }, [username]);

  const requestMatch = () => {
    // Gửi yêu cầu matching -> Nhận thống tin người sẽ match
    axios
      .post(`${API}/match`, { username })
      .then((res) => {
        toast("Request successfully", { type: "success" });
        setTimeout(() => {
          setMatch(res.data.username);
        }, 2000);
      })
      .catch((err) => {
        toast("Request failed", { type: "error" });
        console.log(err);
      });
  };

  /*return (
    <>
      {
        // Chưa có người sẽ match
        !matchedUser ? (
          <div className="max-w-[80%] mx-auto flex items-center justify-between">
            <button className="btn btn-primary" onClick={requestMatch}>
              Find a Match
            </button>
          </div>
        ) : // Khi chấp nhận chat
        ok ? (
          <>
            <Content
              user={user}
              content={content}
              isActive={isActive}
              isScroll={isScroll}
            />
            <ChatBox
              chat={chat}
              user={user}
              socketIO={socketIO}
              matchedUser={matchedUser}
            />
          </>
        ) : (
          //Vào phòng đợi, yêu cầu chấp nhận khi được hỏi
          <Waiting ok={ok} setOk={setOk} requestMatch={requestMatch} />
        )
      }
    </>
  );*/
  return (
    <>
      <ChatBox
        chat={chat}
        user={user}
        socketIO={socketIO}
        matchedUser={otherUser}
        content={content}
      />
    </>
  );
};

export default ChatContainer;
