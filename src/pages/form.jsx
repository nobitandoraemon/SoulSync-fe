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
				toast("You already have a profile", { type: "warning" });
				setTimeout(() => {
					navigate(APP_ROUTES.MATCH);
				}, 3000);
			} else {
				toast("You need to have information", {
					type: "warning",
					autoClose: 3000,
				});
			}
		}
	}, [user]);
	return (
		<div className="max-w-(--breakpoint-lg) p-4 mx-auto">
			<Toast />
			<ProfileForm />
		</div>
	);
};

export default FormPage;
