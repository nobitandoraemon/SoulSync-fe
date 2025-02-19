import { Link } from "react-router";

const Login = () => {
	return (
		<div
			className="hero bg-base min-h-screen"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Tên đăng nhập</span>
							</label>
							<input
								type="text"
								placeholder="Username"
								className="input input-bordered"
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
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
