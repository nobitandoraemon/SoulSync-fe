import { useOutletContext, useNavigate } from "react-router";
import ProfileForm from "./profileform";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../lib/constants";
import Toast from "../hooks/useToast";

const FormPage = () => {
	const navigate = useNavigate();
	const { user } = useOutletContext();
	useEffect(() => {
		if (user) {
			if (user.gender) {
				toast(
					"Bạn đã có đầy đủ thông tin, vui lòng vào cài đặt tại trang cá nhân để chỉnh sửa",
					{ type: "warning" }
				);
				setTimeout(() => {
					navigate(APP_ROUTES.MATCH);
				}, 3000);
			}
		}
	}, [user]);
	return (
		<div className="max-w-(--breakpoint-lg) min-h-screen p-4 mx-auto">
			<Toast />
			<ProfileForm />
		</div>
	);
};

export default FormPage;
