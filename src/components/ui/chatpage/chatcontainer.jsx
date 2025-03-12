import { useEffect, useState } from "react";
import { ChatBox, Content, Waiting } from "../../../config/components";

const ChatContainer = ({
	socketIO,
	content,
	isActive,
	isScroll,
	user,
	matchedUser,
	requestMatch,
	chat,
	ok,
	setOk,
}) => {
	return (
		<>
			{
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
			}
		</>
	);
};

export default ChatContainer;
