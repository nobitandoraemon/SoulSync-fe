import { Link } from "react-router";
import { getTokenFromLocalStorage } from "../../../lib/common";
import image from "../../../image/app.png";

const Hero = () => {
	const token = getTokenFromLocalStorage();
	return (
		<div className="container mx-auto">
			<div className="min-h-screen hero">
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-col gap-6 w-[60%]"> {/* description */}
					  <div className="badge badge-accent ml-60 min-w-24   ">Brand new</div>
					  <div className="flex flex-col gap-2 ">
						<h1 className=" text-5xl font-bold md:text-6xl text-wrap text-[#f317fd]">Tình Yêu Đích Thực</h1>
						<h1 className="text-primary text-5xl font-bold md:text-6xl ! ">Chỉ Cần Một Cú Click!</h1>
					  </div>
					  <p className="text-xl w-[90%]">Khám phá thế giới hẹn hò thông minh với hệ thống ghép đôi chính xác, giúp bạn tìm thấy một nửa hoàn hảo dựa trên cung hoàng đạo, thần số học, vị trí địa lý và sở thích. Kết nối dễ dàng, trò chuyện ngay lập tức và hoàn toàn bảo mật thông tin cá nhân. Không còn những lần chờ đợi vô ích – tình yêu của bạn chỉ cách một cú click!</p>
					  <div className="flex items-center gap-2">
							{!token ? (
								<>
									<Link to="/login" className="btn btn-success w-1/4 bg-green-400 text-white">
										Đăng nhập
									</Link>
									<Link to="/reg" className="btn btn-secondary w-1/4 bg-pink-100 text-violet-500">
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
					<div className="w-[45%]">
						<img src={image} alt="phone" className="w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
