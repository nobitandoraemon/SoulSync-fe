import { cn } from "../../lib/utils";

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
			{/* <ChatHeader user={user} isLoggin={true} /> */}
			<div
				className="min-h-screen py-16 bg-base-100 hero"
				// style={{
				// 	backgroundImage:
				// 		"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
				// 	backgroundPosition: "center",
				// 	backgroundSize: "cover",
				// }}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="w-4/5 hero-content bg-base-200 rounded-xl bg-opacity-60">
					<div className="flex flex-col items-center">
						<div className="w-full p-3 tabs tabs-boxed">
							{zodiac.tabs.map((tabs, index) => {
								return <Tab key={index} tab={tabs} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ZodiacInfo;
