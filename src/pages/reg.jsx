import { useEffect, useState } from "react";
import { Link } from "react-router";
import Toast from "../hooks/useToast";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import axios from "axios";
import { getTokenFromLocalStorage } from "../lib/common";

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
			if (response?.data?.accessToken) {
				toast("Register successfully", { type: "success" });
			}
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 3000);
		} catch (err) {
			console.log(err);
			toast(`${err.response.data.message}`, { type: "error" });
		}
	};

	useEffect(() => {
		if (token) {
			toast("You are already logged in", { type: "info" });
			setTimeout(() => {
				navigate(APP_ROUTES.CHAT);
			}, 3000);
		}
	}, []);

	return (
		<div
			className="min-h-screen hero"
			style={{
				backgroundImage:
					"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
			}}
		>
			<Toast />
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="py-16 text-center hero-content text-neutral-content">
				<div className="flex flex-col gap-8 items-center-center md:flex-row md:w-4/5">
					<div className="flex flex-col space-y-8 md:w-2/3 text-wrap">
						<h1 className="mb-5 text-5xl font-bold">Sign Up Now</h1>
						<p className="mb-5 text-wrap">
							Tìm nửa kia cho mình ngay lúc này ! Ngoài ra bạn còn có thể tra
							cứu và tìm hiểu sâu hơn về bản thân 😊
						</p>
					</div>
					<div className="w-full max-w-sm mx-auto shadow-2xl card bg-base-100 shrink-0">
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
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="Password"
									className="input input-bordered"
									name="password"
									onChange={handleChange}
									required
								/>
								<label className="label">
									<Link to="/login" className="label-text-alt link link-hover">
										Đã có tài khoản? Đăng nhập tại đây
									</Link>
								</label>
							</div>
							<div className="mt-6 form-control">
								<button className="btn btn-primary">Register</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reg;
