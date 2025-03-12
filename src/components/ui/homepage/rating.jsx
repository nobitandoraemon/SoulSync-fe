const RatingItem = ({ user, date, stars, comments, avatar }) => {
	return (
		<div className="flex flex-col gap-4 max-h-48 px-8 py-2">
			<div className="flex items-center gap-4">
				<div className="shrink-0 avatar">
					<div className="w-24 rounded-full">
						<img src={avatar} />
					</div>
				</div>
				<div className="flex flex-col space-y-2">
					<div className="w-fit">
						<span className="text-secondary font-extrabold text-lg">
							{user}
						</span>
					</div>
					<div className="w-12">
						<span className="text-primary font-bold text-md">{date}</span>
					</div>
					<div className="rating">
						<input
							type="radio"
							name="rating-1"
							className="mask mask-star"
							disabled
						/>
						<input
							type="radio"
							name="rating-1"
							className="mask mask-star"
							disabled
						/>
						<input
							type="radio"
							name="rating-1"
							className="mask mask-star"
							disabled
						/>
						<input
							type="radio"
							name="rating-1"
							className="mask mask-star"
							disabled
						/>
						<input
							type="radio"
							name="rating-1"
							className="mask mask-star"
							disabled
							defaultChecked
						/>
					</div>
				</div>
			</div>
			<div className="h-fit w-full">
				<p className="text-bold">{comments}</p>
			</div>
		</div>
	);
};

const Rating = () => {
	return (
		<div className="max-w-screen-md mx-auto p-8 mt-12">
			<div className="w-full grid place-content-center mb-4">
				<span className="badge badge-success">Feedback</span>
			</div>
			<RatingItem
				user="Phùng Quang Anh"
				date="19/2/2025"
				stars={5}
				comments="Tôi và vợ cưới nhau nhờ dùng app này 🥰"
				avatar="https://avatars.githubusercontent.com/u/84665790?v=4"
			/>
			<div className="divider"></div>

			<RatingItem
				user="Lò Vi Sóng"
				date="19/2/2025"
				stars={5}
				comments="Em yêu anh Quang Anh 😘"
				avatar="https://static.vecteezy.com/system/resources/thumbnails/048/938/320/small_2x/beautiful-smiling-girl-with-long-braided-hair-in-a-sweater-photo.jpeg"
			/>
			<div className="divider"></div>

			<RatingItem
				user="Khoai Thị Sắn"
				date="19/2/2025"
				stars={5}
				comments="Định mệnh con Lò Vi Sóng!"
				avatar="https://i.pinimg.com/736x/2b/90/7e/2b907e8ab481caf2a0f2c9cd0b500a2d.jpg"
			/>
		</div>
	);
};

export default Rating;
