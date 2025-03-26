import { Link } from "react-router";
import { getTokenFromLocalStorage } from "../../../lib/common";
import image from "../../../image/app.png";

const Hero = () => {
	const token = getTokenFromLocalStorage();
	return (
		<div className="container mx-auto mb-6">
			<div className="min-h-screen hero">
				<div className="flex-col justify-between hero-content lg:flex-row-reverse">
					<div className="w-3/4">
						<img src={image} alt="phone" className="w-full" />
					</div>
					<div className="flex flex-col items-center justify-center md:items-start">
						<div className="mb-4 badge badge-accent">Brand new</div>
						<h1 className="w-3/4 text-4xl font-bold md:text-5xl text-wrap">
							Tình Yêu Đích Thực
							<br />
							<span className="text-primary">Chỉ Cần Một Cú Click!</span>
						</h1>
						<p className="w-3/4 py-6">
							Khám phá thế giới hẹn hò thông minh với hệ thống ghép đôi chính
							xác, giúp bạn tìm thấy một nửa hoàn hảo dựa trên cung hoàng đạo,
							thần số học, vị trí địa lý và sở thích. Kết nối dễ dàng, trò
							chuyện ngay lập tức và hoàn toàn bảo mật thông tin cá nhân. Không
							còn những lần chờ đợi vô ích – tình yêu của bạn chỉ cách một cú
							click!
						</p>
						<div className="flex items-center gap-2">
							{!token ? (
								<>
									<Link to="/login" className="btn btn-primary">
										Đăng nhập
									</Link>
									<Link to="/reg" className="btn btn-secondary">
										Đăng ký
									</Link>
								</>
							) : (
								<Link to="/match" className="btn btn-primary btn-lg">
									Ghép đôi ngay
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
