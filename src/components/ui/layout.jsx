import { Outlet } from "react-router";
import { Header, Footer } from "../../config/components";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { checkValidity, getTokenFromLocalStorage } from "../../lib/common";
import { toast } from "react-toastify";
const Layout = () => {
	const { user } = useUser();
	const token = getTokenFromLocalStorage();
	useEffect(() => {
		if (token) {
			if (user) {
				console.log("Get user data successfully");
			} else {
				console.log("Get user data failed");
				const handleReload = async () => {
					const res = await checkValidity();
					if (!res) {
						toast("Hết thời gian chờ phiên. Vui lòng đăng nhập lại", {
							type: "error",
						});
						localStorage.removeItem("token");
						localStorage.removeItem("username");
					}
				};
				handleReload();
			}
		}
	}, [user]);
	return (
		<div className="min-h-screen overflow-x-hidden max-w-screen">
			<Header />
			<main className="min-h-[60vh]">
				<Outlet context={[user]} />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
