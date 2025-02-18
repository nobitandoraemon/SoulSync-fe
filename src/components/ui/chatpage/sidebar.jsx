import { Link } from "react-router";
import logo from "../../../assets/logo.png";
import ToggleTheme from "../../ui/toggletheme";
import { cn } from "../../../lib/utils";

const SideBar = ({ isActive, toggleActive, content }) => {
	return (
		<aside
			className={cn(
				"menu max-w-[80px] flex flex-col gap-4 items-center h-screen bg-base-200 rounded-box",
				"shadow-sm"
			)}
		>
			<div>
				<Link to="/">
					<img src={logo} alt="logo" className="w-14 h-14" />
				</Link>
			</div>

			{content.map((item) => {
				return (
					<li
						key={item.id}
						onClick={() => toggleActive(item.id)}
						className="flex items-center justify-center rounded-full w-full text-primary hover:text-secondary transition-colors"
					>
						<a>{item.icon}</a>
					</li>
				);
			})}

			<div className="mt-auto flex flex-col items-center gap-8">
				<ToggleTheme className="btn btn-circle" />
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
					</div>
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
