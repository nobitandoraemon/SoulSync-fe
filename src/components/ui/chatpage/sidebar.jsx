import { ToggleTheme, Logo } from "../../../config/components";
import { cn } from "../../../lib/utils";
import { Link } from "react-router";
const SideBar = ({ toggleActive, content, isScroll, user }) => {
	return (
		<aside
			className={cn(
				"menu max-w-20 flex flex-col gap-4 items-center h-screen bg-base-200 rounded-box",
				"shadow-sm",
				isScroll && "fixed top-0 left-0 bottom-0"
			)}
		>
			<Link to="/">
				<Logo />
			</Link>

			{content.map((item) => {
				return (
					<li
						key={item.id}
						onClick={() => toggleActive(item.id)}
						className="flex items-center justify-center w-full transition-colors rounded-full text-primary hover:text-secondary"
					>
						<a>{item.icon}</a>
					</li>
				);
			})}

			<div className="flex flex-col items-center gap-8 mt-auto">
				<ToggleTheme className="btn btn-circle" />
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img src={user.avatar} />
					</div>
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
