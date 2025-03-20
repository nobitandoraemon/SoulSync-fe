import { useState, useEffect } from "react";
import axios from "axios";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import { useNavigate } from "react-router";
import { getTokenFromLocalStorage, getUser } from "../lib/common";
import { toast } from "react-toastify";
import { useUser } from "../hooks/useUser";

const VietnamProvinces = [
	"An Giang",
	"Ba Ria - Vung Tau",
	"Bac Giang",
	"Bac Kan",
	"Bac Lieu",
	"Bac Ninh",
	"Ben Tre",
	"Binh Dinh",
	"Binh Duong",
	"Binh Phuoc",
	"Binh Thuan",
	"Ca Mau",
	"Can Tho",
	"Cao Bang",
	"Da Nang",
	"Dak Lak",
	"Dak Nong",
	"Dien Bien",
	"Dong Nai",
	"Dong Thap",
	"Gia Lai",
	"Ha Giang",
	"Ha Nam",
	"Hanoi",
	"Ha Tinh",
	"Hai Duong",
	"Hai Phong",
	"Hau Giang",
	"Hoa Binh",
	"Hung Yen",
	"Khanh Hoa",
	"Kien Giang",
	"Kon Tum",
	"Lai Chau",
	"Lam Dong",
	"Lang Son",
	"Lao Cai",
	"Long An",
	"Nam Dinh",
	"Nghe An",
	"Ninh Binh",
	"Ninh Thuan",
	"Phu Tho",
	"Phu Yen",
	"Quang Binh",
	"Quang Nam",
	"Quang Ngai",
	"Quang Ninh",
	"Quang Tri",
	"Soc Trang",
	"Son La",
	"Tay Ninh",
	"Thai Binh",
	"Thai Nguyen",
	"Thanh Hoa",
	"Thua Thien Hue",
	"Tien Giang",
	"Ho Chi Minh City",
	"Tra Vinh",
	"Tuyen Quang",
	"Vinh Long",
	"Vinh Phuc",
	"Yen Bai",
];

const ZodiacSigns = [
	// Men
	{
		// 0
		name: "Aries",
		gender: "Male",
		symbol: "♈",
		dates: "March 21 - April 19",
		element: "Fire",
		personality: ["Energetic", "Courageous", "Impulsive", "Leader"],
		description:
			"Aries men are bold and adventurous, always ready to take charge and face challenges head-on.",
	},
	{
		// 1
		name: "Taurus",
		gender: "Male",
		symbol: "♉",
		dates: "April 20 - May 20",
		element: "Earth",
		personality: ["Loyal", "Determined", "Patient", "Stubborn"],
		description:
			"Taurus men are strong and reliable, valuing stability and comfort in life.",
	},
	{
		// 2
		name: "Gemini",
		gender: "Male",
		symbol: "♊",
		dates: "May 21 - June 20",
		element: "Air",
		personality: ["Witty", "Curious", "Versatile", "Restless"],
		description:
			"Gemini men are intelligent and adaptable, always looking for new experiences and conversations.",
	},
	{
		// 3
		name: "Cancer",
		gender: "Male",
		symbol: "♋",
		dates: "June 21 - July 22",
		element: "Water",
		personality: ["Emotional", "Protective", "Caring", "Sensitive"],
		description:
			"Cancer men are deeply intuitive and nurturing, prioritizing family and close relationships.",
	},
	{
		// 4
		name: "Leo",
		gender: "Male",
		symbol: "♌",
		dates: "July 23 - August 22",
		element: "Fire",
		personality: ["Confident", "Charismatic", "Generous", "Proud"],
		description:
			"Leo men are natural leaders who thrive on attention and admiration.",
	},
	{
		// 5
		name: "Virgo",
		gender: "Male",
		symbol: "♍",
		dates: "August 23 - September 22",
		element: "Earth",
		personality: ["Analytical", "Hardworking", "Practical", "Perfectionist"],
		description:
			"Virgo men are detail-oriented and disciplined, always striving for excellence.",
	},
	{
		// 6
		name: "Libra",
		gender: "Male",
		symbol: "♎",
		dates: "September 23 - October 22",
		element: "Air",
		personality: ["Charming", "Diplomatic", "Romantic", "Indecisive"],
		description:
			"Libra men seek harmony and balance, valuing relationships and social connections.",
	},
	{
		// 7
		name: "Scorpio",
		gender: "Male",
		symbol: "♏",
		dates: "October 23 - November 21",
		element: "Water",
		personality: ["Passionate", "Determined", "Mysterious", "Intense"],
		description:
			"Scorpio men are deeply emotional and ambitious, with a strong sense of loyalty.",
	},
	{
		// 8
		name: "Sagittarius",
		gender: "Male",
		symbol: "♐",
		dates: "November 22 - December 21",
		element: "Fire",
		personality: ["Adventurous", "Optimistic", "Independent", "Honest"],
		description:
			"Sagittarius men love exploring and have a free-spirited nature, always seeking the truth.",
	},
	{
		// 9
		name: "Capricorn",
		gender: "Male",
		symbol: "♑",
		dates: "December 22 - January 19",
		element: "Earth",
		personality: ["Disciplined", "Responsible", "Ambitious", "Practical"],
		description:
			"Capricorn men are hardworking and goal-oriented, valuing success and perseverance.",
	},
	{
		// 10
		name: "Aquarius",
		gender: "Male",
		symbol: "♒",
		dates: "January 20 - February 18",
		element: "Air",
		personality: ["Innovative", "Independent", "Humanitarian", "Unpredictable"],
		description:
			"Aquarius men are forward-thinking and unique, always striving to make the world a better place.",
	},
	{
		// 11
		name: "Pisces",
		gender: "Male",
		symbol: "♓",
		dates: "February 19 - March 20",
		element: "Water",
		personality: ["Compassionate", "Creative", "Intuitive", "Dreamy"],
		description:
			"Pisces men are deeply emotional and artistic, often lost in their own world of imagination.",
	},

	// Women
	{
		// 12
		name: "Aries",
		gender: "Female",
		symbol: "♈",
		dates: "March 21 - April 19",
		element: "Fire",
		personality: ["Confident", "Bold", "Independent", "Passionate"],
		description:
			"Aries women are fearless and energetic, always chasing their dreams with enthusiasm.",
	},
	{
		// 13
		name: "Taurus",
		gender: "Female",
		symbol: "♉",
		dates: "April 20 - May 20",
		element: "Earth",
		personality: ["Patient", "Strong-willed", "Loyal", "Sensual"],
		description:
			"Taurus women value stability and comfort, with a strong sense of determination.",
	},
	{
		// 14
		name: "Gemini",
		gender: "Female",
		symbol: "♊",
		dates: "May 21 - June 20",
		element: "Air",
		personality: ["Intelligent", "Charming", "Adaptable", "Curious"],
		description:
			"Gemini women are lively and sociable, always eager to learn and experience new things.",
	},
	{
		// 15
		name: "Cancer",
		gender: "Female",
		symbol: "♋",
		dates: "June 21 - July 22",
		element: "Water",
		personality: ["Nurturing", "Emotional", "Loyal", "Intuitive"],
		description:
			"Cancer women are compassionate and deeply connected to their emotions and loved ones.",
	},
	{
		// 16
		name: "Leo",
		gender: "Female",
		symbol: "♌",
		dates: "July 23 - August 22",
		element: "Fire",
		personality: ["Charismatic", "Proud", "Generous", "Confident"],
		description:
			"Leo women shine with confidence and love being the center of attention.",
	},
	{
		// 17
		name: "Virgo",
		gender: "Female",
		symbol: "♍",
		dates: "August 23 - September 22",
		element: "Earth",
		personality: ["Organized", "Analytical", "Hardworking", "Practical"],
		description:
			"Virgo women are detail-oriented and intelligent, always striving for perfection.",
	},
	{
		// 18
		name: "Libra",
		gender: "Female",
		symbol: "♎",
		dates: "September 23 - October 22",
		element: "Air",
		personality: ["Graceful", "Diplomatic", "Charming", "Fair-minded"],
		description:
			"Libra women seek harmony and beauty in all aspects of life, with a natural charm.",
	},
	{
		// 19
		name: "Scorpio",
		gender: "Female",
		symbol: "♏",
		dates: "October 23 - November 21",
		element: "Water",
		personality: ["Passionate", "Determined", "Mysterious", "Intense"],
		description:
			"Scorpio women are powerful and magnetic, drawing people in with their depth and passion.",
	},
	{
		// 20
		name: "Sagittarius",
		gender: "Female",
		symbol: "♐",
		dates: "November 22 - December 21",
		element: "Fire",
		personality: ["Adventurous", "Optimistic", "Independent", "Honest"],
		description:
			"Sagittarius women are free-spirited and love to explore new horizons.",
	},
	{
		// 21
		name: "Capricorn",
		gender: "Female",
		symbol: "♑",
		dates: "December 22 - January 19",
		element: "Earth",
		personality: ["Disciplined", "Responsible", "Ambitious", "Practical"],
		description:
			"Capricorn women are hardworking and value security and stability.",
	},
	{
		// 22
		name: "Aquarius",
		gender: "Female",
		symbol: "♒",
		dates: "January 20 - February 18",
		element: "Air",
		personality: ["Innovative", "Independent", "Humanitarian", "Unpredictable"],
		description:
			"Aquarius women are visionary and unique, often ahead of their time.",
	},
	{
		// 23
		name: "Pisces",
		gender: "Female",
		symbol: "♓",
		dates: "February 19 - March 20",
		element: "Water",
		personality: ["Compassionate", "Creative", "Intuitive", "Dreamy"],
		description:
			"Pisces women are deeply imaginative and empathetic, often drawn to artistic pursuits.",
	},
];

const CompletedBar = () => {
	return (
		<div className="w-[23%] h-3 bg-blue-700 rounded-full border border-blue-700"></div>
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
		setFormData({ ...formData, fullname: e.target.value });
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
		if (e.target.checkValidity() && selectedGender !== null) {
			setStep(2);
		} else alert("Choose your gender");
	};

	return (
		<div>
			<h1 className="mt-4 font-sans text-3xl font-bold ">
				Tell us more about you...
			</h1>
			<form className="flex flex-col gap-8 mt-10" onSubmit={Submit1}>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">What's your name?</h2>
					<div className="">
						<input
							type="text"
							placeholder="Name"
							className="flex items-center w-full gap-2 px-4 py-2 bg-white border rounded-full shadow-md "
							required
							value={formData.fullname}
							onChange={handleNameChange}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">What's your gender?</h2>
					<div className="flex gap-1 ">
						<button
							type="button"
							className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
								selectedGender === "Male" ? "bg-gray-300" : "hover:bg-gray-200"
							}`}
							onClick={() => handleGenderChange("Male")}
							value="Male"
						>
							👨 Male
						</button>

						<button
							type="button"
							className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
								selectedGender === "Female"
									? "bg-gray-300"
									: "hover:bg-gray-200"
							}`}
							onClick={() => handleGenderChange("Female")}
							value="Female"
						>
							👩 Female
						</button>

						<button
							type="button"
							className={`w-1/3 text-black font-semibold border border-gray-300 rounded-full p-3 cursor-pointer ${
								selectedGender === "Other" ? "bg-gray-300" : "hover:bg-gray-200"
							}`}
							onClick={() => handleGenderChange("Other")}
							value="Other"
						>
							✨ Other
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">What's your location?</h2>
					<select
						className="w-full px-4 py-2 bg-white border rounded-full shadow-md "
						value={formData.location}
						onChange={handleLocationChange}
					>
						{Locations}
					</select>
				</div>
				<button
					type="submit"
					className="w-full px-4 py-2 mt-8 text-white bg-green-500 border rounded-full shadow-md hover:bg-red-300"
				>
					Next
				</button>
			</form>
		</div>
	);
};

const Address = ({ setStep, formData, setFormData }) => {
	const Submit2 = (e) => {
		e.preventDefault();
		// console.log(formData);
		if (e.target.checkValidity()) {
			setStep(3);
		}
	};

	const handleTelChange = (e) => {
		setFormData({ ...formData, phoneNumber: e.target.value });
	};

	return (
		<div>
			<h1 className="mt-4 font-sans text-3xl font-bold ">
				Tell us more about you...
			</h1>
			<form className="flex flex-col gap-8 mt-10" onSubmit={Submit2}>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">What should we call you? (Optional)</h2>
					<input
						type="text"
						placeholder="Nickname"
						className="w-full px-4 py-2 bg-white border rounded-full shadow-md "
					/>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">What's your mobile number ?</h2>
					<input
						type="number"
						placeholder="Mobile Number"
						className="w-full px-4 py-2 bg-white border rounded-full shadow-md "
						required
						value={formData.phoneNumber}
						onChange={handleTelChange}
					/>
				</div>
				<div className="flex justify-between">
					<button
						type="button"
						className="w-1/2 w-full px-4 py-2 mt-8 text-white bg-red-600 border rounded-full shadow-md hover:bg-red-300"
						onClick={() => setStep(1)}
					>
						Back
					</button>
					<button
						type="submit"
						className="w-1/2 w-full px-4 py-2 mt-8 text-white bg-green-600 border rounded-full shadow-md hover:bg-green-300"
					>
						Next
					</button>
				</div>
			</form>
		</div>
	);
};

const BirthDate = ({ setStep, formData, setFormData }) => {
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

	const handleBirthChange = (e) => {
		setFormData({ ...formData, birthday: e.target.value });
	};

	const handleHobbyChange = (e) => {
		setFormData({ ...formData, hobby: e.target.value });
	};

	return (
		<div>
			<h1 className="mt-4 font-sans text-3xl font-bold ">
				Tell us more about you...
			</h1>
			<form className="flex flex-col gap-8 mt-10" onSubmit={submitBirthDate}>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">What's your birth date ?</h2>
					<input
						type="date"
						name="date"
						placeholder="Birth Date"
						className="w-full px-4 py-2 bg-white border rounded-full shadow-md "
						required
						value={formData.birthday}
						onChange={handleBirthChange}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-sm">What's your hobby ? (Optional)</h2>
					<input
						type="text"
						name="hobby"
						placeholder="Your Hobby"
						className="w-full px-4 py-2 bg-white border rounded-full shadow-md "
						required
						value={formData.hobby}
						onChange={handleHobbyChange}
					/>
					<div className="flex justify-between">
						<button
							type="button"
							className="w-full px-4 py-2 mt-8 text-white bg-red-600 border rounded-full shadow-md hover:bg-red-300"
							onClick={() => setStep(2)}
						>
							Back
						</button>
						<button
							type="submit"
							className="w-full px-4 py-2 mt-8 text-white bg-green-600 border rounded-full shadow-md hover:bg-green-300"
						>
							Next
						</button>
					</div>
				</div>
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
		if (Indicator >= 4.2 && Indicator <= 5.2) {
			i = 1;
		} else if (Indicator >= 5.21 && Indicator <= 6.2) {
			i = 3;
		} else if (Indicator >= 6.21 && Indicator <= 7.22) {
			i = 5;
		} else if (Indicator >= 7.23 && Indicator <= 8.22) {
			i = 7;
		} else if (Indicator >= 8.23 && Indicator <= 9.22) {
			i = 9;
		} else if (Indicator >= 9.23 && Indicator <= 10.22) {
			i = 11;
		} else if (Indicator >= 10.23 && Indicator <= 11.21) {
			i = 13;
		} else if (Indicator >= 11.22 && Indicator <= 12.21) {
			i = 15;
		} else if (
			(Indicator >= 12.22 && Indicator <= 12.31) ||
			(Indicator >= 1.01 && Indicator <= 1.19)
		) {
			i = 17;
		} else if (Indicator >= 1.2 && Indicator <= 2.18) {
			i = 19;
		} else if (Indicator >= 2.19 && Indicator <= 3.2) {
			i = 21;
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
		console.log(updatedFormData);
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
			// console.log(response);
		} catch (err) {
			toast(err.response.data.message, { type: "error" });
			console.log(err);
		}
		setStep(5);
	};

	return (
		<div>
			<div className="flex flex-col items-center mt-5 text-center">
				<h1 className="mx-auto text-xl font-bold text-blue-600">
					Your Personality Analysis Based on Your Birth Date
				</h1>

				<div className="text-4xl font-bold">{ZodiacSigns[i].symbol}</div>

				<h2 className="mt-2 text-2xl font-semibold">{ZodiacSigns[i].name}</h2>

				<p className="text-gray-500">{ZodiacSigns[i].dates}</p>

				<p className="mt-2 text-lg font-medium">
					<span className="text-[#f877dd] mr-2">Element:</span>{" "}
					{ZodiacSigns[i].element}
				</p>
				<div className="mt-4">
					<h3 className="text-[#f877dd] font-semibold">Personality Traits:</h3>

					<p className="text-gray-700">
						{ZodiacSigns[i].personality.join(", ")}
					</p>
				</div>
				<div className="mt-4">
					<h3 className="text-[#f877dd] font-semibold">Description:</h3>

					<p className="text-gray-700">{ZodiacSigns[i].description}</p>
				</div>
			</div>
			<div className="flex justify-between">
				<button
					type="button"
					className="w-1/2 w-full px-4 py-2 mt-8 text-white bg-red-600 border rounded-full shadow-md hover:bg-red-300"
					onClick={() => {
						setStep(3);
					}}
				>
					Back
				</button>
				<button
					type="submit"
					className="w-1/2 w-full px-4 py-2 mt-8 text-white bg-green-600 border rounded-full shadow-md hover:bg-green-300"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

const ThankYou = ({ setStep, formData, setFormData }) => {
	const navigate = useNavigate(); // Initialize the navigate function

	const handleSubmitForm = () => {
		// console.log(formData);
		navigate(APP_ROUTES.CHAT); // Navigate to the CHAT page
	};

	return (
		<div className="gap-5 flex-flex-col">
			<h1 className="mt-8 text-lg font-bold text-center text-green-500">
				Thank you for updating your information
			</h1>
			<button
				type="submit"
				className="w-full px-4 py-2 mt-8 text-white bg-green-600 border rounded-full shadow-md hover:bg-green-300"
				onClick={handleSubmitForm} // Call handleSubmit on button click
			>
				Submit
			</button>
		</div>
	);
};

const ProfileForm = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		birthday: "",
		gender: "",
		zodiac: "",
		location: "An Giang",
		fullName: "",
		phoneNumber: "",
		hobbies: [],
		quote: "",
		image: "",
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

	useEffect(() => {
		const token = getTokenFromLocalStorage();

		if (!token) {
			toast("You are not logged in", { type: "warning" });
			setTimeout(() => {
				navigate(APP_ROUTES.SIGN_IN);
			}, 1500);
		}
	}, []);

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
		<div className="w-1/3 mx-auto my-4 p-4 min-w-[500px]">
			<div className="bg-[#fdf3f7] p-6 rounded-3xl shadow-md">
				<div className="flex justify-center gap-5">{RenderProgressBar()}</div>
				{renderStep()}
			</div>
		</div>
	);
};

export default ProfileForm;
