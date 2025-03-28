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
	handleQuit,
	refuseMsg,
	setRefuseMsg,
	failMessage,
	setFailMessage,
	setEntered,
	handleRefuse,
}) => {
	const [counter, setCounter] = useState(30);
	useEffect(() => {
		if (failMessage === "Ghép đôi thất bại!") {
			toast("Bạn hoặc người ấy đã ngắt kết nối trước 😥", {
				type: "error",
			});
		}
		let timer = setInterval(() => {
			setCounter((time) => {
				if (time === 0) {
					clearInterval(timer);
					handleRefuse();
					return 0;
				} else return time - 1;
			});
		}, 1000);
		return () => clearInterval(timer);
	}, [failMessage]);
	const handleAccept = () => {
		setAccept(true);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Toast />
			{failMessage && (
				<>
					{" "}
					<div className="flex items-center justify-center w-full h-full">
						<div className="inline-grid *:[grid-area:1/1] mr-8">
							<div
								className={cn("status animate-ping", {
									"status-info": !failMessage,
									"status-error": failMessage,
								})}
							></div>
							<div
								className={cn("status", {
									"status-info": !failMessage,
									"status-error": failMessage,
								})}
							></div>
						</div>{" "}
						<span className="text-2xl animate-pulse">
							{" "}
							{failMessage
								? failMessage
								: "Chúng tôi đang tìm kiếm nửa kia cho bạn"}
						</span>
						<span className="ml-8 loading loading-spinner text-info"></span>
					</div>
				</>
			)}
			{!failMessage && (
				<>
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
				</>
			)}
		</div>
	);
};
const Chat = ({ socket }) => {
	const { user, token, entered, setEntered } = useOutletContext();
	const navigate = useNavigate();

	//Check người dùng có đang cuộn trang
	const isScroll = useScroll();
	//Màn hình loading
	const [isLoading, setIsLoading] = useState(true);
	const handleLoading = () => {
		if (entered) {
			setIsLoading(false);
		} else {
			setIsLoading(true);
		}
	};

	//Connect socket
	const [accept, setAccept] = useState(false); // Người dùng đồng ý chat với đối phương
	const [refuseMsg, setRefuseMsg] = useState(null); // Lấy tin nhắn khi từ chối
	const [matchedUser, setMatchedUser] = useState(null); // Lấy thông tin người sau khi match
	const [isLeavingMsg, setIsLeavingMsg] = useState(null);
	const [isMatched, setIsMatched] = useState(false); //2 người dùng cùng chấp nhận chat chưa
	const [failMessage, setFailMessage] = useState(""); //nếu be không tìm được đối tượng, hoặc đối phương từ chối, hoặc bản thân từ chối, thì server sẽ trả lại fail message để thông báo đến người còn lại
	const [newSocket, setNewSocket] = useState(socket);

	// Hỏi người dùng có muốn thoát tìm kiếm
	const handleBack = () => {
		const quest = window.confirm("Bạn có chắc chắn sẽ huỷ ghép cặp ?");
		if (quest) {
			toast("Đang quay lại trang thông tin ...", { type: "info" });
			newSocket.emit("leave", {});
			setTimeout(() => {
				setEntered(false);
				setMatchedUser(null);
				handleQuit();
			}, 2000);
		} else {
			toast("Tiếp tục chờ đợi một tình yêu ...", { type: "success" });
		}
	};
	// Người dùng rời chat

	const handleQuit = () => {
		window.location.href = "/match";
	};

	const handleLeave = () => {
		const quest = window.confirm("Bạn có chắc chắn rời đi ?");

		if (quest) {
			toast("Đã kết thúc cuộc trò chuyện", {
				type: "success",
			});
			handleQuit();
		} else {
			toast("Cảm ơn vì đã lắng nghe lấy con tim", {
				role: "alert",
				type: "info",
			});
		}
	};

	const handleRefuse = () => {
		newSocket.emit("refuse", {});
		setTimeout(() => {
			setEntered(false);
			setMatchedUser(null);
			window.location.href = "/match";
		}, 3000);
	};

	//Loading 1,5s trước khi vào app
	useEffect(() => {
		if (!entered) {
			toast("Vui lòng yêu cầu match tại trang trước đó", {
				type: "error",
			});
			setTimeout(() => {
				navigate(APP_ROUTES.MATCH);
			}, 1500);
		}
		const loadingInterval = setInterval(() => {
			handleLoading();
		}, 1500);

		return () => {
			clearInterval(loadingInterval);
		};
	}, [entered]);

	useEffect(() => {
		if (!user) {
			window.location.href = "/match";
		}
		//start socket, send username to socket-be
		newSocket.auth = { username: user.username };
		newSocket.connect();

		//nhận thông tin về user B sẽ match -> chuyển đến waiting room
		newSocket.on("wait", (data) => {
			const { A, B } = data;
			if (A.username == user.username) {
				setMatchedUser(B);
			} else {
				setMatchedUser(A);
			}
			console.log(matchedUser);
		});

		// server gửi về match
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

		// Kết nối newSocket
		newSocket.on("connect", () => {
			console.log("Connected to server");
		});
		// Ngắt kết nối newSocket
		newSocket.on("disconnect", (data) => {
			if (data) {
				handleQuit();
			}
		});
		// Kiểm tra refuse
		newSocket.on("refuse", (data) => {
			setRefuseMsg(data);
		});

		if (entered) {
			newSocket.emit("find", {});
		}

		// if (failMessage === "Ghép đôi thất bại!" || isLeavingMsg) {
		if (failMessage === "Ghép đôi thất bại!") {
			toast("Bạn hoặc người ấy đã ngắt kết nối trước 😥", {
				type: "error",
			});
			newSocket.emit("leave", {});
			setFailMessage("");
			setTimeout(() => {
				setEntered(false);
				setMatchedUser(null);
			}, 3000);
		}

		if (failMessage === "Chúng tôi không tìm thấy ai phù hợp với bạn!") {
			toast("Vui lòng thử lại ...", { type: "info" });
			// setTimeout(() => {
			// 	window.location.href = "/match";
			// }, 3000);
		}
		return () => {
			newSocket.close();
		};
	}, [newSocket, entered, failMessage, isLeavingMsg]);

	// useEffect(() => {
	// 	const handlePopState = () => {
	// 		// Điều hướng đến trang /match và reload
	// 		window.location.href = "/match";
	// 	};

	// 	// Lắng nghe sự kiện popstate
	// 	window.addEventListener("popstate", handlePopState);

	// 	// Cleanup listener khi component unmount
	// 	return () => {
	// 		window.removeEventListener("popstate", handlePopState);
	// 	};
	// }, []);

	useEffect(() => {
		const handleReload = () => {
			handleQuit();
			setMatchedUser(null);
			setFailMessage("");
		};
		window.addEventListener("beforeunload", handleReload);
		return () => {
			window.removeEventListener("beforeunload", handleQuit);
		};
	}, []);
	return (
		<>
			{matchedUser &&
				(accept ? (
					<div className="flex w-screen max-w-full min-h-screen bg-base-100">
						<ChatBox
							isScroll={isScroll}
							newSocket={newSocket}
							matchedUser={matchedUser}
							handleQuit={handleQuit}
							handleLeave={handleLeave}
							isMatched={isMatched}
							isLeavingMsg={isLeavingMsg}
							setIsLeavingMsg={setIsLeavingMsg}
							setIsMatched={setIsMatched}
							user={user}
							failMessage={failMessage}
							setFailMessage={setFailMessage}
						/>
					</div>
				) : (
					<>
						<PopUp
							accept={accept}
							setAccept={setAccept}
							setMatchedUser={setMatchedUser}
							newSocket={newSocket}
							refuseMsg={refuseMsg}
							setRefuseMsg={setRefuseMsg}
							handleQuit={handleQuit}
							failMessage={failMessage}
							setEntered={setEntered}
							handleRefuse={handleRefuse}
						/>
						{failMessage === "Chúng tôi không tìm thấy ai phù hợp với bạn!" && (
							<div className="fixed flex items-center justify-center w-full bottom-1/3">
								<button className="btn btn-wide btn-error" onClick={handleBack}>
									Thử lại{" "}
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
						)}
					</>
				))}
			{!matchedUser && (
				<>
					<div className="flex items-center justify-center w-screen h-screen">
						<Toast />
						<div className="inline-grid *:[grid-area:1/1] mr-8">
							<div
								className={cn("status animate-ping", {
									"status-info": !failMessage,
									"status-error": failMessage,
								})}
							></div>
							<div
								className={cn("status", {
									"status-info": !failMessage,
									"status-error": failMessage,
								})}
							></div>
						</div>{" "}
						<span className="text-2xl animate-pulse">
							{" "}
							{failMessage ? (
								failMessage ===
								"Chúng tôi không tìm thấy ai phù hợp với bạn!" ? (
									<>
										<p className="flex flex-col items-center justify-center">
											{" "}
											<span>Chúng tôi chưa tìm thấy ai phù hợp ...</span>
											<span className="animate-ease">
												Vui lòng chờ đợi thêm
											</span>
										</p>
									</>
								) : (
									failMessage
								)
							) : (
								"Chúng tôi đang tìm kiếm nửa kia cho bạn"
							)}
						</span>
						<span className="ml-8 loading loading-spinner text-info"></span>
						{!failMessage && (
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
						)}
					</div>
				</>
			)}
		</>
	);
};

export default Chat;
