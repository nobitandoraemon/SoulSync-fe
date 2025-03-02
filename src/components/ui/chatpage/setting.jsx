import { cn } from "../../../lib/utils";
import { ChatHeader } from "../../../config/components";
import { motion } from "motion/react";

const Setting = ({ user, isScroll }) => {
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
				<div className="w-4/5 text-center hero-content text-neutral-content">
					<div className="w-full">
						<div className="py-8 card bg-base-200">
							<div className="avatar indicator size-36 -top-[50%] left-[50%] -translate-x-1/2">
								<span className="indicator-item badge badge-lg badge-accent">
									{user.zodiac}
								</span>
								<img src={user.avatar} alt="" className="rounded-full" />
							</div>
							<div className="items-center text-center card-body">
								<ul className="flex items-center gap-6 mb-8 text-primary">
									{user.social.map((item) => {
										return (
											<motion.a
												href={item.href}
												key={item.href}
												whileHover={{
													scale: 1.5,
												}}
												transition={{
													duration: 0.25,
													type: "spring",
												}}
												className="text-xl hover:text-accent"
											>
												{item.icon}
											</motion.a>
										);
									})}
								</ul>
								<div className="flex flex-col gap-4 mb-8">
									<h2 className="text-3xl font-extrabold text-accent">
										{user.name}
									</h2>
									<p className="flex items-center justify-center gap-2 text-secondary-content/70">
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
												d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
											/>
										</svg>
										{user.location}
									</p>
								</div>
								<div className="flex flex-col gap-4 mb-8">
									<h3 className="flex items-center justify-center gap-2 text-xl text-secondary-content">
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
												d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
											/>
										</svg>

										{user.job}
									</h3>
								</div>
								<div className="divider"></div>
								<div className="mb-4 prose">
									<blockquote>{user.quote}</blockquote>
								</div>
								<div className="w-1/3 card-actions">
									<button className="w-full btn btn-primary">
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
												d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
											/>
										</svg>
										Edit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;
