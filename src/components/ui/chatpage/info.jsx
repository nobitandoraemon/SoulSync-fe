import { TbZodiacLeo } from "react-icons/tb";
import { motion } from "framer-motion";
import { ChatIcon } from "../general/icon";

const Info = ({ user }) => {
	return (
		<section className="flex flex-col items-center">
			<div className="shadow stats">
				<div className="stat">
					<div className="stat-figure text-secondary">
						<div className="avatar online">
							<div className="w-16 rounded-full">
								<img src={user.avatar} />
							</div>
						</div>
					</div>
					<div className="text-xl stat-value">{user.name}</div>
					<div className="my-2 stat-title">{`#${user.id}`}</div>
					<div className="stat-desc text-secondary">{user.location}</div>
					<div className="flex gap-4">
						<div className="mt-4 text-center badge badge-primary badge-outline">
							<span>{user.zodiac}</span>
						</div>
						<div className="mt-4 text-center badge badge-info badge-outline">
							<span className="mr-2">{user.age} tuổi</span>
							<ChatIcon />
						</div>
					</div>
				</div>
			</div>
			<div className="divider divider-secondary"></div>

			<div className="h-40 shadow-xl card bg-base-100">
				<div className="card-body">
					<h2 className="card-title">Favorite Quote</h2>
					<p className="overflow-hidden max-h-20 text-ellipsis">{user.quote}</p>
					<div className="justify-end card-actions">
						<button className="btn btn-success">
							<motion.svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
								initial={{ scale: 0.8 }}
								animate={{ scale: 1 }}
								transition={{
									duration: 0.1,
									type: "spring",
									stiffness: 260,
									damping: 20,
									repeat: Infinity,
								}}
							>
								<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
							</motion.svg>
						</button>
					</div>
				</div>
			</div>

			<div className="w-full mt-2 rounded carousel">
				<div id="item1" className="w-full carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
						className="w-full"
					/>
				</div>
				<div id="item2" className="w-full carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
						className="w-full"
					/>
				</div>
				<div id="item3" className="w-full carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
						className="w-full"
					/>
				</div>
				<div id="item4" className="w-full carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
						className="w-full"
					/>
				</div>
			</div>
			<div className="flex justify-center w-full gap-2 py-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a>
			</div>
		</section>
	);
};

export default Info;
