import { zodiacInfo } from "../../lib/data";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import ChatHeader from "./chatpage/header";
// <<<<<<< origin/long

// =======
// const CountdownPopup = ({
// 	isVisible,
// 	countdown,
// 	setCountdown,
// 	setIsVisible,
// 	event,
// }) => {
// 	useEffect(() => {
// 		if (isVisible && countdown > 0) {
// 			const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
// 			return () => clearTimeout(timer);
// 		} else if (countdown === 0) {
// 			setIsVisible(false);
// 		}
// 	}, [countdown, isVisible]);

// 	return (
// 		isVisible && (
// 			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// 				<div className="p-6 text-center bg-white rounded-lg shadow-lg">
// 					<p className="text-lg font-semibold">
// 						Are you ready to see your destiny
// 					</p>
// 					<p className="text-lg font-semibold">
// 						You have {countdown} seconds left...
// 					</p>
// 					<Button event={event}>Matching</Button>
// 				</div>
// 			</div>
// 		)
// 	);
// };

// const Button = ({ children, event }) => {
// 	return (
// 		<Link to="/chat" onClick={event} className="m-6 btn btn-primary">
// 			<svg
// 				xmlns="http://www.w3.org/2000/svg"
// 				fill="none"
// 				viewBox="0 0 24 24"
// 				strokeWidth="2.5"
// 				stroke="currentColor"
// 				className="size-[1.2em]"
// 			>
// 				<path
// 					strokeLinecap="round"
// 					strokeLinejoin="round"
// 					d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
// 				/>
// 			</svg>
// 			{children}
// 		</Link>
// 	);
// };
// >>>>>>> main
const PopsUpButton = ({ children, event }) => {
	return (
		<button onClick={event} className="m-6 btn btn-primary">
			{children}
		</button>
	);
};
const Tab = ({ tab }) => (
	<>
		<input
			defaultChecked={tab.label === "Tổng quan"}
			type="radio"
			name="tab_1"
			className="tab min-w-32"
			aria-label={tab.label}
		/>
		<div className="tab-content bg-base-100 border-base-300 p-6 h-[80vh] rounded-3xl overflow-y-auto break-words ">
			{tab.content.map((item, index) => {
				return (
					<ul key={index}>
						{item.type === "text" ? (
							<>
								<li>{item.value}</li>
								<br />
							</>
						) : item.type === "image" ? (
							<li className="my-3">
								<img
									src={item.value}
									alt="Zodiac"
									className="w-full aspect-video"
								/>
							</li>
						) : item.type === "h2" ? (
							<li>
								<h2 className="my-3 text-xl font-bold">{item.value}</h2>
							</li>
						) : null}
					</ul>
				);
			})}
		</div>
	</>
);
// <<<<<<< origin/long
const ZodiacInfo = ({ zodiac, user, event }) => {
  return (
    <div
      className={cn(
        "flex-1 flex flex-col bg-secondary/20 relative scrollbar-hide"
      )}
    >
      <ChatHeader user={user} isLoggin={true} />
      <div
        className="min-h-screen mt-16 hero"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-4/5 hero-content">
          <div className="flex flex-col items-center">
            <div className="w-full p-3 tabs tabs-boxed">
              {zodiac.tabs.map((tabs, index) => {
                return <Tab key={index} tab={tabs} />;
              })}
            </div>
            <PopsUpButton event={event}>Start Matching</PopsUpButton>
          </div>
        </div>
      </div>
    </div>
  );
// =======
// const ZodiacInfo = ({ zodiac, user, toggleFinding }) => {
// 	const [countdown, setCountdown] = useState(30);
// 	const [isVisible, setIsVisible] = useState(false);

// 	const navigate = useNavigate();

// 	const handleMatching = () => {
// 		toggleFinding();
// 		setTimeout(() => {
// 			navigate("/chat");
// 		}, 2000);
// 		// setCountdown(30);
// 		// setIsVisible(true);
// 	};

// 	useEffect(() => {
// 		if (user) {
// 			console.log("Get user data successfully");
// 		} else {
// 			console.log("Get user data failed");
// 		}
// 	}, [user]);

// 	return (
// 		// <div
// 		// 	className={cn(
// 		// 		"flex-1 flex flex-col bg-secondary/20 relative scrollbar-hide"
// 		// 	)}
// 		// >
// 		<div
// 			className="bg-center bg-cover top hero"
// 			style={{
// 				backgroundImage:
// 					"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
// 			}}
// 		>
// 			<div className="hero-overlay bg-opacity-30"></div>
// 			<div className="w-4/5 hero-content">
// 				<div className="flex flex-col items-center">
// 					<div className="w-full p-3 tabs tabs-box">
// 						{zodiac.tabs.map((tabs, index) => {
// 							return <Tab key={index} tab={tabs} />;
// 						})}
// 					</div>
// 					{/* <PopsUpButton event={handleMatching}>Start Matching</PopsUpButton> */}
// 				</div>
// 			</div>
// 		</div>
// 		// </div>
// 	);
// >>>>>>> main
};

export default ZodiacInfo;
