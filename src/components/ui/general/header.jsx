import { Link, Navigate } from "react-router";
import { cn } from "../../../lib/utils";
import {
	useAuth,
	ToggleTheme,
	Logo,
	useScroll,
} from "../../../config/components";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "../../../context/themeprovider";
import { useContext } from "react";

const UserProfile = ({ user, handleLogOut }) => {
	return (
		<div className="dropdown dropdown-end">
			<div
				tabIndex={0}
				role="button"
				className="btn btn-ghost btn-circle avatar"
			>
				<div className="w-10 rounded-full">
					<img alt="User avatar" src={user.avatar} />
				</div>
			</div>
			<ul
				tabIndex={0}
				className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
			>
				<li>
					<Link to="/chat" className="justify-between">
						Profile
						<span className="badge">New</span>
					</Link>
				</li>
				<li onClick={handleLogOut}>
					<Link to="/">Logout</Link>
				</li>
			</ul>
		</div>
	);
};

const Header = () => {
	const isScroll = useScroll();
	const { token } = useAuth();
	const { theme } = useContext(ThemeContext);
	const auth = useAuth();
	const userprofile = {
		avatar:
			"https://media.daily.dev/image/upload/s--wzOhK88f--/f_auto/v1724228753/avatars/avatar_nyNDZ2Trf7sk4FgOodgWN",
	};
	const handleLogOut = () => auth.logOut();
	return (
		<div className={cn(isScroll && "fixed left-0 right-0 top-0 z-50 ")}>
			<ToastContainer
				limit={1}
				autoClose={3000}
				theme={theme === "halloween" ? "dark" : "light"}
			/>
			<div className="shadow-lg navbar bg-base-100 backdrop-blur-md glass">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle"
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
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="z-50 p-2 mt-3 shadow dropdown-content menu menu-sm top-5 bg-base-100 rounded-box w-52"
						>
							<li>
								<Link to="/">Homepage</Link>
							</li>
							<li>
								<Link to="/test">Test</Link>
							</li>
							{token ? (
								<li>
									<Link to="/chat">Chat</Link>
								</li>
							) : (
								<>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/reg">Register</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					<Link to="/" className="flex items-center justify-center text-xl">
						<Logo />
						<span className="text-2xl font-bold">Soul Sync</span>
					</Link>
				</div>
				<div className="navbar-end">
					<ToggleTheme className="btn btn-ghost btn-circle" />
					{token && (
						<UserProfile user={userprofile} handleLogOut={handleLogOut} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
