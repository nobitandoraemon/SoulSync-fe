import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../lib/constants";
import { cn } from "../lib/utils";

const DangerZone = ({ user }) => {
	const [show, setShow] = useState(false);

	return (
		<div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
			<h2 className="pl-6 text-2xl font-bold sm:text-xl">Danger Zone</h2>

			<div className="grid max-w-2xl mx-auto mt-8">
				<div className="items-center mt-8 sm:mt-14 mx-auto md:mx-0">
					<div className="inline-grid *:[grid-area:1/1]">
						<div
							className={cn("status animate-ping", {
								"status-error": show === false,
								"status-warning": show === true,
							})}
						></div>
						<div
							className={cn("status", {
								"status-error": show === false,
								"status-warning": show === true,
							})}
						></div>
					</div>{" "}
					<a
						className={cn("link ml-4", {
							"link-error": show === false,
							"link-warning": show === true,
						})}
						onClick={() => setShow(!show)}
					>
						Xoá tài khoản vĩnh viễn
					</a>
				</div>
				{show && (
					<div className="flex flex-col gap-6 mt-8">
						<div role="alert" className="alert alert-warning">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 shrink-0 stroke-current"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
							<span>Cảnh báo: Toàn bộ dữ liệu của bạn có thể mất</span>
						</div>
						<button className="btn btn-error">Delete</button>
					</div>
				)}
			</div>
		</div>
	);
};

const Others = ({ user, formData, setFormData }) => {
	const [userHobby, setUserHobby] = useState([]);
	const [hobbiesChange, setHobbiesChange] = useState(false);
	const handleHobbyChange = (hobby) => {
		let updatedHobby;
		if (userHobby.includes(hobby)) {
			updatedHobby = userHobby.filter((h) => h !== hobby);
		} else {
			updatedHobby = [...userHobby, hobby];
		}
		setUserHobby(updatedHobby);
		setFormData({ ...formData, hobbies: updatedHobby });
	};
	const ChangeHobbies = ({
		user,
		userHobby,
		handleHobbyChange,
		formData,
		setFormData,
	}) => {
		return (
			<div className="flex gap-1 justify-center items-center flex-wrap">
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Games") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Games")}
				>
					🎮 Chơi Game
				</button>
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Reading") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Reading")}
				>
					📚 Đọc Sách
				</button>
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Painting") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Painting")}
				>
					🎨 Vẽ
				</button>
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Music") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Music")}
				>
					🎵 Nghe Nhạc
				</button>
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Photos") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Photos")}
				>
					📷 Chụp Ảnh
				</button>
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Cooking") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Cooking")}
				>
					🍳 Nấu Ăn
				</button>
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Travel") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Travel")}
				>
					✈️ Du Lịch
				</button>
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Garden") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Garden")}
				>
					🌱 Trồng Cây
				</button>
				<button
					type="button"
					className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
						userHobby.includes("Movies") ? "bg-gray-300" : "hover:bg-gray-200"
					}`}
					onClick={() => handleHobbyChange("Movies")}
				>
					🎥 Xem Phim
				</button>
			</div>
		);
	};

	return (
		<div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
			<h2 className="pl-6 text-2xl font-bold sm:text-xl">Others</h2>

			<div className="grid max-w-2xl mx-auto">
				<div className="items-center mt-8 sm:mt-14">
					<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
						<div className="flex flex-col gap-2">
							<fieldset className="fieldset w-full">
								<legend className="fieldset-legend w-full">
									Sở thích của bạn
									<button
										className="btn btn-info"
										onClick={() => setHobbiesChange((prev) => !prev)}
									>
										{!hobbiesChange ? "Sửa" : "Quay lại"}
									</button>
								</legend>
								{hobbiesChange ? (
									<ChangeHobbies
										user={user}
										userHobby={userHobby}
										handleHobbyChange={handleHobbyChange}
										formData={formData}
										setFormData={setFormData}
									/>
								) : (
									<div className="flex gap-1 justify-center items-center flex-wrap">
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Games")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
										>
											🎮 Chơi Game
										</button>
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Reading")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
										>
											📚 Đọc Sách
										</button>
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Painting")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
										>
											🎨 Vẽ
										</button>
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Music")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
											onClick={() => "Music"}
										>
											🎵 Nghe Nhạc
										</button>
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Photos")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
										>
											📷 Chụp Ảnh
										</button>
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Cooking")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
										>
											🍳 Nấu Ăn
										</button>
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Travel")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
										>
											✈️ Du Lịch
										</button>
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Garden")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
										>
											🌱 Trồng Cây
										</button>
										<button
											type="button"
											className={`w-[32%] text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
												user.hobbies.includes("Movies")
													? "bg-gray-300"
													: "hover:bg-gray-200"
											}`}
										>
											🎥 Xem Phim
										</button>
									</div>
								)}
							</fieldset>
						</div>
					</div>

					<div className="mb-6 w-full">
						<fieldset className="fieldset w-full">
							<legend className="fieldset-legend">
								Câu trích dẫn yêu thích của bạn
							</legend>
							<textarea
								className="textarea h-24 w-full"
								placeholder={user.quote}
							></textarea>
							<div className="fieldset-label">Optional</div>
						</fieldset>
					</div>

					<div className="flex justify-end">
						<button
							type="submit"
							className="py-3.5 px-7 cursor-pointer text-primary-content font-medium focus:outline-none bg-primary rounded-lg border border-indigo-200 hover:bg-secondary/60 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
						>
							Lưu
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Public = ({ user, formData, setFormData }) => {
	return (
		<div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
			<h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

			<div className="grid max-w-2xl mx-auto mt-8">
				<div className="flex flex-col items-center justify-center md:justify-between space-y-5 sm:flex-row sm:space-y-0">
					<div className="avatar">
						<div className="ring-primary ring-offset-base-100 w-40 h-40 avatar-online rounded-full ring ring-offset-2">
							<img src={user.image} />
						</div>
					</div>

					<div className="flex flex-col space-y-5 sm:ml-8">
						<button
							type="button"
							className="py-3.5 px-7 text-primary-content font-medium focus:outline-none bg-primary rounded-lg border border-indigo-200 hover:bg-secondary/60 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
						>
							Change picture
						</button>
						<button
							type="button"
							className="py-3.5 px-7 text-base font-medium text-primary focus:outline-none bg-base-100 rounded-lg border border-indigo-200 hover:bg-accent/60 hover:text-accent-content focus:z-10 focus:ring-4 focus:ring-indigo-200 "
						>
							Delete picture
						</button>
					</div>
				</div>

				<div className="items-center mt-8 sm:mt-14 mx-auto md:mx-0">
					<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
						<div className="w-full">
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Tên của bạn</legend>
								<input
									type="text"
									className="input"
									placeholder={user.fullName}
								/>
							</fieldset>
						</div>

						<div className="w-full">
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Ngày sinh của bạn</legend>

								<input
									type="date"
									className="input validator"
									max="2007-12-31"
									title="Must be valid URL"
								/>
							</fieldset>
						</div>
					</div>

					<div className="items-center mt-8 sm:mt-14">
						<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
							<div className="w-full">
								<fieldset className="fieldset">
									<legend className="fieldset-legend">Username</legend>
									<label className="input">
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
											type="text"
											className="grow"
											placeholder={user.username}
											disabled
										/>
										<span className="badge badge-neutral badge-xs">
											Unavailable
										</span>
									</label>
								</fieldset>
							</div>
							<div className="w-full">
								<fieldset className="fieldset">
									<legend className="fieldset-legend">Giới tính</legend>
									<select
										defaultValue={user.gender}
										className="select"
										disabled
									>
										<option>{user.gender}</option>
									</select>
									{/* <span className="fieldset-label">Unavailable</span> */}
								</fieldset>
							</div>
						</div>
					</div>

					<div className="flex justify-end mt-16">
						<button
							type="submit"
							className="py-3.5 px-7 cursor-pointer text-primary-content font-medium focus:outline-none bg-primary rounded-lg border border-indigo-200 hover:bg-secondary/60 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
						>
							Lưu
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const SettingPage = () => {
	const { user } = useOutletContext();
	const navigate = useNavigate();
	const [id, setId] = useState(1);
	const [formData, setFormData] = useState({});
	useEffect(() => {
		if (user) {
			console.log("Get user data successfully", user);
			if (!user.gender) {
				toast("Bạn thiếu thông tin để có thể phân tích dữ liệu ...", {
					type: "warning",
				});
				setTimeout(() => {
					navigate(APP_ROUTES.FORM);
				}, 2000);
			}
		} else {
			console.log("Get user data failed");
		}
	}, [user]);
	return !user ? (
		<div className="flex min-h-screen max-w-3xl p-16 mx-auto flex-col gap-4">
			<div className="skeleton h-32 w-full"></div>
			<div className="skeleton h-4 w-28"></div>
			<div className="skeleton h-4 w-full"></div>
			<div className="skeleton h-4 w-full"></div>
		</div>
	) : (
		<>
			<div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
				<aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
					<div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
						<h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

						<li
							onClick={() => setId(1)}
							className={cn(
								"flex items-center px-3 py-2.5 cursor-pointer font-semibold hover:text-primary hover:border hover:rounded-full",
								{
									"font-bold bg-white text-primary border rounded-full":
										id === 1,
								}
							)}
						>
							Pubic Profile
						</li>
						<li
							onClick={() => setId(2)}
							className={cn(
								"flex items-center px-3 py-2.5 cursor-pointer font-semibold hover:text-primary hover:border hover:rounded-full",
								{
									"font-bold bg-white text-primary border rounded-full":
										id === 2,
								}
							)}
						>
							Others
						</li>
						<li
							onClick={() => setId(3)}
							className={cn(
								"flex items-center px-3 py-2.5 cursor-pointer font-semibold hover:text-primary hover:border hover:rounded-full",
								{
									"font-bold bg-white text-primary border rounded-full":
										id === 3,
								}
							)}
						>
							Danger Zone
						</li>
					</div>
				</aside>
				<main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
					<div className="p-2 md:p-4">
						{id === 1 && (
							<Public
								user={user}
								formData={formData}
								setFormData={{ setFormData }}
							/>
						)}
						{id === 2 && (
							<Others
								user={user}
								formData={formData}
								setFormData={{ setFormData }}
							/>
						)}
						{id === 3 && (
							<DangerZone
								user={user}
								formData={formData}
								setFormData={{ setFormData }}
							/>
						)}
					</div>
				</main>
			</div>
		</>
	);
};

export default SettingPage;
