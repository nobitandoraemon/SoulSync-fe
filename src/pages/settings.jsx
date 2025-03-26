import { useEffect, useState, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { toast } from "react-toastify";
import { API_ROUTES, APP_ROUTES } from "../lib/constants";
import { cn } from "../lib/utils";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import axios from "axios";
import { getTokenFromLocalStorage } from "../lib/common";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import dayjs from "dayjs";
import Toast from "../hooks/useToast";
import { VietnamProvinces, zodiacInfo } from "../lib/data";

const ChangeImage = ({ formData, setFormData }) => {
	const CloudinaryUploadWidget = ({
		uwConfig,
		setPublicId,
		formData,
		setFormData,
	}) => {
		const uploadWidgetRef = useRef(null);
		const uploadButtonRef = useRef(null);

		useEffect(() => {
			const initializeUploadWidget = () => {
				if (window.cloudinary && uploadButtonRef.current) {
					// Create upload widget
					uploadWidgetRef.current = window.cloudinary.createUploadWidget(
						uwConfig,
						(error, result) => {
							if (!error && result && result.event === "success") {
								console.log("Upload successful:", result.info);
								setFormData({ ...formData, image: result.info.secure_url });
								console.log(formData);
								setPublicId(result.info.public_id);
							}
						}
					);

					// Add click event to open widget
					const handleUploadClick = () => {
						if (uploadWidgetRef.current) {
							uploadWidgetRef.current.open();
						}
					};

					const buttonElement = uploadButtonRef.current;
					buttonElement.addEventListener("click", handleUploadClick);

					// Cleanup
					return () => {
						buttonElement.removeEventListener("click", handleUploadClick);
					};
				}
			};

			initializeUploadWidget();
		}, [uwConfig, setPublicId]);

		return (
			<button
				ref={uploadButtonRef}
				id="upload_widget"
				className="btn btn-primary btn-wide"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
					/>
				</svg>
				Upload
			</button>
		);
	};
	// Configuration
	const cloudName = "dbpqg1gsv";
	const uploadPreset = "soulsync";

	// State
	const [publicId, setPublicId] = useState("");

	// Cloudinary configuration
	const cld = new Cloudinary({
		cloud: {
			cloudName,
		},
	});

	// Upload Widget Configuration
	const uwConfig = {
		cloudName,
		uploadPreset,
		// Uncomment and modify as needed:
		cropping: true,
		showAdvancedOptions: true,
		sources: ["local", "url"],
		multiple: false,
		folder: "avatars",
		tags: ["users", "profile"],
		context: { alt: "user_uploaded" },
		// clientAllowedFormats: ["images"],
		maxImageFileSize: 2000000,
		// maxImageWidth: 2000,
		// theme: 'purple',
	};

	return (
		<div>
			<CloudinaryUploadWidget
				uwConfig={uwConfig}
				setPublicId={setPublicId}
				formData={formData}
				setFormData={setFormData}
			/>
		</div>
	);
};

const DangerZone = ({ user }) => {
	const [show, setShow] = useState(false);
	const token = getTokenFromLocalStorage();
	const handleDelete = async (e) => {
		e.preventDefault();

		try {
			const response = await axios({
				method: "DELETE",
				url: API_ROUTES.GET_USER + `/${user.username}`,
				headers: {
					authorization: `Bearer ${token}`,
				},
				withCredentials: true,
			});
			toast(response.data.message, { type: "success" });
			setTimeout(() => {
				location.reload();
			}, 1500);
		} catch (error) {
			toast(error.data.message, { type: "error" });
		}
	};
	return (
		<div
			className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg"
			id="danger"
			onSubmit={handleDelete}
		>
			<h2 className="pl-6 text-2xl font-bold sm:text-xl text-primary">
				Danger Zone
			</h2>

			<form className="grid max-w-2xl mx-auto mt-8">
				<div className="items-center mx-auto mt-8 sm:mt-14 md:mx-0">
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
								className="w-6 h-6 stroke-current shrink-0"
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
						<button type="submit" className="btn btn-error">
							Delete
						</button>
					</div>
				)}
			</form>
		</div>
	);
};

const Others = ({ user, formData, setFormData, handleSubmit }) => {
	const [userHobby, setUserHobby] = useState([]);
	const [hobbiesChange, setHobbiesChange] = useState(false);
	const [locationChange, setLocationChange] = useState(false);
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
	const Locations = VietnamProvinces.map((location) => {
		return (
			<option key={location} value={location}>
				{location}
			</option>
		);
	});
	const ChangeHobbies = ({
		user,
		userHobby,
		handleHobbyChange,
		formData,
		setFormData,
	}) => {
		return (
			<div className="flex flex-wrap items-center justify-center gap-1">
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
		<form
			className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg"
			onSubmit={handleSubmit}
			id="others"
		>
			<h2 className="pl-6 text-2xl font-bold sm:text-xl text-primary">
				Others
			</h2>

			<div className="grid max-w-2xl mx-auto">
				<div className="items-center mt-8 sm:mt-14">
					<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
						<div className="w-full mb-6">
							<fieldset className="fieldset">
								<legend className="w-full fieldset-legend text-primary">
									Số điện thoại của bạn
									<div className="btn btn-sm btn-accent btn-outline">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="size-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
											/>
										</svg>
									</div>
								</legend>
								<input
									type="number"
									className="input bg-secondary/10 text-neutral"
									minLength={10}
									maxLength={11}
									placeholder={user.phoneNumber}
									onChange={(e) =>
										setFormData({ ...formData, phoneNumber: e.target.value })
									}
								/>
							</fieldset>
						</div>
						<div className="w-full mb-6">
							<fieldset className="fieldset">
								<legend className="w-full fieldset-legend text-primary">
									Địa chỉ
									<button
										className={cn("btn btn-sm btn-outline", {
											"btn-warning": locationChange === false,
											"btn-success": locationChange === true,
										})}
										onClick={(e) => {
											e.preventDefault();
											setLocationChange((prev) => !prev);
										}}
									>
										{!locationChange ? "Sửa" : "Quay lại"}
									</button>
								</legend>
								{!locationChange && (
									<input
										type="text"
										className="input bg-secondary/10 text-neutral"
										placeholder={user.location}
									/>
								)}
								{locationChange && (
									<select
										className="select select-success"
										defaultChecked={user.location}
										onChange={(e) =>
											setFormData({ ...formData, location: e.target.value })
										}
									>
										{Locations}
									</select>
								)}
							</fieldset>
						</div>
					</div>
					<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
						<div className="flex flex-col gap-2">
							<fieldset className="w-full fieldset">
								<legend className="w-full fieldset-legend text-primary">
									Sở thích của bạn
									<button
										className={cn("btn btn-outline", {
											"btn-warning": hobbiesChange === false,
											"btn-success": hobbiesChange === true,
										})}
										onClick={(e) => {
											e.preventDefault();
											setHobbiesChange((prev) => !prev);
										}}
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
									<div className="flex flex-wrap items-center justify-center gap-1">
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

					<div className="w-full mb-6">
						<fieldset className="w-full fieldset">
							<legend className="fieldset-legend text-primary">
								Câu trích dẫn yêu thích của bạn
							</legend>
							<textarea
								className="w-full h-24 textarea bg-secondary/10 text-neutral"
								placeholder={user.quote}
								onChange={(e) =>
									setFormData({ ...formData, quote: e.target.value })
								}
							></textarea>
							<div className="fieldset-label text-secondary">Optional</div>
						</fieldset>
					</div>

					<div className="flex justify-end">
						<button type="submit" className="btn btn-primary">
							Lưu
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

const Public = ({ user, formData, setFormData, handleSubmit }) => {
	const [type, setType] = useState("text");

	const handleTemp = (e) => {
		e.preventDefault();
	};
	const DeleteImage = () => {
		setFormData({
			...formData,
			image:
				"https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
		});
	};
	return (
		<div
			className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg"
			id="public"
		>
			<h2 className="pl-6 text-2xl font-bold sm:text-xl text-primary">
				Public Profile
			</h2>

			<form className="grid max-w-2xl mx-auto mt-8" onSubmit={handleSubmit}>
				<div className="flex flex-col items-center justify-center space-y-5 md:justify-between sm:flex-row sm:space-y-0">
					<div className="avatar indicator">
						<span className="indicator-item badge badge-lg badge-soft badge-accent">
							{zodiacInfo[user.zodiac].icon}
							{zodiacInfo[user.zodiac].sign}
						</span>
						<div className="w-40 h-40 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
							{formData.image ? (
								<img src={formData.image} />
							) : (
								<img src={user.image} />
							)}
						</div>
					</div>

					<div className="flex flex-col space-y-5 sm:ml-8">
						<>
							<input
								type="text"
								name="avatar-link"
								placeholder="Avatar Link"
								className="hidden"
								required
								onChange={handleTemp}
							/>
							<ChangeImage formData={formData} setFormData={setFormData} />
						</>
						<button
							type="button"
							className="btn btn-primary btn-outline"
							onClick={DeleteImage}
						>
							Delete picture
						</button>
					</div>
				</div>

				<div className="items-center mx-auto mt-8 sm:mt-14 md:mx-0">
					<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
						<div className="w-full">
							<fieldset className="fieldset">
								<legend className="fieldset-legend text-primary">
									Tên của bạn
								</legend>
								<input
									type="text"
									className="input bg-secondary/10 text-neutral"
									placeholder={user.fullName}
									onChange={(e) =>
										setFormData({ ...formData, fullName: e.target.value })
									}
								/>
							</fieldset>
						</div>

						<div className="w-full">
							<fieldset className="fieldset">
								<legend className="fieldset-legend text-primary">
									Ngày sinh của bạn
								</legend>

								<input
									type={type}
									onFocus={() => setType("date")}
									onBlur={() => setType("text")}
									className="input bg-secondary/10 text-neutral validator"
									max="2010-12-31"
									onChange={(e) =>
										setFormData({ ...formData, birthday: e.target.value })
									}
									title="Must be valid URL"
									placeholder={
										formData.birthday
											? dayjs(formData.birthday).format("DD/MM/YYYY")
											: dayjs(user.birthday).format("DD/MM/YYYY")
									}
								/>
							</fieldset>
						</div>
					</div>

					<div className="items-center mt-8 sm:mt-14">
						<div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
							<div className="w-full">
								<fieldset className="fieldset">
									<legend className="fieldset-legend text-primary">
										Username
									</legend>
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
											className="font-bold"
											placeholder={user.username}
											disabled
										/>
										<span className="badge badge-warning badge-xs">
											Unavailable
										</span>
									</label>
								</fieldset>
							</div>
							<div className="w-full">
								<fieldset className="fieldset">
									<legend className="fieldset-legend text-primary">
										Giới tính
									</legend>
									<select
										defaultValue={user.gender}
										className="font-bold select"
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
						<button type="submit" className="btn btn-primary">
							Lưu
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

const SettingPage = () => {
	const [user] = useOutletContext();
	const navigate = useNavigate();
	const [id, setId] = useState(1);
	const [formData, setFormData] = useState({});
	const token = getTokenFromLocalStorage();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios({
				method: "PUT",
				url: API_ROUTES.GET_USER + `/${user.username}`,
				headers: {
					authorization: `Bearer ${token}`,
				},
				data: formData,
				withCredentials: true,
			});
			toast("Cập nhật thành công", { type: "success" });
			setTimeout(() => {
				location.reload();
			}, 1500);
		} catch (error) {
			console.error(error);
			toast("Cập nhật thành bại", { type: "error" });
		}
	};
	useEffect(() => {
		if (user) {
			console.log("Get user data successfully");
			if (!user.gender) {
				toast("Hãy nhập thông tin lần đầu tại form ...", {
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
		<div className="flex flex-col max-w-3xl min-h-screen gap-4 p-16 mx-auto">
			<Toast />
			<div className="w-full h-32 skeleton"></div>
			<div className="h-4 skeleton w-28"></div>
			<div className="w-full h-4 skeleton"></div>
			<div className="w-full h-4 skeleton"></div>
		</div>
	) : (
		<>
			<div className="flex flex-col w-full gap-5 px-3 bg-white md:px-16 lg:px-28 md:flex-row ">
				<Toast />
				<aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
					<div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
						<h2 className="pl-3 mb-4 text-2xl font-semibold text-primary">
							Settings
						</h2>

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
								setFormData={setFormData}
								handleSubmit={handleSubmit}
							/>
						)}
						{id === 2 && (
							<Others
								user={user}
								formData={formData}
								setFormData={setFormData}
								handleSubmit={handleSubmit}
							/>
						)}
						{id === 3 && (
							<DangerZone
								user={user}
								formData={formData}
								setFormData={setFormData}
							/>
						)}
					</div>
				</main>
			</div>
		</>
	);
};

export default SettingPage;
