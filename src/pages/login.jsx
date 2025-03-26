import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Toast from "../hooks/useToast";
import { toast } from "react-toastify";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import axios from "axios";
import {
	getTokenFromLocalStorage,
	storeTokenInLocalStorage,
} from "../lib/common";
import { refreshToken } from "../lib/common"; // Import hàm refreshToken

const Login = ({ user }) => {
	const token = getTokenFromLocalStorage();
	const navigate = useNavigate();

	const [input, setInput] = useState({
		username: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios({
				method: "POST",
				data: input,
				url: API_ROUTES.SIGN_IN,
				withCredentials: true,
			});
			if (response?.data?.accessToken) {
				toast("Đăng nhập thành công", { type: "success" });
				storeTokenInLocalStorage(response.data.accessToken);
				localStorage.setItem("username", input.username);
			}
			setTimeout(() => {
				navigate(APP_ROUTES.MATCH);
			}, 3000);
		} catch (err) {
			console.log(err);
			toast("Đăng nhập thất bại", { type: "error" });
		}
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInput((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		if (token) {
			toast("Bạn đã đăng nhập rồi", { type: "info" });

			setTimeout(() => {
				navigate(APP_ROUTES.MATCH);
			}, 1500);
		}
	}, [token]);

	useEffect(() => {
		const checkUser = async () => {
			if (user) {
				if (!user.gender) {
					navigate(APP_ROUTES.FORM);
				}
				// else {
				// 	const newToken = await refreshToken(); // Gọi hàm refreshToken
				// 	if (newToken) {
				// 		// Nếu có token mới, có thể điều hướng đến trang chat hoặc thực hiện hành động khác
				// 		navigate(APP_ROUTES.MATCH);
				// 	}
				// }
			}
		};

		checkUser();
	}, []);

	return (
		<div
			className="min-h-screen hero bg-base"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<Toast />
			<div className="flex-col text-center hero-content lg:flex-row-reverse">
				<div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="username"
								placeholder="Email"
								className="input input-bordered"
								onChange={handleInput}
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
								name="password"
								className="input input-bordered"
								onChange={handleInput}
								required
							/>
							<div className="flex flex-col mt-6 space-y-2">
								<label className="text-right label">
									<a
										href="#"
										className="label-text-alt link link-hover"
										onClick={(e) => {
											e.preventDefault();
											toast(
												"Xin lỗi, tính năng còn trong quá trình phát triển",
												{
													autoClose: 3000,
													type: "info",
												}
											);
										}}
									>
										Quên mật khẩu?
									</a>
								</label>
								<div className="mt-6">
									<button
										type="submit"
										className="btn btn-primary btn-wide hover:btn-accent"
									>
										Đăng nhập
									</button>
								</div>
								<label className="label animate-pulse text-primary hover:text-accent">
									<Link to="/reg" className="label-text-alt link link-hover">
										Chưa có tài khoản? Đăng ký ngay nào
									</Link>
								</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
