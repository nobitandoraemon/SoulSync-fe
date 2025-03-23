import { useEffect, useState } from "react";
import { ChatContainer, useScroll, Toast } from "../config/components";
import { cn } from "../lib/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { useOutletContext } from "react-router";

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

	// Khi người dùng chấp nhận match

	useEffect(() => {
		if (ok) {
			console.log("ok");

			socket.emit("ok", {});
			setOk(false);
		}
	}, [ok]);

	useEffect(() => {
		if (isFinding) {
			console.log("find");
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
