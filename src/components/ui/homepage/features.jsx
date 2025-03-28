import { SiAstro, SiSuperuser, SiWechat } from "react-icons/si";

const Features = () => {
	return (
		<div
			className="min-h-screen hero"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<div className="hero-overlay"></div>
			<div className="py-16">
				<div className="text-center hero-content text-neutral-content">
					<div className="flex flex-col items-center max-w-lg">
						{/* <div className="mb-4 badge badge-secondary top-6">Features</div> */}
						<h1 className="mb-12 text-5xl font-bold">
							Ghép đôi
							<span className="text-accent"> Thông minh</span>
						</h1>
						<p className="mb-12">
							Hệ thống ghép đôi thông minh của chúng tôi không chỉ đơn thuần là
							một thuật toán ngẫu nhiên mà là sự kết hợp tinh tế giữa các yếu tố
							quan trọng như cung hoàng đạo, vị trí địa lý và thần số học, giúp
							tạo ra những kết nối ý nghĩa và bền vững dựa trên sự tương thích
							sâu sắc giữa hai người. Bạn sẽ được trải nghiệm các tính năng hiện
							đại và tân tiến!
						</p>
						<div className="text-center shadow-sm stats backdrop-blur-xl bg-base-100 stats-vertical md:stats-horizontal">
							<div className="stat place-items-center">
								<div className="mb-4 stat-title btn btn-primary btn-outline">
									<SiWechat size={24} />
								</div>
								<div className="mb-4 stat-value text-primary">Nhắn tin</div>
								<div className="mb-4 stat-desc text-primary">
									Tin nhắn hẹn hò thời gian thực
								</div>
							</div>

							<div className="stat place-items-center">
								<div className="mb-4 stat-title btn btn-secondary btn-outline">
									<SiSuperuser size={24} />
								</div>
								<div className="mb-4 stat-value text-secondary">
									Cung hoàng đạo
								</div>
								<div className="mb-4 stat-desc text-secondary">
									Hiểu rõ hơn về nội tại của bản thân
								</div>
							</div>

							<div className="stat place-items-center">
								<div className="mb-4 stat-title text-accent btn btn-accent btn-outline">
									<SiAstro size={24} />
								</div>
								<div className="mb-4 stat-value text-accent">Ẩn danh</div>
								<div className="mb-4 stat-desc text-accent">
									Hoàn toàn ẩn danh đến khi bạn muốn
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
