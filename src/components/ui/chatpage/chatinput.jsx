const ChatInput = () => {
	return (
		<div className="absolute left-0 bottom-0 right-0">
			<label className="input input-bordered flex items-center gap-2">
				<input
					type="text"
					className="grow"
					placeholder="What's on your mind? ..."
				/>
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
			</label>
		</div>
	);
};

export default ChatInput;
