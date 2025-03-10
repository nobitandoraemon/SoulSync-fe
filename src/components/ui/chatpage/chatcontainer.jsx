import { useEffect, useState } from "react";
import { ChatBox, Content, Waiting } from "../../../config/components";
import { io } from "socket.io-client";
import axios from "axios";
import { toast } from "react-toastify";

const API = "https://soulsync-api.onrender.com";

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

  /*const requestMatch = () => {
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
*/
  return (
    <>
      {/*
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
			*/}
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
    </>
  );
};

export default ChatContainer;
