import ToggleTheme from "../toggletheme";
import { Link } from "react-router";
import { useScroll } from "../../../hooks/useScroll";
import { cn } from "../../../lib/utils";

const Header = () => {
	const isScroll = useScroll();
	return (
		<div
			className={cn(
				"container mx-auto translate-y-2",
				isScroll &&
					"fixed left-0 right-0 top-1 z-50 glass rounded-xl backdrop-blur-md"
			)}
		>
			<div className="navbar bg-base-100 shadow-lg rounded-xl">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle"
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
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="dropdown-content menu menu-sm top-5 bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
						>
							<li>
								<Link to="/">Homepage</Link>
							</li>
							<li>
								<Link to="/chat">Chat</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					<Link to="/" className="btn btn-ghost text-xl">
						SoulSync
					</Link>
				</div>
				<div className="navbar-end">
					<ToggleTheme className="btn btn-ghost btn-circle" />
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="User avatar"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
