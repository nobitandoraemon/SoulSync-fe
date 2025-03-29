import { useState, useEffect } from "react";
import axios from "axios";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import { useNavigate } from "react-router";
import { getTokenFromLocalStorage, getUser } from "../lib/common";
import { toast } from "react-toastify";
import Upload from "../components/ui/upload";
import { VietnamProvinces, ZodiacSigns } from "../lib/data";
import {
	isPossiblePhoneNumber,
	isValidPhoneNumber,
	validatePhoneNumberLength,
} from "libphonenumber-js";
const CompletedBar = () => {
	return (
		<div className="w-[23%] h-3 bg-success rounded-full border border-success"></div>
	);
};

const NotCompletedBar = () => {
	return (
		<div className="w-[23%] h-3 bg-gray-300 rounded-full border border-gray-300"></div>
	);
};

const Locations = VietnamProvinces.map((location) => {
	return (
		<option key={location} value={location}>
			{location}
		</option>
	);
});

const TellUs = ({ setStep, formData, setFormData }) => {
	const [selectedGender, setSelectedGender] = useState(null);

	const handleNameChange = (e) => {
		setFormData({ ...formData, fullName: e.target.value });
	};

	const handleGenderChange = (gender) => {
		setSelectedGender(gender);
		setFormData({ ...formData, gender: gender });
	};

	const handleLocationChange = (e) => {
		setFormData({ ...formData, location: e.target.value });
	};

	const Submit1 = (e) => {
		e.preventDefault();
		// console.log(formData);
		if (e.target.checkValidity() && formData.gender) {
			setStep(2);
		} else alert("Choose your gender");
	};

	return (
		<div>
			<h1 className="mt-4 font-sans text-3xl font-bold text-primary">
				Nói một chút về bạn...
			</h1>
			<form className="flex flex-col gap-8 mt-10" onSubmit={Submit1}>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Tên bạn là gì ?</legend>
					<input
						type="text"
						className="w-full input"
						required
						value={formData.fullname}
						onChange={handleNameChange}
						placeholder="Tên của bạn"
					/>
					<p className="fieldset-label">Bắt buộc</p>
				</fieldset>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Bạn thuộc giới tính nào ?</legend>
					<div className="flex gap-1 ">
						<button
							type="button"
							className={`w-1/2 btn btn-neutral btn-outline ${
								selectedGender === "Male" ? "btn-active" : "hover:btn-outline"
							}`}
							onClick={() => handleGenderChange("Male")}
							value="Male"
						>
							<span className="text-md">👨 Nam</span>
						</button>

						<button
							type="button"
							className={`w-1/2 btn btn-primary btn-outline ${
								selectedGender === "Female" ? "btn-active" : "hover:btn-outline"
							}`}
							onClick={() => handleGenderChange("Female")}
							value="Female"
						>
							<span className="text-md">👩 Nữ</span>
						</button>
					</div>
				</fieldset>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Bạn đang sống ở đâu ?</legend>
					<select
						className="w-full select select-neutral"
						value={formData.location}
						onChange={handleLocationChange}
					>
						{Locations}
					</select>
				</fieldset>
				<button type="submit" className="w-full btn btn-success">
					Tiếp theo
				</button>
			</form>
		</div>
	);
};

const Address = ({ setStep, formData, setFormData }) => {
	const Submit2 = (e) => {
		e.preventDefault();
		// console.log(formData);
		if (!formData.phoneNumber) {
			const check = isPossiblePhoneNumber(formData.phoneNumber, "VN");
			if (check) {
				if (e.target.checkValidity()) {
					setStep(3);
				}
			} else {
				alert("Số điện thoại không hợp lệ");
			}
		}
	};

	const handleTelChange = (e) => {
		setFormData({ ...formData, phoneNumber: e.target.value });
	};
	const handleNickNameChange = (e) => {
		setFormData({ ...formData, nickName: e.target.value });
	};

	const handleQuoteChange = (e) => {
		setFormData({ ...formData, quote: e.target.value });
	};

	return (
		<div>
			<h1 className="mt-4 font-sans text-3xl font-bold text-primary">
				Cho chúng tôi biết nhiều hơn về bạn...
			</h1>
			<form className="flex flex-col gap-6 mt-10" onSubmit={Submit2}>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Mình nên gọi bạn là gì ?</legend>
					<input
						type="text"
						placeholder="Nickname"
						className="w-full input"
						value={formData.nickName}
						onChange={handleNickNameChange}
					/>
					<p className="fieldset-label">Tuỳ chọn</p>
				</fieldset>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">
						Số điện thoại của bạn là gì ?
					</legend>
					<input
						type="number"
						placeholder="Số điện thoại"
						minLength={9}
						maxLength={11} // Cập nhật maxLength thành 11
						className="w-full input"
						required
						value={formData.phoneNumber}
						onChange={handleTelChange}
					/>
				</fieldset>

				<fieldset className="fieldset">
					<legend className="fieldset-legend">
						Câu nói yêu thích của bạn là gì?
					</legend>
					<textarea
						type="text"
						placeholder="Quote"
						className="w-full textarea"
						value={formData.quote}
						onChange={handleQuoteChange}
					/>
					<p className="fieldset-label">Tuỳ chọn</p>
				</fieldset>

				<div className="flex justify-between">
					<button
						type="button"
						className="w-1/2 btn btn-error "
						onClick={() => setStep(1)}
					>
						Trở lại
					</button>
					<button type="submit" className="w-1/2 btn btn-success">
						Tiếp theo
					</button>
				</div>
			</form>
		</div>
	);
};

const BirthDate = ({ setStep, formData, setFormData }) => {
	const [type, setType] = useState("text");
	const submitBirthDate = (e) => {
		e.preventDefault();
		// console.log(formData);
		if (e.target.checkValidity()) {
			const formdata = new FormData(e.target);
			const formValues = Object.fromEntries(formdata.entries());
			const Dates = formValues.date;
			setStep(4);
		}
	};

	const [userHobby, setUserHobby] = useState([]);

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
	const handleBirthChange = (e) => {
		setFormData({ ...formData, birthday: e.target.value });
	};

	const avatarLinkChange = (url) => {
		setFormData({ ...formData, image: url });
	};

	const handleTemp = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h1 className="mt-4 font-sans text-3xl font-bold text-primary">
				Còn một vài điều nữa thôi...
			</h1>
			<form className="flex flex-col gap-8 mt-10" onSubmit={submitBirthDate}>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Ngày sinh của bạn là gì? </legend>
					<input
						type={type}
						onFocus={() => setType("date")}
						onBlur={() => setType("text")}
						name="date"
						placeholder="Birth Date"
						className="w-full input validator"
						max="2010-12-31"
						required
						value={formData.birthday}
						onChange={handleBirthChange}
					/>
				</fieldset>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Sở thích của bạn là gì?</legend>
					<div className="flex flex-wrap items-center justify-center gap-1">
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Games") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Games")}
						>
							🎮 Chơi Game
						</button>
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Reading") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Reading")}
						>
							📚 Đọc Sách
						</button>
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Painting") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Painting")}
						>
							🎨 Vẽ
						</button>
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Music") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Music")}
						>
							🎵 Nghe Nhạc
						</button>
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Photos") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Photos")}
						>
							📷 Chụp Ảnh
						</button>
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Cooking") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Cooking")}
						>
							🍳 Nấu Ăn
						</button>
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Travel") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Travel")}
						>
							✈️ Du Lịch
						</button>
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Garden") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Garden")}
						>
							🌱 Trồng Cây
						</button>
						<button
							type="button"
							className={`w-[32%] btn btn-soft ${
								userHobby.includes("Movies") && "btn-active btn-primary"
							}`}
							onClick={() => handleHobbyChange("Movies")}
						>
							🎥 Xem Phim
						</button>
					</div>
					<div className="flex items-center justify-between mt-8">
						<div className="chat chat-start">
							<div className="chat-image avatar">
								<div className="w-10 rounded-full">
									<img
										alt="default avatar"
										src={
											formData.image
												? formData.image
												: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
										}
									/>
								</div>
							</div>
							<div className="chat-bubble">
								{formData.image !==
								"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									? "Wow! Bạn đã chắc chắn với bức ảnh lung linh này chưa?"
									: "Đặt ảnh đại diện ngay để tạo ấn tượng với mọi người"}
							</div>
						</div>
						<form action="#">
							<input
								type="text"
								name="avatar-link"
								placeholder="Avatar Link"
								className="hidden"
								required
								onChange={handleTemp}
							/>
							<Upload avatarLinkChange={avatarLinkChange} />
						</form>
					</div>

					{formData.image !==
						"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" && (
						<button
							className="mt-4 btn btn-warning"
							onClick={() =>
								avatarLinkChange(
									"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								)
							}
						>
							Đặt lại
						</button>
					)}
					<div className="flex justify-between mt-6">
						<button
							type="button"
							className="w-1/2 btn btn-error "
							onClick={() => setStep(2)}
						>
							Back
						</button>
						<button type="submit" className="w-1/2 btn btn-success">
							Next
						</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
};
const ShowPersonality = ({ setStep, formData, setFormData }) => {
	const DateArray = formData.birthday.split("-");
	const Month = DateArray[1];
	const Day = DateArray[2];
	const StringNumber = `${Month}.${Day}`;
	const Indicator = Number(StringNumber);

	let i = 0;
	if (formData.gender === "Male") {
		if (Indicator >= 3.21 && Indicator <= 4.19) {
			i = 1;
		} else if (Indicator >= 4.2 && Indicator <= 5.2) {
			i = 3;
		} else if (Indicator >= 5.21 && Indicator <= 6.2) {
			i = 5;
		} else if (Indicator >= 6.21 && Indicator <= 7.22) {
			i = 7;
		} else if (Indicator >= 7.23 && Indicator <= 8.22) {
			i = 9;
		} else if (Indicator >= 8.23 && Indicator <= 9.22) {
			i = 11;
		} else if (Indicator >= 9.23 && Indicator <= 10.22) {
			i = 13;
		} else if (Indicator >= 10.23 && Indicator <= 11.21) {
			i = 15;
		} else if (Indicator >= 11.22 && Indicator <= 12.21) {
			i = 17;
		} else if (
			(Indicator >= 12.22 && Indicator <= 12.31) ||
			(Indicator >= 1.01 && Indicator <= 1.19)
		) {
			i = 19;
		} else if (Indicator >= 1.2 && Indicator <= 2.18) {
			i = 21;
		} else if (Indicator >= 2.19 && Indicator <= 3.2) {
			i = 23;
		}
	} else if (formData.gender === "Female") {
		if (Indicator >= 3.21 && Indicator <= 4.19) {
			i = 2;
		} else if (Indicator >= 4.2 && Indicator <= 5.2) {
			i = 4;
		} else if (Indicator >= 5.21 && Indicator <= 6.2) {
			i = 6;
		} else if (Indicator >= 6.21 && Indicator <= 7.22) {
			i = 8;
		} else if (Indicator >= 7.23 && Indicator <= 8.22) {
			i = 10;
		} else if (Indicator >= 8.23 && Indicator <= 9.22) {
			i = 12;
		} else if (Indicator >= 9.23 && Indicator <= 10.22) {
			i = 14;
		} else if (Indicator >= 10.23 && Indicator <= 11.21) {
			i = 16;
		} else if (Indicator >= 11.22 && Indicator <= 12.21) {
			i = 18;
		} else if (
			(Indicator >= 12.22 && Indicator <= 12.31) ||
			(Indicator >= 1.01 && Indicator <= 1.19)
		) {
			i = 20;
		} else if (Indicator >= 1.2 && Indicator <= 2.18) {
			i = 22;
		} else if (Indicator >= 2.19 && Indicator <= 3.2) {
			i = 24;
		}
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedFormData = { ...formData, zodiac: i };
		setFormData(updatedFormData);

		const token = getTokenFromLocalStorage();
		const username = localStorage.getItem("username");
		try {
			const response = await axios({
				method: "PUT",
				url: API_ROUTES.GET_USER + `/${username}`,
				headers: {
					authorization: `Bearer ${token}`,
					"Content-Type": "application/json", // Nếu gửi JSON
				},
				data: updatedFormData, // Đặt data ở đây
				withCredentials: true,
			});
			toast("Cập nhật thông tin thành công", { type: "success" });
		} catch (err) {
			toast(err.response.data.message, { type: "error" });
			console.log(err);
		}
		setStep(5);
	};

	return (
		<div>
			<div className="flex flex-col items-center mt-5 text-center">
				<h1 className="mx-auto text-xl font-bold text-primary">
					Tính cách của bạn dựa trên ngày sinh và cung hoàng đạo
				</h1>

				<div className="text-4xl">{ZodiacSigns[i - 1].symbol}</div>

				<h2 className="mt-2 text-3xl font-semibold">
					{ZodiacSigns[i - 1].name}
				</h2>

				<p className="text-secondary">{ZodiacSigns[i - 1].dates}</p>

				<p className="mt-2 text-lg font-medium">
					<span className="mr-2 text-xl text-primary">Nguyên tố:</span>{" "}
					{ZodiacSigns[i - 1].element}
				</p>
				<div className="mt-4">
					<h3 className="text-xl font-semibold text-primary">
						Đặc điểm tính cách:
					</h3>

					<p className="mt-2 text-base-content">
						{ZodiacSigns[i - 1].personality.join(", ")}
					</p>
				</div>
				<div className="mt-4">
					<h3 className="text-xl font-semibold text-primary">Miêu tả:</h3>

					<p className="mt-2 tracking-wider text-center whitespace-break-spaces text-base-content">
						{ZodiacSigns[i - 1].description}
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center w-full mt-8">
				<button
					type="button"
					className="w-1/2 btn btn-error"
					onClick={() => {
						setStep(3);
					}}
				>
					Trở lại
				</button>
				<button
					type="submit"
					className="w-1/2 btn btn-success"
					onClick={handleSubmit}
				>
					Xác nhận
				</button>
			</div>
		</div>
	);
};

const ThankYou = ({ setStep, formData, setFormData }) => {
	const navigate = useNavigate(); // Initialize the navigate function

	const handleSubmitForm = () => {
		console.log(formData);
		window.location.href = "/match"; // Navigate to the MATCH
	};

	return (
		<div className="flex flex-col">
			<h1 className="my-16 text-lg font-bold text-center text-primary">
				Cảm ơn bạn vì đã cập nhật thông tin cá nhân
			</h1>
			<button
				type="submit"
				className="w-full btn btn-success"
				onClick={handleSubmitForm} // Call handleSubmit on button click
			>
				Tiếp theo
			</button>
		</div>
	);
};

const ProfileForm = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		birthday: "",
		gender: "",
		zodiac: "",
		nickName: "",
		location: "An Giang",
		fullName: "",
		phoneNumber: "",
		hobbies: "",
		image:
			"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
		quote: "",
	});

	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<TellUs
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 2:
				return (
					<Address
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 3:
				return (
					<BirthDate
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 4:
				return (
					<ShowPersonality
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 5:
				return (
					<ThankYou
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			default:
				return (
					<TellUs
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
		}
	};

	const RenderProgressBar = () => {
		const bars = [];
		for (let i = 1; i < 5; i++) {
			if (i < step) {
				bars.push(<CompletedBar key={i} />);
			} else {
				bars.push(<NotCompletedBar key={i} />);
			}
		}
		return bars;
	};

	return (
		<div className="lg:w-1/3 mx-auto my-4 p-4 lg:min-w-[500px]">
			<div className="p-6 shadow-md bg-base-200 rounded-3xl">
				<div className="flex justify-center gap-5">{RenderProgressBar()}</div>
				{renderStep()}
			</div>
		</div>
	);
};

export default ProfileForm;
