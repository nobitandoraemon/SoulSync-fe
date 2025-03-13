import { ChatBox, Content, Waiting } from "../../../config/components";
import useAxios from "../../../hooks/useAxios";

const ChatContainer = ({
	socketIO,
	content,
	isActive,
	setActive,
	toggleActive,
	isScroll,
	user,
	matchedUser,
	requestMatch,
	chat,
	ok,
	setOk,
}) => {
	const test = () => {
		useAxios
			.get(`/users/${localStorage.getItem("username")}`)
			.then((res) => console.log(res));
	};
	return (
		<>
			{
				// Chưa có người sẽ match
				!matchedUser ? (
					<div className="max-w-[80%] mx-auto flex items-center justify-between">
						<button className="btn btn-primary" onClick={test}>
							Find a Match
						</button>
					</div>
				) : // Khi chấp nhận chat
				ok ? (
					<>
						{/* <Content
							user={user}
							content={content}
							isActive={isActive}
							isScroll={isScroll}
							requestMatch={requestMatch}
						/> */}
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
	);
};

export default ChatContainer;
