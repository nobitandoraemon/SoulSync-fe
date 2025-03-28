import { useContext, useEffect, useState } from "react";
import {
	ChatBody,
	ChatInput,
	ChatHeader,
	Info,
} from "../../../config/components";
import { ThemeContext } from "../../../context/themeprovider";
import { toast } from "react-toastify";

const ChatBox = ({
	accept,
	setAccept,
	matchedUser,
	setIsMatched,
	user,
	newSocket,
	handleQuit,
	handleLeave,
	failMessage,
	setFailMessage,
	setMatchedUser,
}) => {
	const [love, setLove] = useState(null);
	const [hasNotified, setHasNotified] = useState(false);
	const { toggleTheme } = useContext(ThemeContext);
	const handleLike = () => {
		newSocket.emit("like", {});
	};

	useEffect(() => {
		newSocket.on("love", (data) => {
			if (data && !hasNotified) {
				setLove(true);
				toggleTheme("valentine");
				setHasNotified(true);
				toast("Cả hai bạn đều bấm Like", {
					position: "top-center",
					autoClose: 3000,
				});
				toast(
					"Giờ đây cả hai đều đã tiết lộ gần như toàn bộ thông tin tại thẻ cá nhân 😍",
					{
						position: "top-center",
						autoClose: 3000,
					}
				);
			}
		});
		return () => {
			newSocket.off("love");
		};
	}, [newSocket, hasNotified]);
	// Kiểm tra người dùng reload trang = disconnect
	useEffect(() => {
		window.addEventListener("beforeunload", handleQuit);
		return () => {
			window.removeEventListener("beforeunload", handleQuit);
		};
	}, []);
	return (
		<div className="flex flex-col flex-auto w-screen h-screen md:h-full">
			<div className="z-50 items-center justify-center w-full md:relative">
				<ChatHeader
					matchedUser={matchedUser}
					accept={accept}
					setAccept={setAccept}
					user={user}
					handleLeave={handleLeave}
					handleQuit={handleQuit}
					failMessage={failMessage}
					love={love}
					setLove={setLove}
					handleLike={handleLike}
				/>
			</div>
			<div className="flex flex-col flex-auto flex-shrink-0 h-full min-h-screen pb-12 md:mb-0">
				<Info
					matchedUser={matchedUser}
					love={love}
					setLove={setLove}
					handleLike={handleLike}
				/>
				<ChatBody
					newSocket={newSocket}
					setMatchedUser={setMatchedUser}
					user={user}
					accept={accept}
					setAccept={setAccept}
					setIsMatched={setIsMatched}
					matchedUser={matchedUser}
					handleLeave={handleLeave}
					failMessage={failMessage}
					setFailMessage={setFailMessage}
					love={love}
					setLove={setLove}
					handleLike={handleLike}
				/>
				<ChatInput
					newSocket={newSocket}
					user={user}
					matchedUser={matchedUser}
				/>
				<div className="pt-20 bg-base-100"></div>
			</div>
		</div>
	);
};

export default ChatBox;
