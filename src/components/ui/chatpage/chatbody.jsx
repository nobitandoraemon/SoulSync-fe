const ChatBody = () => {
	return (
		<div className="mt-20 mb-8 p-4 flex-1">
			<div className="flex flex-col justify-end h-full">
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
						Người dùng ẩn danh 1020
						<time className="text-xs opacity-50">12:45</time>
					</div>
					<div className="chat-bubble">
						Xin chào,tôi là Park Hang Seo. Hiện tại tôi đang bị mất ví, bạn có
						thể chuyển khoản giúp tôi mượn 50000 won có được không ?
					</div>
					<div className="chat-footer opacity-50">Delivered</div>
				</div>
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
						Bạn
						<time className="text-xs opacity-50">12:46</time>
					</div>
					<div className="chat-bubble">Nice try Diddy</div>
					<div className="chat-footer opacity-50">Seen at 12:46</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBody;
