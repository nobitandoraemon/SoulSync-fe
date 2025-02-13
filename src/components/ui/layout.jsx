import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";
const Layout = () => {
	return (
		<div className="bg-background-secondary text-text-primary h-screen">
			<Header />
			<main className="">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
