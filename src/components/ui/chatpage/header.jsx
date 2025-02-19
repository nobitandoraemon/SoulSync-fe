import { Link } from "react-router";

const Header = () => {
	return (
		<div className="absolute top-0 left-0 right-0 p-4 min-h-[80px] flex shadow-lg bg-primary/10 backdrop-blur-lg">
			<div className="flex items-center gap-4 mr-4 flex-1 float-left">
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
					</div>
				</div>
				<span className="badge badge-lg">Người dùng ẩn danh #1020</span>
			</div>
			<ul className="menu bg-base-200 lg:menu-horizontal rounded-box place-content-center">
				<li>
					<Link to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
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
						Trang chủ
					</Link>
				</li>
				<li>
					<a
						href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
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
						Kết thúc
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
				<li>
					<a>
						Trạng thái
						<span className="badge badge-xs badge-success"></span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
