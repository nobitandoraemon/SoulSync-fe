import { m } from "motion/react";
import { ZodiacSigns } from "../../../lib/data";

const Info = ({ matchedUser, love, setLove, handleLike }) => {
	return (
		<dialog id="otherUser" className="modal">
			<div className="modal-box bg-primary-content">
				<div className="p-6 sm:p-8 ">
					<div className="flex flex-col items-center">
						<div className="chat chat-start">
							<div className="chat-image avatar avatar-online">
								<div className="w-24 rounded-full ring-2 ring-primary">
									<img alt="User" src={matchedUser.image} />
								</div>
							</div>
							<div className="font-bold chat-header text-primary">
								{love
									? matchedUser.fullName
									: matchedUser.nickName
									? matchedUser.nickName
									: `Ẩn danh #${matchedUser.zodiac}`}
								<time className="text-xs opacity-50">
									{ZodiacSigns[matchedUser.zodiac - 1].symbol}
								</time>
							</div>
							<div className="chat-bubble">{matchedUser.quote}</div>
							<div className="opacity-50 chat-footer"> </div>
						</div>
						<p className="flex items-center my-4 text-secondary">
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
							{matchedUser.location}
						</p>
					</div>
					{love && (
						<div className="mt-6">
							<h3 className="flex items-center mb-2 text-lg font-semibold text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="mr-2 size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
									/>
								</svg>
								Sở thích
							</h3>
							<div className="flex flex-wrap gap-2">
								{matchedUser.hobbies.map((hobby, index) => {
									const list = [
										"btn-primary",
										"btn-secondary",
										"btn-accent",
										"btn-neutral",
										"btn-success",
										"btn-error",
										"btn-warning",
										"btn-info",
									];
									const num = Math.floor(Math.random() * (list.length - 1));
									return (
										<span
											key={index}
											className={`btn btn-outline ${list[num]}`}
										>
											{hobby}
										</span>
									);
								})}
							</div>
						</div>
					)}
					<div className="mt-6">
						<h3 className="flex items-center mb-2 text-lg font-semibold text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="mr-2 size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
								/>
							</svg>
							Tính cách cung hoàng đạo
						</h3>
						<div className="flex flex-wrap gap-2">
							{ZodiacSigns[matchedUser.zodiac - 1].personality.map(
								(character, index) => {
									const list = [
										"btn-primary",
										"btn-secondary",
										"btn-accent",
										"btn-neutral",
										"btn-success",
										"btn-error",
										"btn-warning",
										"btn-info",
									];
									const num = Math.floor(Math.random() * (list.length - 1));
									return (
										<span
											key={index}
											className={`btn btn-outline ${list[num]}`}
										>
											{character}
										</span>
									);
								}
							)}
						</div>
					</div>
					{/* <div className="mt-6">
						<h3 className="flex items-center mb-2 text-lg font-semibold text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="mr-2 size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
								/>
							</svg>
							Quote
						</h3>

						<div role="alert" className="alert">
							{ZodiacSigns[matchedUser.zodiac - 1].symbol}
							<span className="text-md">{matchedUser.quote}</span>
						</div>
					</div> */}
				</div>
			</div>
			<form method="dialog" className="modal-backdrop">
				<button>{""}</button>
			</form>
		</dialog>
	);
};

export default Info;
