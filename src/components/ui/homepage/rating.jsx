const RatingItem = ({ user, date, stars, comments, avatar }) => {
	return (
		<div className="flex flex-col gap-4 px-8 py-2 max-h-48">
			<div className="flex items-center gap-4">
				<div className="shrink-0 avatar">
					<div className="w-24 rounded-full">
						<img src={avatar} />
					</div>
				</div>
				<div className="flex flex-col space-y-2">
					<div className="w-fit">
						<span className="text-lg font-extrabold text-secondary">
							{user}
						</span>
					</div>
					<div className="w-12">
						<span className="font-bold text-primary text-md">{date}</span>
					</div>
					<div className="rating">
						<input
							type="radio"
							name="rating-1"
							className="bg-orange-400 mask mask-star"
							disabled
						/>
						<input
							type="radio"
							name="rating-1"
							className="bg-orange-400 mask mask-star"
							disabled
						/>
						<input
							type="radio"
							name="rating-1"
							className="bg-orange-400 mask mask-star"
							disabled
						/>
						<input
							type="radio"
							name="rating-1"
							className="bg-orange-400 mask mask-star"
							disabled
						/>
						<input
							type="radio"
							name="rating-1"
							className="bg-orange-400 mask mask-star"
							disabled
							defaultChecked
						/>
					</div>
				</div>
			</div>
			<div className="w-full h-fit">
				<p className="text-bold">{comments}</p>
			</div>
		</div>
	);
};

const Rating = () => {
	return (
		<div className="max-w-(--breakpoint-md) p-8 mx-auto mt-12">
			<div className="grid w-full mb-4 place-content-center">
				<span className="badge badge-success">Feedback</span>
			</div>
			<RatingItem
				user="Phùng Quang Anh"
				date="12/1/2025"
				stars={5}
				comments="Tôi và vợ cưới nhau nhờ dùng app này 🥰"
				avatar="https://avatars.githubusercontent.com/u/84665790?v=4"
			/>
			<div className="divider"></div>

			<RatingItem
				user="Minh Anh"
				date="15/2/2025"
				stars={5}
				comments="Giao diện dễ sử dụng, ghép đôi nhanh chóng và đặc biệt là thông tin được bảo mật. Rất đáng để trải nghiệm!😘"
				avatar="https://static.vecteezy.com/system/resources/thumbnails/048/938/320/small_2x/beautiful-smiling-girl-with-long-braided-hair-in-a-sweater-photo.jpeg"
			/>
			<div className="divider"></div>

			<RatingItem
				user="Thu Hà"
				date="19/2/2025"
				stars={5}
				comments="Dịch vụ tuyệt vời! Chỉ sau một thời gian ngắn, mình đã tìm thấy một người thật sự hiểu và đồng điệu với mình."
				avatar="https://i.pinimg.com/736x/2b/90/7e/2b907e8ab481caf2a0f2c9cd0b500a2d.jpg"
			/>
		</div>
	);
};

export default Rating;
