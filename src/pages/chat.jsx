import { useEffect, useState } from "react";
import { useScroll, Toast, ChatBox } from "../config/components";
import { cn } from "../lib/utils";
import { useOutletContext, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../lib/constants";
const PopUp = ({
	setAccept,
	setMatchedUser,
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
		newSocket.emit("refuse", {});
		setMatchedUser(null);
	};

	useEffect(() => {
		newSocket.on("refuse", (data) => {
			setRefuseMsg(data);
		});
		return () => {
			newSocket.off("refuse");
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

	const handleBack = (e) => {
		const quest = window.confirm("Bạn có chắc chắn sẽ huỷ ghép cặp ?");
		if (quest) {
			toast("Đang quay lại trang thông tin ...", { type: "info" });
			setTimeout(() => {
				navigate(APP_ROUTES.MATCH);
			}, 2000);
		} else {
			toast("Tiếp tục chờ đợi một tình yêu ...", { type: "success" });
		}
	};

	const handleLeave = () => {
		newSocket.emit("leave", {});
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
		newSocket.on("refuse", (data) => {
			setRefuseMsg(data);
		});
		if (failMessage === "Fail to match!") {
			toast("Bạn hoặc người ấy đã ngắt kết nối trước 😥", { type: "error" });
			setTimeout(() => {
				newSocket.emit("refuse", {});
				handleLeave();
				setMatchedUser(null);
				window.location.reload();
			}, 3000);
		}

		return () => {
			newSocket.close();
		};
	}, [newSocket, isFinding, isLeave, failMessage]);

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
			console.log("UserMatched");
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
							failMessage={failMessage}
						/>
					</div>
				) : (
					<PopUp
						accept={accept}
						setAccept={setAccept}
						setMatchedUser={setMatchedUser}
						newSocket={newSocket}
						refuseMsg={refuseMsg}
						setRefuseMsg={setRefuseMsg}
					/>
				))}
			{!matchedUser && (
				<>
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
								? "Chờ đợi là hạnh phúc! Chúng tôi vẫn đang cố gắng ..."
								: "Chúng tôi đang tìm kiếm nửa kia cho bạn"}
						</span>
						<span className="ml-8 loading loading-spinner text-info"></span>
					</div>
					<div className="fixed flex items-center justify-center w-full bottom-1/3">
						<button className="btn btn-wide btn-error" onClick={handleBack}>
							Quay lại{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
								/>
							</svg>
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default Chat;
