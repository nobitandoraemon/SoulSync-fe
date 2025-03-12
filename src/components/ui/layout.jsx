import { Outlet } from "react-router";
import { Header, Footer } from "../../config/components";
const Layout = () => {
	return (
		<div className="min-h-screen overflow-x-hidden max-w-screen">
			<Header />
			<main className="min-h-[80vh]">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
