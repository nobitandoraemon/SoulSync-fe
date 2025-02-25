const OtherUser = ({ message }) => {
	return (
		<div className="chat chat-start">
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img
						alt="Tailwind CSS chat bubble component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
					/>
				</div>
			</div>
			<div className="chat-header">
				{message.name}
				<time className="text-xs opacity-50">12:45</time>
			</div>
			<div className="chat-bubble">{message.text}</div>
			<div className="opacity-50 chat-footer">Delivered</div>
		</div>
	);
};

const MainUser = ({ message }) => {
	return (
		<div className="chat chat-end">
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img
						alt="Tailwind CSS chat bubble component"
						src="https://media.daily.dev/image/upload/s--wzOhK88f--/f_auto/v1724228753/avatars/avatar_nyNDZ2Trf7sk4FgOodgWN"
					/>
				</div>
			</div>
			<div className="chat-header">
				You
				<time className="text-xs opacity-50">12:46</time>
			</div>
			<div className="chat-bubble">{message.text}</div>
			<div className="opacity-50 chat-footer">Seen at 12:46</div>
		</div>
	);
};

const ChatBody = ({ messages }) => {
	return (
		<div className="flex-1 p-4 mt-20 mb-8">
			<div className="flex flex-col justify-end h-full">
				{messages.map((message) => {
					return (
						<>
							{message.name === localStorage.getItem("userName") && (
								<MainUser message={message} />
							)}
							{message.name !== localStorage.getItem("userName") && (
								<OtherUser message={message} />
							)}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default ChatBody;
