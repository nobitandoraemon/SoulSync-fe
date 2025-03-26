import { useEffect, useState } from "react";
import { Link } from "react-router";
import Toast from "../hooks/useToast";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import axios from "axios";
import {
	getTokenFromLocalStorage,
	storeTokenInLocalStorage,
} from "../lib/common";

const Reg = () => {
	const token = getTokenFromLocalStorage();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios({
				method: "POST",
				data: form,
				url: API_ROUTES.SIGN_UP,
				withCredentials: true,
			});
			if (response?.data?.message) {
				toast(`${response.data.message}`, { type: "success" });
				localStorage.setItem("temp", form.username);
				setTimeout(() => {
					toast("Vui lòng xác thực tài khoản", { type: "info" });
					navigate(APP_ROUTES.OTP);
				}, 3000);
			}
		} catch (err) {
			console.log(err);
			toast(`${err.response.data.message}`, { type: "error" });
		}
	};

	useEffect(() => {
		if (token) {
			toast("Bạn đã đăng nhập rồi", { type: "info" });
			setTimeout(() => {
				navigate(APP_ROUTES.MATCH);
			}, 1500);
		}
	}, []);

	return (
		<div
			className="min-h-screen hero"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<Toast />
			<div className="hero-overlay"></div>
			<div className="py-16 text-center hero-content text-neutral-content">
				<div className="flex flex-col gap-8 items-center-center md:flex-row md:w-4/5">
					<div className="flex flex-col space-y-8 md:w-2/3 text-wrap">
						<h1 className="mb-5 text-5xl font-bold">Đăng ký ngay</h1>
						<p className="mb-5 font-semibold text-wrap">
							Tìm một nửa hoàn hảo ngay hôm nay! Kết nối, khám phá bản thân và
							trải nghiệm hành trình yêu thương thú vị. 💖
						</p>
					</div>
					<div className="w-full max-w-sm mx-auto shadow-2xl card bg-primary-content/90 shrink-0 text-primary">
						<form className="card-body" onSubmit={handleSubmit}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="Username"
									name="username"
									className="input input-bordered"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Mật khẩu</span>
								</label>
								<input
									type="password"
									placeholder="Password"
									className="input input-bordered"
									name="password"
									onChange={handleChange}
									required
								/>
								<label className="mt-6 label animate-bounce text-primary hover:text-accent">
									<Link to="/login" className="label-text-alt link link-hover">
										Đã có tài khoản? Đăng nhập tại đây
									</Link>
								</label>
							</div>
							<div className="mt-6 form-control">
								<button className="btn btn-primary hover:btn-accent">
									Đăng ký
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reg;
