import { useState } from "react";
const ChatInput = ({ user, matchedUser, newSocket }) => {
	const [message, setMessage] = useState("");
	const handleMessage = (e) => {
		e.preventDefault();
		if (message.trim() && localStorage.getItem("username")) {
			newSocket.emit("chat", {
				receiver: matchedUser.username,
				content: message,
			});
		}
		setMessage("");
	};

	return (
		<form
			className="fixed bottom-4 left-8 right-8 w-[90%] mx-auto flex flex-row items-center h-16 rounded-2xl"
			onSubmit={handleMessage}
		>
			<label className="w-full join">
				<input
					type="text"
					className="grow input join-item"
					placeholder="What's on your mind? ..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit" className="btn btn-success join-item">
					Enter
				</button>
			</label>
		</form>
	);
};

export default ChatInput;
