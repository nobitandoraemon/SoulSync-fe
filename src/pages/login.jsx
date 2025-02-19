const Login = () => {
	return (
		<div className="hero bg-base min-h-screen max-w-screen-lg mx-auto">
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
