import { useEffect, useState } from "react";
import { ChatContainer, useScroll, Toast } from "../config/components";

import axios from "axios";
import { toast } from "react-toastify";
import { useOutletContext } from "react-router";

const Chat = ({ socket }) => {
	const [
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
		isRefuse,
		setIsRefuse,
		sendMessage,
	] = useOutletContext();

	//Check người dùng có đang cuộn trang
	const isScroll = useScroll();
	//Màn hình loading
	const [isLoading, setIsLoading] = useState(true);
	const handleLoading = () => {
		setIsLoading(false);
	};

	// Khi người dùng chấp nhận match

	useEffect(() => {
		if (ok) {
			console.log("ok");

			socket.emit("ok", {});
			setOk(false);
		}
	}, [ok, setOk]);

	useEffect(() => {
		if (isFinding) {
			console.log("find");

			socket.emit("find", {});
			setIsFinding(false);
		}
	}, [isFinding, setIsFinding]);

	useEffect(() => {
		if (isRefuse) {
			console.log("refuse");

			socket.emit("refuse", {});
			setIsRefuse(false);
		}
	}, [isRefuse, setIsRefuse]);

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

	return !isLoading ? (
		<div className="flex w-screen max-w-full min-h-screen">
			<ChatContainer
				isFinding={isFinding}
				setIsFinding={setIsFinding}
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
			<span className=" loading loading-spinner text-primary"></span>
		</div>
	);
};

export default Chat;
