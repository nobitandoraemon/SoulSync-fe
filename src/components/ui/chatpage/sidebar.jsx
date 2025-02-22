import ToggleTheme from "../../ui/toggletheme";
import { cn } from "../../../lib/utils";
import Logo from "../general/logo";
import { Link } from "react-router";
const SideBar = ({ toggleActive, content, isScroll }) => {
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
						<img src="https://media.daily.dev/image/upload/s--wzOhK88f--/f_auto/v1724228753/avatars/avatar_nyNDZ2Trf7sk4FgOodgWN" />
					</div>
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
