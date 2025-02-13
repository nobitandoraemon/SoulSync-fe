import { Link } from "react-router";
import {
	HomeIcon,
	Bars3Icon,
	ChatBubbleBottomCenterIcon,
	UserIcon,
	CalendarIcon,
	BellIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
	return (
		<header className="w-screen p-4 backdrop-blur-lg z-10">
			<ul className="max-w-screen-md bg-background-primary md:max-w-screen-lg mx-auto flex flex-wrap px-4 py-2 shadow-lg rounded-lg">
				<li className="border-r border-text">
					<Link
						to="/"
						className="mr-2 bg-background-secondary text-text-primary hover:bg-text-secondary hover:text-background-primary rounded-full h-8 w-8 flex items-center justify-center "
					>
						<HomeIcon height={24} width={24} />
					</Link>
				</li>
				<li className="">
					<Link
						to="/"
						className="mx-2 bg-background-secondary text-text-secondary hover:bg-text-secondary hover:text-background-primary rounded-full h-8 w-8 flex items-center justify-center "
					>
						<Bars3Icon height={24} width={24} />
					</Link>
				</li>
				<li className="">
					<Link
						to="/"
						className="mr-2 bg-background-secondary text-text-secondary hover:bg-text-secondary hover:text-background-primary rounded-full h-8 w-8 flex items-center justify-center "
					>
						<ChatBubbleBottomCenterIcon height={24} width={24} />
					</Link>
				</li>
				<li className="">
					<Link
						to="/"
						className="mr-2 bg-background-secondary text-text-secondary hover:bg-text-secondary hover:text-background-primary rounded-full h-8 w-8 flex items-center justify-center "
					>
						<CalendarIcon height={24} width={24} />
					</Link>
				</li>
				<li className="">
					<Link
						to="/"
						className="mr-2 bg-background-secondary text-text-secondary hover:bg-text-secondary hover:text-background-primary rounded-full h-8 w-8 flex items-center justify-center "
					>
						<BellIcon height={24} width={24} />
					</Link>
				</li>

				<li className="ml-auto float-right">
					<Link
						to="/"
						className="bg-background-secondary text-text-secondary hover:bg-text-secondary hover:text-background-primary rounded-full h-8 w-8 flex items-center justify-center "
					>
						<UserIcon height={24} width={24} />
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
