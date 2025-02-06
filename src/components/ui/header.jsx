import { Link } from "react-router";
import { NAV_LINKS } from "../../lib/data";

const Header = () => {
	return (
		<header>
			<ul>
				{NAV_LINKS.map((link, idx) => {
					return (
						<li key={idx}>
							<Link to={link.href}>{link.name}</Link>
						</li>
					);
				})}
			</ul>
		</header>
	);
};

export default Header;
