import { Link } from "react-router";

const Reg = () => {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage:
					"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-neutral-content text-center w-full">
				<div className="flex flex-row w-4/5 gap-8">
					<div className="flex flex-col space-y-8 text-wrap w-2/3">
						<h1 className="mb-5 text-5xl font-bold">Sign Up Now</h1>
						<p className="mb-5 text-wrap">
							Tìm nửa kia cho mình ngay lúc này ! Ngoài ra bạn còn có thể tra
							cứu và tìm hiểu sâu hơn về bản thân 😊
						</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<form className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Tên tài khoản</span>
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
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="Password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<Link to="/login" className="label-text-alt link link-hover">
										Đã có tài khoản? Đăng nhập tại đây
									</Link>
								</label>
							</div>
							<div className="form-control mt-6">
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
