const ChatBody = ({ chat }) => {
	console.log(chat);
	return (
		<div className="flex-1 p-4 mt-20 mb-8">
			<div className="flex flex-col justify-end h-full">
				{chat.map((message) => {
					const isMainUser =
						message.receiver.username === localStorage.getItem("username");
					return (
						<div
							key={message.id}
							className={`chat ${isMainUser ? "chat-end" : "chat-start"}`}
						>
							<div className="chat-image avatar">
								<div className="w-10 rounded-full">
									<img alt="User Avatar" src={message.receiver.avatar} />
								</div>
							</div>
							<div className="chat-header">
								{isMainUser
									? "Bạn"
									: `Người dùng ẩn danh #${message.receiver._id}`}
								<time className="text-xs opacity-50">{message.createTime}</time>
							</div>
							<div className="chat-bubble">{message.content}</div>
							<div className="opacity-50 chat-footer">
								Seen at {message.createTime}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ChatBody;
