import { Link, useNavigate } from "react-router";
import { Toast } from "../../../config/components";
import { useState } from "react";
import { APP_ROUTES } from "../../../lib/constants";
const MyInformationSideBar = ({ user, clickable, setClickable }) => {
	return (
		<div className="drawer drawer-end">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
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
					<span className="hidden md:block">Thông tin của bạn</span>
				</label>
			</div>
			<div className="z-50 drawer-side">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
					onClick={() => setClickable(true)}
				></label>
				<div className="grid grid-cols-1 menu bg-base-200 text-base-content h-screen max-w-[90vw] p-4 overflow-auto">
					{/* Sidebar content here */}
					<div className="m-2 shadow-xs card bg-primary w-96">
						<div className="card-body">{user.username}</div>
					</div>
					{/* Sidebar content end here */}
				</div>
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
					<span className="hidden md:block">Thông tin nửa kia</span>
				</label>
			</div>
			<div className="z-50 drawer-side">
				<label
					htmlFor="other-drawer-4"
					aria-label="close sidebar"
					className="drawer-overlay"
					onClick={() => setClickable(true)}
				></label>
				<div className="grid grid-cols-1 menu bg-base-200 text-base-content h-screen max-w-[90vw] p-4 overflow-auto">
					{/* Sidebar content here */}
					<div className="m-2 shadow-xs card bg-primary w-96">
						<div className="card-body">{matchedUser.username}</div>
					</div>
					{/* Sidebar content end here */}
				</div>
			</div>
		</div>
	);
};

const MainNav = ({ user, handleOut }) => {
	return (
		<>
			<div className="flex flex-row items-center flex-1 float-left gap-4 mr-4">
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img src={user.image} />
					</div>
				</div>
				<span className="hidden overflow-hidden truncate md:block text-ellipsis badge badge-lg ">
					{user.username}
				</span>
			</div>

			<div
				role="button"
				className="btn btn-ghost btn-circle"
				onClick={handleOut}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
					/>
				</svg>
			</div>
		</>
	);
};

const SubNav = ({ matchedUser, user, handleOut }) => {
	const [clickable, setClickable] = useState(true);
	return (
		<ul className="menu md:bg-base-200 menu-horizontal rounded-box place-content-center">
			{/* <li className="bg-base-200 rounded-l-3xl">
				<Link to="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					<span className="hidden md:block">Trang chủ</span>
				</Link>
			</li> */}
			<li className="bg-base-200" onClick={useNavigate(APP_ROUTES.HOME)}>
				<a
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span className="hidden md:block" onClick={handleOut}>
						Kết thúc
					</span>

					<span className="badge badge-sm badge-warning">
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
					</span>
				</a>
			</li>
			<li className="bg-base-200">
				<a>
					<span className="hidden md:block">Trạng thái</span>
					{matchedUser ? (
						<span className="badge badge-xs badge-success"></span>
					) : (
						<span className="badge badge-xs badge-warning"></span>
					)}
				</a>
			</li>
			<li className="bg-base-200">
				<OtherInformationSideBar
					matchedUser={matchedUser}
					clickable={clickable}
					setClickable={setClickable}
				/>
			</li>
			<li className="bg-base-200 rounded-r-3xl">
				<MyInformationSideBar
					user={user}
					clickable={clickable}
					setClickable={setClickable}
				/>
			</li>
		</ul>
	);
};

const ChatHeader = ({ user, matchedUser }) => {
	const navigate = useNavigate();
	const handleOut = () => {
		navigate(APP_ROUTES.HOME);
	};
	return (
		<div className="fixed flex items-center md:flex-row top-0 left-0 right-0 p-4 min-h-[60px] shadow-lg bg-primary/10 backdrop-blur-lg z-50">
			<Toast />
			{matchedUser ? (
				<SubNav matchedUser={matchedUser} user={user} handleOut={handleOut} />
			) : (
				<MainNav user={user} handleOut={handleOut} />
			)}
		</div>
	);
};

export default ChatHeader;
