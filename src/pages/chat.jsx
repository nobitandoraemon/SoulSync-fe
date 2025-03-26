import { useEffect, useState } from "react";
import { useScroll, Toast, ChatBox } from "../config/components";
import { cn } from "../lib/utils";
import { useOutletContext, useNavigate } from "react-router";
import { toast } from "react-toastify";
const PopUp = ({
	setAccept,
	setMatchedUser,
	isRefuse,
	setIsRefuse,
	newSocket,
	refuseMsg,
	setRefuseMsg,
}) => {
	const [counter, setCounter] = useState(60);
	useEffect(() => {
		let timer = setInterval(() => {
			setCounter((time) => {
				if (time === 0) {
					clearInterval(timer);
					handleRefuse();
					return 0;
				} else return time - 1;
			});
		}, 1000);
	}, []);
	const handleAccept = () => {
		setAccept(true);
	};
	const handleRefuse = () => {
		setIsRefuse(true);

		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};
	{
		useEffect(() => {
			newSocket.on("refuse", (data) => {
				setRefuseMsg(data);
			});
			return () => {
				newSocket.close();
			};
		}, [newSocket]);
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-2xl font-bold animate-bounce">
						Chúc mừng ! Chúng tôi đã tìm được đối cho bạn !
					</h3>
					<p className="py-4">Bạn có muốn tiếp tục hay không ?</p>
				</div>
				<div className="flex flex-col p-2 my-6 text-center bg-neutral rounded-box text-neutral-content">
					<span className="font-mono text-5xl countdown">
						<span
							style={{ "--value": counter }}
							aria-live="polite"
							aria-label={counter}
						>
							{counter}
						</span>
					</span>
					sec
				</div>
				<div className="flex items-center justify-center w-full gap-4">
					<button className="btn btn-success" onClick={handleAccept}>
						Đồng ý
					</button>
					<button className="btn btn-error" onClick={handleRefuse}>
						Không
					</button>
				</div>
			</div>
		);
	}
};
const Chat = ({ socket }) => {
	const {
		user,

		matchedUser,
		setMatchedUser,

		isMatched,
		setIsMatched,
		failMessage,
		setFailMessage,
		isFinding,
		newSocket,
		setNewSocket,
		setIsFinding,
	} = useOutletContext();

	//Check người dùng có đang cuộn trang
	const isScroll = useScroll();
	//Màn hình loading
	const [isLoading, setIsLoading] = useState(true);
	const [accept, setAccept] = useState(false);
	const [isRefuse, setIsRefuse] = useState(false);
	const [refuseMsg, setRefuseMsg] = useState(null);
	const [isLeave, setIsLeave] = useState(false);
	const navigate = useNavigate();
	const handleLoading = () => {
		if (isMatched) {
			setIsLoading(false);
		} else {
			setIsLoading(true);
		}
	};

	const handleLeave = () => {
		newSocket.emit("leave", {}); // Gửi thông tin người dùng rời phòng
		setIsLeave(true);
	};
	useEffect(() => {
		if (isFinding) {
			console.log("find");
			newSocket.emit("find", {});
			setIsFinding(false);
		}

		if (isLeave) {
			console.log("leave");
			newSocket.emit("leave", {});
			setMatchedUser(null);
			setIsLeave(false);
		}

		if (isRefuse) {
			console.log("refuse");
			newSocket.emit("refuse", {});
			setMatchedUser(null);
			setIsRefuse(false);
		}

		return () => {
			newSocket.close();
		};
	}, [newSocket, isFinding, isLeave, isRefuse]);

	//Loading 1,5s trước khi vào app
	useEffect(() => {
		if (!isFinding) {
			toast("Vui lòng yêu cầu match tại trang trước đó", {
				type: "error",
			});
			setTimeout(() => {
				navigate("/match");
			}, 1500);
		}
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
			{matchedUser &&
				(accept ? (
					<div className="flex w-screen max-w-full min-h-screen bg-base-100">
						<ChatBox
							isFinding={isFinding}
							isScroll={isScroll}
							newSocket={newSocket}
							matchedUser={matchedUser}
							handleLeave={handleLeave}
							isMatched={isMatched}
							setIsMatched={setIsMatched}
							user={user}
							refuseMsg={refuseMsg}
							setRefuseMsg={setRefuseMsg}
						/>
					</div>
				) : (
					<PopUp
						accept={accept}
						setAccept={setAccept}
						setMatchedUser={setMatchedUser}
						isRefuse={isRefuse}
						setIsRefuse={setIsRefuse}
						newSocket={newSocket}
						refuseMsg={refuseMsg}
						setRefuseMsg={setRefuseMsg}
					/>
				))}
			{!matchedUser && (
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
						{failMessage
							? `${failMessage}`
							: "Chúng tôi đang tìm kiếm nửa kia cho bạn"}
					</span>
					<span className="ml-8 loading loading-spinner text-info"></span>
				</div>
			)}
		</>
	);
};

export default Chat;
