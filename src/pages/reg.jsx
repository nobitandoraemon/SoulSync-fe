import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Toast from "../hooks/useToast";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Reg = () => {
	const navigate = useNavigate();
	const auth = useAuth();
	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.username !== "" && form.password !== "") {
			auth.regAction(form);
		} else {
			alert("Please provide a valid input");
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			toast("You are logged in");
			navigate("/chat");
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
									<span className="label-text">Tên tài khoản</span>
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
