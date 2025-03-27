import { Outlet, useNavigate } from "react-router";
import { Header, Footer } from "../../config/components";
import { useUser } from "../../hooks/useUser";
import { useEffect, useLayoutEffect, useState } from "react";
import { checkValidity, getTokenFromLocalStorage } from "../../lib/common";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../../lib/constants";
const Layout = () => {
	const { user } = useUser();
	const [isLoading, setIsLoading] = useState(true);
	const token = getTokenFromLocalStorage();
	const navigate = useNavigate();
	useLayoutEffect(() => {
		if (token) {
			if (user) {
				console.log("Get user data successfully");
				if (!user.image) {
					toast("Điều hướng đến trang nhập thông tin ...", { type: "warning" });
					setTimeout(() => {
						navigate(APP_ROUTES.FORM);
					}, 2000);
				}
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
			<Header user={user} />
			<main className="min-h-[60vh]">
				<Outlet context={[user]} />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
