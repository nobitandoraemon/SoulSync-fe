import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		username: "",
		password: "",
	});

	const auth = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.username !== "" && input.password !== "") {
			auth.loginAction(input);
			return;
		} else {
			alert("Please provide a valid input");
		}
		localStorage.setItem("userName", input.username);
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInput((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	return (
		<div
			className="min-h-screen hero bg-base"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<div className="flex-col hero-content lg:flex-row-reverse">
				<div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Tên đăng nhập</span>
							</label>
							<input
								type="text"
								name="username"
								placeholder="Username"
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
