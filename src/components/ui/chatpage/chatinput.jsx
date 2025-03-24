import { useState } from "react";
const ChatInput = ({ sendMessage }) => {
	const [message, setMessage] = useState("");
	const handleMessage = (e) => {
		e.preventDefault();
		if (message.trim() && localStorage.getItem("username")) {
			sendMessage(message);
			setMessage("");
		}
		setMessage("");
	};

	return (
		<form className="absolute bottom-0 left-0 right-0" onSubmit={handleMessage}>
			<label className="flex items-center gap-2 input input-bordered w-screen">
				<input
					type="text"
					className="grow"
					placeholder="What's on your mind? ..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit" className="btn btn-ghost">
					<kbd className="kbd kbd-sm">Enter</kbd>
					<kbd className="kbd kbd-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M20.239 3.749a.75.75 0 0 0-.75.75V15H5.549l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3.75 3.75a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 1 0 1.06-1.06L5.55 16.5h14.69a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.751Z"
								clipRule="evenodd"
							/>
						</svg>
					</kbd>
				</button>
			</label>
		</form>
	);
};

export default ChatInput;
