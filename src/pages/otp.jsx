import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useOutletContext } from "react-router";
import axios from "axios";
import { API_ROUTES, APP_ROUTES } from "../lib/constants";
import Toast from "../hooks/useToast";
import { cn } from "../lib/utils";
import OtpInput from "react-otp-input";

const OTPPage = () => {
	const [user] = useOutletContext();
	const [username, setUsername] = useState(localStorage.getItem("temp") || "");
	const [showOtpInput, setShowOtpInput] = useState(false);
	const [otp, setOtp] = useState();
	const [counter, setCounter] = useState(120);
	const [isRefresh, setIsRefresh] = useState(false);

	useEffect(() => {
		if (!isRefresh) {
			setCounter(120);
		}
		let timer = setInterval(() => {
			setCounter((time) => {
				if (time === 0) {
					clearInterval(timer);
					setIsRefresh(false);
					return 0;
				} else return time - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [isRefresh]);

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
				data: { username: username, otp: otp },
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
	const handleRefresh = async (e) => {
		e.preventDefault();
		setIsRefresh(true);

		try {
			const response = await axios({
				method: "POST",
				data: { username: username },
				url: API_ROUTES.RE_OTP,
				withCredentials: true,
			});
			if (response?.data?.message) {
				toast(`${response.data.message}`, { type: "success" });
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
			className="min-h-screen hero bg-base"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<Toast />
			<div className="flex-col lg:flex-row-reverse">
				<div className="shadow-2xl min-w-sm card bg-base-200 shrink-0">
					<div className="flex flex-col gap-4 px-2 py-6 md:p-8">
						{showOtpInput ? (
							<form onSubmit={handleVerify} className="text-center">
								<h3 className="py-8 font-semibold text-xl-center">
									Nhập mã OTP đã được gửi tới email của bạn
								</h3>
								<div className="flex items-center justify-center mx-auto">
									<OtpInput
										value={otp}
										onChange={setOtp}
										numInputs={6}
										// inputStyle={"input"}
										// inputType={"number"}
										renderSeparator={<span className="mx-0.5 md:mx-2"> </span>}
										renderInput={(props) => (
											<input
												{...props}
												// type="number"
												className="flex items-center justify-center h-24 p-2 overflow-auto text-3xl font-bold min-w-12 md:min-w-24 md:h-36 bg-neutral-content rounded-box text-neutral"
											/>
										)}
									/>
								</div>
								<button type="submit" className="mt-8 btn btn-warning btn-wide">
									Enter
								</button>
								<div className="flex flex-col items-center justify-center gap-4">
									<button
										onClick={handleRefresh}
										className={cn("mt-8 btn btn-info", {
											"btn-disabled": isRefresh,
										})}
									>
										Gửi lại mã OTP
									</button>
									{isRefresh && (
										<span className="font-semibold text-md text-warning">
											Lệnh gửi lại có hiệu lực sau{" "}
											<span className="font-bold animate-ping">{counter}</span>{" "}
											s
										</span>
									)}
								</div>
							</form>
						) : (
							<form onSubmit={handleShow}>
								<div className="text-center">
									<h1 className="text-5xl font-bold">Xác thực tài khoản</h1>
									<p className="py-6 text-opacity-75">
										Để nhận mã OTP, vui lòng nhập email của bạn
									</p>
								</div>
								<div className="flex items-center justify-center w-full mx-auto">
									<fieldset className="text-center fieldset join">
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
												required
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
