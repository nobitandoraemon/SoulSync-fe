import { useEffect, useState } from "react";
import { useScroll, Toast, ChatBox } from "../config/components";
import { cn } from "../lib/utils";
import { useOutletContext, useNavigate } from "react-router";
const PopUp = ({
	accept,
	setAccept,
	isRefuse,
	setIsRefuse,
	setMatchedUser,
}) => {
	const navigate = useNavigate();
	const handleAccept = () => {
		setAccept(true);
	};
	const handleRefuse = () => {
		setIsRefuse(true);
		setTimeout(() => {
			navigate("/match");
		}, 2000);
	};
	return (
		<div className="flex w-screen max-w-full min-h-screen">
			<div className="flex flex-col items-center justify-center gap-8">
				<h3 className="font-bold text-lg">
					Chúc mừng ! Chúng tôi đã tìm được đối cho bạn !
				</h3>
				<p className="py-4">Bạn có muốn tiếp tục hay không ?</p>
			</div>
			<div className="w-full flex justify-center items-center gap-4">
				<button className="btn btn-outline-info" onClick={handleAccept}>
					Đồng ý
				</button>
				<button className="btn btn-outline-warning" onClick={handleRefuse}>
					Không
				</button>
			</div>
		</div>
	);
};
const Chat = ({ socket }) => {
	const {
		user,
		chat,
		setChat,
		matchedUser,
		setMatchedUser,
		// ok,
		// setOk,
		isMatched,
		setIsMatched,
		failMessage,
		setFailMessage,
		isFinding,
		newSocket,
		setNewSocket,
		setIsFinding,
		// isRefuse,
		// setIsRefuse,
		sendMessage,
	} = useOutletContext();

	//Check người dùng có đang cuộn trang
	const isScroll = useScroll();
	//Màn hình loading
	const [isLoading, setIsLoading] = useState(true);
	const [accept, setAccept] = useState(false);
	const [isLeave, setIsLeave] = useState(false);
	const handleLoading = () => {
		if (isMatched) {
			setIsLoading(false);
		} else {
			setIsLoading(true);
		}
	};

	// const handleIsMatched = () => {
	// 	setIsMatched(true);
	// };

	useEffect(() => {
		// if (ok) {
		// 	console.log("ok");
		// 	newSocket.emit("ok", {});
		// 	// user marcg
		// 	// setAccept(true);
		// 	setOk(false);
		// }

		if (isFinding) {
			console.log("find");
			newSocket.emit("find", {});
			setIsFinding(false);
		}

		// if (isRefuse) {
		// 	console.log("refuse");

		// 	newSocket.emit("refuse", {});
		// 	setMatchedUser(null);
		// 	setIsRefuse(false);
		// }

		if (isLeave) {
			console.log("leave");
			newSocket.emit("leave", {});
			setMatchedUser(null);
			setIsLeave(false);
		}

		return () => {
			newSocket.close();
		};
	}, [newSocket, isFinding, isLeave]);

	//Loading 1,5s trước khi vào app
	useEffect(() => {
		const loadingInterval = setInterval(() => {
			handleLoading();
		}, 1500);

		return () => {
			clearInterval(loadingInterval);
		};
	}, []);

	useEffect(() => {
		if (!matchedUser) {
			console.log("There's still no user to match");
		} else {
			console.log("UserMatched", matchedUser);
		}
		return () => {};
	}, [matchedUser]);

	return (
		<>
			{!accept && matchedUser ? (
				<PopUp
					// ok={ok}
					// setOk={setOk}
					accept={accept}
					setAccept={setAccept}
					// isRefuse={isRefuse}
					// setIsRefuse={setIsRefuse}
					setMatchedUser={setMatchedUser}
				/>
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
			)}
			{accept && (
				<div className="flex w-screen max-w-full min-h-screen">
					<ChatBox
						isFinding={isFinding}
						isScroll={isScroll}
						socket={socket}
						matchedUser={matchedUser}
						chat={chat}
						// ok={ok}
						// setOk={setOk}
						// setIsRefuse={setIsRefuse}
						isMatched={isMatched}
						setIsMatched={setIsMatched}
						sendMessage={sendMessage}
						user={user}
					/>
				</div>
			)}
		</>
	);
};

export default Chat;
