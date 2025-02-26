const ChatBody = ({ messages }) => {
	return (
		<div className="flex-1 p-4 mt-20 mb-8">
			<div className="flex flex-col justify-end h-full">
				{messages.map((message) => {
					const isUser = message.name === localStorage.getItem("userName");
					return (
						<div
							key={message.id}
							className={`chat ${isUser ? "chat-end" : "chat-start"}`}
						>
							<div className="chat-image avatar">
								<div className="w-10 rounded-full">
									<img alt="User Avatar" src={message.avatar} />
								</div>
							</div>
							<div className="chat-header">
								{isUser ? "Bạn" : `Người dùng ẩn danh #${message.id}`}
								<time className="text-xs opacity-50">{message.sendTime}</time>
							</div>
							<div className="chat-bubble">{message.text}</div>
							<div className="opacity-50 chat-footer">
								Seen at {message.sendOK}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ChatBody;
