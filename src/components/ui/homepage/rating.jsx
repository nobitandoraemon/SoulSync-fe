const RatingItem = ({ user, date, stars, comments, avatar, type }) => {
	return (
		<div className="flex flex-col justify-between max-w-3xl mx-auto">
			<div className={`chat chat-${type}`}>
				<div className="chat-image avatar">
					<div className="w-10 rounded-full">
						<img alt="Tailwind CSS chat bubble component" src={avatar} />
					</div>
				</div>
				<div className="chat-header">
					{user}
					<time className="text-xs opacity-50">{date}</time>
				</div>
				<div className="mt-2 chat-bubble">{comments}</div>
				<div className="mt-2 opacity-50 chat-footer">
					<div className="rating">
						<div
							className="bg-orange-400 mask mask-star-2"
							aria-label="1 star"
						></div>
						<div
							className="bg-orange-400 mask mask-star-2"
							aria-label="2 star"
						></div>
						<div
							className="bg-orange-400 mask mask-star-2"
							aria-label="3 star"
						></div>
						<div
							className="bg-orange-400 mask mask-star-2"
							aria-label="4 star"
						></div>
						<div
							className="bg-orange-400 mask mask-star-2"
							aria-label="5 star"
							aria-current="true"
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Rating = () => {
	return (
		<div className="p-8 mx-auto mt-12 min-h-[80vh]">
			<div className="grid place-content-center">
				<div className="badge badge-success">Feedback</div>
			</div>
			<div className="min-h-[60vh] mt-8">
				<RatingItem
					user="Phùng Quang Anh"
					date="12/1/2025"
					stars={5}
					type="start"
					comments="Tôi và vợ cưới nhau nhờ dùng app này 🥰"
					avatar="https://avatars.githubusercontent.com/u/84665790?v=4"
				/>
				<div className="my-8"></div>
				<RatingItem
					user="Minh Anh"
					date="15/2/2025"
					stars={5}
					type="end"
					comments="Giao diện dễ sử dụng, ghép đôi nhanh chóng và đặc biệt là thông tin được bảo mật. Rất đáng để trải nghiệm!😘"
					avatar="https://static.vecteezy.com/system/resources/thumbnails/048/938/320/small_2x/beautiful-smiling-girl-with-long-braided-hair-in-a-sweater-photo.jpeg"
				/>
				<div className="my-8"></div>
				<RatingItem
					user="Thu Hà"
					date="19/2/2025"
					stars={5}
					type="start"
					comments="Dịch vụ tuyệt vời! Chỉ sau một thời gian ngắn, mình đã tìm thấy một người thật sự hiểu và đồng điệu với mình."
					avatar="https://i.pinimg.com/736x/2b/90/7e/2b907e8ab481caf2a0f2c9cd0b500a2d.jpg"
				/>
				<div className="my-8"></div>
				<RatingItem
					user="橋本（はしもと）"
					date="8/3/2025"
					stars={5}
					type="start"
					comments="すごく便利！現在市場では第ーともいえるスーパーアプリとおもっております！ (Tôi nghĩ rằng đây chính là app hẹn hò lý tưởng số 1 thị trường hiện tại, thật tuyệt vời)"
					avatar="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMDEyNTIwOTA0NTcy/japanese-baby-names.jpg"
				/>
				<div className="my-8"></div>
			</div>
		</div>
	);
};

export default Rating;
