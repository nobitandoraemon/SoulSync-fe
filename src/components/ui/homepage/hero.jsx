import { Link } from "react-router";
import { getTokenFromLocalStorage } from "../../../lib/common";
import image from "../../../image/app.png";

const Hero = () => {
	const token = getTokenFromLocalStorage();
	return (
		<div className="container mx-auto">
			<div className="min-h-screen hero">
				<div className="flex-col justify-between hero-content lg:flex-row-reverse">
					<div className="w-3/4">
						<img src={image} alt="phone" className="w-full" />
					</div>
					<div className="flex flex-col items-center justify-center md:items-start">
						<div className="mb-4 badge badge-accent">Brand new</div>
						<h1 className="w-3/4 text-4xl font-bold md:text-5xl text-wrap">
							Everything you
							<br />
							image <span className="text-primary">is real</span>
						</h1>
						<p className="w-3/4 py-6">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur quae sunt rem debitis cupiditate ipsam quam tempore ab
							similique ut minima corporis ullam, neque eveniet assumenda
							aliquam labore fuga? Rem.
						</p>
						<div className="flex items-center gap-2">
							{!token ? (
								<>
									<Link to="/login" className="btn btn-primary">
										Sign in
									</Link>
									<Link to="/reg" className="btn btn-secondary">
										Sign up
									</Link>
								</>
							) : (
								<Link to="/match" className="btn btn-primary btn-lg">
									Match Now
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
