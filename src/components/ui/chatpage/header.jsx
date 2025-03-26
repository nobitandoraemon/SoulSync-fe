import { Link, useNavigate } from "react-router";
import { Info, Toast } from "../../../config/components";
import { useState } from "react";
import { APP_ROUTES } from "../../../lib/constants";
import { toast } from "react-toastify";
import { ZodiacSigns } from "../../../lib/data";

const MyInformationSideBar = ({ user, clickable, setClickable }) => {
	return (
		<div className="drawer drawer-end">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content her  */}
				<label
					htmlFor="my-drawer"
					className={`flex cursor-pointer ${
						clickable ? "" : "pointer-events-none opacity-50"
					}`}
					onClick={() => setClickable(false)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						className="size-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
					</svg>
					<span className="hidden md:block">Bạn</span>
				</label>
			</div>
			<div className="z-50 drawer-side">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
					onClick={() => setClickable(true)}
				></label>
				<Info user={user} claasName="h-[100%]" />
			</div>
		</div>
	);
};
const OtherInformationSideBar = ({ matchedUser, clickable, setClickable }) => {
	return (
		<div className="drawer">
			<input id="other-drawer-4" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<label
					htmlFor="other-drawer-4"
					className={`flex cursor-pointer ${
						clickable ? "" : "pointer-events-none opacity-50"
					}`}
					onClick={() => setClickable(false)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						className="size-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
						/>
					</svg>
					<span className="hidden md:block">Người ấy</span>
				</label>
			</div>
			<div className="z-50 drawer-side">
				<label
					htmlFor="other-drawer-4"
					aria-label="close sidebar"
					className="drawer-overlay"
					onClick={() => setClickable(true)}
				></label>
				<Info user={matchedUser} claasName="h-[100%]" />
			</div>
		</div>
	);
};

const ChatNav = ({ matchedUser, user, handleOut }) => {
	const [clickable, setClickable] = useState(true);
	const handleQuit = () => {
		const quest = alert("Bạn có chắc chắn rời khỏi phòng chat ?");

		if (quest === undefined) {
			toast("Đã kết thúc cuộc trò chuyện", {
				type: "success",
			});

			handleOut();
		} else {
			toast("Cảm ơn vì đã lắng nghe lấy con tim", {
				role: "alert",
				type: "info",
			});
		}
	};
	return (
		<div className="rounded-lg shadow-sm navbar bg-base-100">
			<div className="navbar-start">
				<div className="flex flex-row-reverse gap-4">
					<div className="flex-col hidden gap-2 md:flex">
						<div className="font-bold">
							Người dùng ẩn danh #{matchedUser.zodiac}
						</div>
						<div className="text-base-content">
							{ZodiacSigns[matchedUser.zodiac].name}
						</div>
						<div className="badge badge-ghost">
							{ZodiacSigns[matchedUser.zodiac].symbol}
						</div>
					</div>

					<div className="rounded-full ring ring-primary avatar avatar-online">
						<div className="rounded-full size-24">
							<img src={matchedUser.image} />
						</div>
					</div>
				</div>
			</div>
			<div className="navbar-end">
				<button className="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{" "}
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>{" "}
					</svg>
				</button>
				<button className="btn btn-ghost btn-circle" onClick={handleQuit}>
					<div className="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="badge badge-xs badge-warning indicator-item"></span>
					</div>
				</button>
			</div>
		</div>
		// <ul className="w-screen menu md:bg-base-200 menu-horizontal rounded-box place-content-center">
		// 	<li className="bg-base-200" onClick={handleQuit}>
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			className="w-5 h-5"
		// 			fill="none"
		// 			viewBox="0 0 24 24"
		// 			stroke="currentColor"
		// 		>
		// 			<path
		// 				strokeLinecap="round"
		// 				strokeLinejoin="round"
		// 				strokeWidth="2"
		// 				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		// 			/>
		// 		</svg>
		// 		<span className="hidden md:block" onClick={handleOut}>
		// 			Kết thúc
		// 			<span className="badge badge-sm badge-warning">
		// 				<svg
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					viewBox="0 0 24 24"
		// 					fill="currentColor"
		// 					className="size-4"
		// 				>
		// 					<path
		// 						fillRule="evenodd"
		// 						d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
		// 						clipRule="evenodd"
		// 					/>
		// 				</svg>
		// 			</span>
		// 		</span>
		// 	</li>
		// 	<li className="bg-base-200">
		// 		<a>
		// 			<span className="hidden md:block">Trạng thái</span>
		// 			{matchedUser ? (
		// 				<span className="badge badge-xs badge-success"></span>
		// 			) : (
		// 				<span className="badge badge-xs badge-warning"></span>
		// 			)}
		// 		</a>
		// 	</li>
		// 	<li className="bg-base-200">
		// 		<OtherInformationSideBar
		// 			matchedUser={matchedUser}
		// 			clickable={clickable}
		// 			setClickable={setClickable}
		// 		/>
		// 	</li>
		// 	<li className="bg-base-200 rounded-r-3xl">
		// 		<MyInformationSideBar
		// 			user={user}
		// 			clickable={clickable}
		// 			setClickable={setClickable}
		// 		/>
		// 	</li>
		// </ul>
	);
};

const ChatHeader = ({ user, matchedUser, handleLeave }) => {
	const handleOut = () => {
		handleLeave();
		setTimeout(() => {
			window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
		}, 2000);
	};
	return (
		<div className="fixed top-0 left-0 right-0 z-50 flex items-center md:flex-row">
			<Toast />
			{matchedUser && (
				<ChatNav matchedUser={matchedUser} user={user} handleOut={handleOut} />
			)}
		</div>
	);
};

export default ChatHeader;
