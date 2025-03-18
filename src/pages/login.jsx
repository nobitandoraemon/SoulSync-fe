import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Toast from "../hooks/useToast";
import { toast } from "react-toastify";
import { useUser } from "../hooks/useUser";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import axios from "axios";
import { storeTokenInLocalStorage } from "../lib/common";
import { refreshToken } from "../lib/common"; // Import hàm refreshToken

const Login = ({ user }) => {
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
				toast("Login successfully", { type: "success" });
				storeTokenInLocalStorage(response.data.accessToken);
				localStorage.setItem("username", input.username);
			}
			setTimeout(() => {
				navigate(APP_ROUTES.FORM);
			}, 3000);
		} catch (err) {
			console.log(err);
			toast("Login failed", { type: "error" });
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

		const checkUser = async () => {
			if (user) {
        if (!user.gender) {
          navigate(APP_ROUTES.FORM);
        } else {
          const newToken = await refreshToken(); // Gọi hàm refreshToken
          if (newToken) {
            // Nếu có token mới, có thể điều hướng đến trang chat hoặc thực hiện hành động khác
            navigate(APP_ROUTES.CHAT);
          }
        }
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
			<div className="flex-col hero-content lg:flex-row-reverse">
				<div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Tên đăng nhập</span>
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

							<label className="label animate-pulse hover:text-primary">
								<Link to="/reg" className="label-text-alt link link-hover">
									Chưa có tài khoản? Đăng ký ngay nào
								</Link>
							</label>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="mt-6 form-control">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
