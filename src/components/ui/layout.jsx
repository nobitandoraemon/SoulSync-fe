import { Outlet } from "react-router";
import Header from "./general/header";
import Footer from "./general/footer";
const Layout = () => {
	return (
		<div className="min-h-screen max-w-screen overflow-x-hidden">
			<Header />
			<main className="min-h-[80vh]">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
