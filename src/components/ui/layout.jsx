import { Outlet } from "react-router";
import { Header, Footer } from "../../config/components";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
const Layout = () => {
	const { user } = useUser();
	useEffect(() => {
		console.log("Get user data successfully");
	}, [user]);
	return (
		<div className="min-h-screen overflow-x-hidden max-w-screen">
			<Header />
			<main className="min-h-[80vh]">
				<Outlet context={[user]} />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
