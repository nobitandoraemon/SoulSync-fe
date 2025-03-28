import { useEffect } from "react";
import {
	ChatBody,
	ChatInput,
	ChatHeader,
	Info,
} from "../../../config/components";

const ChatBox = ({
	chat,
	matchedUser,
	user,
	newSocket,
	handleQuit,
	handleLeave,
	failMessage,
	setFailMessage,
}) => {
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
					user={user}
					handleLeave={handleLeave}
					handleQuit={handleQuit}
					failMessage={failMessage}
				/>
			</div>
			<div className="flex flex-col flex-auto flex-shrink-0 h-full min-h-screen pb-12 md:mb-0">
				<Info matchedUser={matchedUser} />
				<ChatBody
					newSocket={newSocket}
					user={user}
					matchedUser={matchedUser}
					handleLeave={handleLeave}
					failMessage={failMessage}
					setFailMessage={setFailMessage}
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
