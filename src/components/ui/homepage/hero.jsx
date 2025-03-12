import { Link } from "react-router";

const Hero = () => {
	return (
		<div className="container mx-auto">
			<div className="min-h-screen hero">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<div className="w-4/5 border mockup-phone md:w-1/2 aspect-auto">
						<div className="camera -top-[1px]"></div>
						<div className="display">
							<div className="phone-1">
								<img
									src="https://cf.ltkcdn.net/dating/images/orig/313360-2121x1414-man-giving-flowers-to-girlfriend.jpg"
									alt="phone"
									className="aspect-[9/16] w-full object-cover object-center"
								/>
							</div>
						</div>
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
							<Link to="/login" className="btn btn-primary">
								Sign in
							</Link>
							<Link to="/reg" className="btn btn-secondary">
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
