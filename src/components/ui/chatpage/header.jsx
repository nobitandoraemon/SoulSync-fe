import { Toast, ToggleTheme } from "../../../config/components";
import { useEffect, useState } from "react";
import { APP_ROUTES } from "../../../lib/constants";
import { toast } from "react-toastify";
import { ZodiacSigns } from "../../../lib/data";

const warningMsg = [
	{
		id: 1,
		msg: "Thoát ra có thể mất toàn bộ tin nhắn",
	},
	{
		id: 2,
		msg: "Hãy giữ lời ăn tiếng nói",
	},
	{
		id: 3,
		msg: "Đừng vội vàng",
	},
	{
		id: 4,
		msg: "Ta yêu nhau như cơn sóng vỗ",
	},
	{
		id: 5,
		msg: "Một sản phẩm của team Thượng Nhẫn JS!",
	},
	{
		id: 6,
		msg: "Nhấn vào thông tin đối phương để nhận bất ngờ",
	},
];

const OtherInformationSideBar = ({ matchedUser }) => {
	return (
		<div className="navbar-start">
			<button className="flex flex-row-reverse gap-4 p-4 cursor-pointer">
				<div className="flex-col hidden gap-2 md:flex md:items-start">
					<div className="font-bold">Người dùng #{matchedUser.zodiac}</div>
					<div className="text-base-content">
						{ZodiacSigns[matchedUser.zodiac].name}
					</div>
					<div className="w-1/3 btn btn-primary btn-outline animate-pulse">
						{ZodiacSigns[matchedUser.zodiac].symbol}
					</div>
				</div>

				<div className="avatar avatar-online">
					<div className="rounded-full size-16 md:size-24 ring-primary ring-offset-base-100 ring ring-offset-2">
						<img src={matchedUser.image} />
					</div>
				</div>
			</button>
		</div>
	);
};

const ChatNav = ({ matchedUser, user, handleOut }) => {
	const [id, setId] = useState(1);

	useEffect(() => {
		setTimeout(() => {
			id === 5 ? setId(1) : setId((prev) => prev + 1);
		}, 10000);
	}, [id]);
	const handleQuit = () => {
		const quest = window.confirm("Bạn có chắc chắn rời khỏi phòng chat ?");

		if (quest) {
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
		<div className="p-2 rounded-lg shadow-sm navbar bg-base-200">
			<OtherInformationSideBar matchedUser={matchedUser} />
			<div className="hidden overflow-hidden text-sm max-h-12 navbar-center md:flex">
				<div className="mr-2 status status-info animate-bounce"></div>{" "}
				<span className="duration-1000 text-nowrap animate-pulse animate-delay-1000">
					{warningMsg[id - 1].msg}
				</span>
			</div>
			<div className="navbar-end">
				<div className="btn btn-ghost btn-circle">
					<ToggleTheme />
				</div>
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
	);
};

const ChatHeader = ({ user, matchedUser, handleLeave }) => {
	const handleOut = () => {
		handleLeave();
		setTimeout(() => {
			window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
			window.location.reload();
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
