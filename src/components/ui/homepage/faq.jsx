const questions = [
	{
		ques: `Trang web này được tạo ra để làm gì?`,
		ans: `Trang web này giúp kết nối những người độc thân một cách ẩn danh, dựa trên cung hoàng đạo, vị trí địa lý và thần số học. Mục tiêu là giúp bạn tìm được người phù hợp mà không cần tiết lộ danh tính ngay từ đầu, tạo ra trải nghiệm ghép đôi thú vị và an toàn.`,
	},
	{
		ques: `Làm thế nào để tham gia ghép đôi trên trang web?`,
		ans: `Bạn chỉ cần đăng ký tài khoản, điền thông tin cơ bản như ngày sinh, giới tính và vị trí. Hệ thống sẽ tự động ghép đôi bạn với người phù hợp dựa trên thuật toán thông minh.`,
	},
	{
		ques: `Ghép đôi trên trang web hoạt động như thế nào?`,
		ans: `Hệ thống sẽ dựa trên cung hoàng đạo, vị trí địa lý và thần số học để tìm ra người phù hợp nhất với bạn. Nếu sau một khoảng thời gian không tìm được đối tượng hoàn hảo, bạn có thể ghép đôi với người có mức độ phù hợp gần nhất.`,
	},
	{
		ques: `Tôi có thể từ chối một người đã được ghép đôi không?`,
		ans: `Có, nếu bạn cảm thấy không phù hợp, bạn có thể từ chối ghép đôi và tiếp tục tìm kiếm một đối tượng khác. Tuy nhiên, việc từ chối liên tục có thể ảnh hưởng đến thời gian chờ đợi của bạn.`,
	},
];

const FAQ = () => {
	return (
		<div className="flex flex-col items-center pt-8 pb-16 min-h-[30vh]">
			<div className="mt-12 mb-4 badge badge-secondary top-6">
				Frequently Asked Questions
			</div>

			<h2 className="mb-8 text-2xl font-semibold tracking-wide">
				Các câu hỏi thường gặp
			</h2>

			<div className="w-4/5 join join-vertical bg-base-200">
				{questions.map((question, idx) => {
					return (
						<div
							key={idx}
							className="border collapse collapse-arrow join-item border-base-300"
						>
							<input type="radio" name="my-accordion-4" defaultChecked />
							<div className="text-xl font-medium collapse-title">
								{question.ques}
							</div>
							<div className="collapse-content">
								<p>{question.ans}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FAQ;
