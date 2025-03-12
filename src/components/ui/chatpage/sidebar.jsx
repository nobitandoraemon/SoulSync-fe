import { ToggleTheme, Logo, ChatIcon } from "../../../config/components";
import { cn } from "../../../lib/utils";
import { Link } from "react-router";
const SideBar = ({ toggleActive, content, isScroll, user }) => {
	return (
		<div className="md:w-20">
			<aside
				className={cn(
					"menu w-[100%] fixed bottom-0 left-0 right-0 md:max-w-20 flex flex-row md:flex-col gap-4 justify-center items-center h-16 md:h-screen bg-base-200 rounded-box shadow-sm z-50"
				)}
			>
				<Link to="/" className="hidden md:block">
					<Logo />
				</Link>

				{content.map((item) => {
					return (
						<li
							key={item.id}
							onClick={() => toggleActive(item.id)}
							className="transition-colors rounded-full md:flex md:items-center md:justify-center md:w-full text-primary hover:text-secondary"
						>
							<a>{item.icon}</a>
						</li>
					);
				})}
				<li
					className="flex items-center justify-center transition-colors rounded-full md:hidden text-primary hover:text-secondary"
					onClick={() => toggleActive(4)}
				>
					<ChatIcon />
				</li>

				<div className="flex items-center gap-8 md:mt-auto md:flex-col">
					<ToggleTheme className="btn btn-circle" />
					<div className="avatar online">
						<div className="w-12 rounded-full">
							<img src={user.avatar} />
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default SideBar;
