import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useOutletContext } from "react-router";
import axios from "axios";
import { API_ROUTES, APP_ROUTES } from "../lib/constants";
import Toast from "../hooks/useToast";

const OTPInput = ({ otp, setOtp }) => {
	const inputs = useRef([]);

	const handleChange = (e, index) => {
		const { value } = e.target;

		// Only allow single digit input
		if (value.match(/^\d$/)) {
			const newOtp = [...otp];
			newOtp[index] = value;
			setOtp(newOtp);

			// Move focus to the next input
			if (index < length - 1) {
				inputs.current[index + 1].focus();
			}
		}

		// Move focus to previous input on backspace
		if (value === "" && index > 0) {
			inputs.current[index - 1].focus();
		}
	};

	const handleKeyDown = (e, index) => {
		if (e.key === "Backspace" && otp[index] === "") {
			// Move focus to previous input on backspace if current input is empty
			if (index > 0) {
				inputs.current[index - 1].focus();
			}
		}
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			{otp.map((_, index) => (
				<input
					key={index}
					type="text"
					maxLength="1"
					value={otp[index]}
					onChange={(e) => handleChange(e, index)}
					onKeyDown={(e) => handleKeyDown(e, index)}
					ref={(el) => (inputs.current[index] = el)}
					style={{
						width: "40px",
						height: "40px",
						margin: "0 5px",
						textAlign: "center",
						fontSize: "18px",
						border: "1px solid #ccc",
						borderRadius: "4px",
					}}
				/>
			))}
		</div>
	);
};

const OTPPage = () => {
	const [user] = useOutletContext();
	const [username, setUsername] = useState(localStorage.getItem("temp") || "");
	const [showOtpInput, setShowOtpInput] = useState(false);
	const [otp, setOtp] = useState(Array(6).fill(""));
	const navigate = useNavigate();

	const handleShow = (e) => {
		e.preventDefault();
		setShowOtpInput(true);
	};

	const handleVerify = async (e) => {
		e.preventDefault();
		try {
			const response = await axios({
				method: "POST",
				data: { username: username, otp: otp.join("") },
				url: API_ROUTES.VERIFY,
				withCredentials: true,
			});
			if (response?.data?.message) {
				toast(`${response.data.message}`, { type: "success" });
				localStorage.removeItem("temp");
				setTimeout(() => {
					navigate(APP_ROUTES.SIGN_IN);
				}, 3000);
			}
		} catch (err) {
			console.log(err);
			toast(`${err.response.data.message}`, { type: "error" });
		}
	};

	useEffect(() => {
		if (user) {
			toast("Bạn đã đăng nhập", { type: "info" });
			setTimeout(() => {
				navigate(APP_ROUTES.MATCH);
			}, 3000);
		}
	}, [user]);
	return (
		<div
			className="hero bg-base min-h-screen"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<Toast />
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card bg-base-100 w-full shrink-0 shadow-2xl">
					<div className="card-body">
						{showOtpInput ? (
							<form onSubmit={handleVerify} className="text-center">
								<h3 className="py-8 text-xl-center font-semibold">
									Nhập mã OTP đã được gửi tới email của bạn
								</h3>
								<OTPInput length={6} otp={otp} setOtp={setOtp} />
								<button type="submit" className="mt-8 btn btn-info btn-wide">
									Enter
								</button>
							</form>
						) : (
							<form onSubmit={handleShow}>
								<div className="text-center">
									<h1 className="text-5xl font-bold">Xác thực tài khoản</h1>
									<p className="py-6 text-opacity-75">
										Để nhận mã OTP, vui lòng nhập email của bạn
									</p>
								</div>
								<div className="w-full flex justify-center items-center mx-auto">
									<fieldset className="fieldset join text-center">
										<label className="input join-item">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
												/>
											</svg>

											<input
												type="email"
												placeholder="Email"
												className="input input-md grow"
												value={username}
												onChange={(e) => setUsername(e.target.value)}
											/>
										</label>
										<button type="submit" className="btn btn-ghost join-item">
											Nhập OTP
										</button>
									</fieldset>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OTPPage;
