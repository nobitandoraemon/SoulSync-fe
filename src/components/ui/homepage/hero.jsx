const Hero = () => {
	return (
		<div className="container mx-auto mt-8">
			<div className="hero min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="mockup-phone border w-1/2 aspect-auto">
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
					<div>
						<div className="badge badge-accent mb-4">Brand new</div>
						<h1 className="text-5xl font-bold text-wrap w-3/4">
							Everything you
							<br />
							image <span className="text-primary">is real</span>
						</h1>
						<p className="py-6 w-3/4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur quae sunt rem debitis cupiditate ipsam quam tempore ab
							similique ut minima corporis ullam, neque eveniet assumenda
							aliquam labore fuga? Rem.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
