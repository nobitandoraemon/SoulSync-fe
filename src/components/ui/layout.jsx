import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";
const Layout = () => {
	return (
		<>
			<Header />
			<main className="bg-slate-300 mx-auto max-w-screen-md">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
