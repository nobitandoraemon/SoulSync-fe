import { useOutletContext } from "react-router";
import ZodiacInfo from "../components/ui/zodiacinfo";
import { zodiacInfo } from "../lib/data";
// <<<<<<< origin/long
// import { getTokenFromLocalStorage } from "../lib/common";
// import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
// import { TbZodiacLibra } from "react-icons/tb";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";
// import { APP_ROUTES, API_ROUTES } from "../lib/constants";
// import { Link } from "react-router";
// import axios from "axios";
// const Button = ({ children }) => {
//   return (
//     <Link to="/chat" className="m-6 btn btn-primary">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="2.5"
//         stroke="currentColor"
//         className="size-[1.2em]"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//         />
//       </svg>
//       {children}
//     </Link>
//   );
// };
// const CountdownPopup = ({
//   showCountdown,
//   countdown,
//   setCountdown,
//   setShowCountdown,
// }) => {
//   useEffect(() => {
//     if (showCountdown && countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (countdown === 0) {
//       setShowCountdown(false);
//     }
//   }, [countdown, showCountdown]);

//   return (
//     showCountdown && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="p-6 text-center bg-white rounded-lg shadow-lg">
//           <p className="text-lg font-semibold">
//             Are you ready to see your destiny
//           </p>
//           <p className="text-lg font-semibold">
//             You have {countdown} seconds left...
//           </p>
//           <Button>Matching</Button>
//         </div>
//       </div>
//     )
//   );
// =======
import { useEffect, useState } from "react";
import Toast from "../hooks/useToast";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "../lib/constants";
import { toast } from "react-toastify";

const MatchPage = () => {
	const { user, isFinding, setIsFinding } = useOutletContext();
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const handleLoading = () => {
		setIsLoading(false);
	};

	const handleFinding = () => {
		setIsFinding((prev) => !prev);
		setTimeout(() => {
			navigate(APP_ROUTES.CHAT);
		}, 1000);
	};
	useEffect(() => {
		if (user) {
			console.log("Get user data successfully");
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

	useEffect(() => {
		setInterval(() => {
			handleLoading();
		}, 5000);
		return () => clearInterval(handleLoading);
	}, []);
	return isLoading ? (
		<div className="flex items-center justify-center w-screen h-screen ">
			<Toast />
			<span className="text-2xl animate-pulse">
				Phân tích cung hoàng đạo ...
			</span>
			<span className="ml-8 loading loading-spinner text-info"></span>
		</div>
	) : (
		<div className="relative">
			<Toast />
			<button
				className="fixed z-50 p-6 shadow-sm top-8 right-4 btn-circle btn btn-primary animate-bounce size-28"
				onClick={handleFinding}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					strokeWidth="2.5"
					stroke="currentColor"
					className="size-48"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
					/>
				</svg>
			</button>
			<ZodiacInfo zodiac={zodiacInfo[user.zodiac - 1]} user={user} />
		</div>
	);
};

export default MatchPage;
