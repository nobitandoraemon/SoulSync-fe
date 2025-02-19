const Hero = () => {
	return (
		<div className="container mx-auto">
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
						<div className="flex items-center gap-2">
							<button className="btn btn-primary">Sign in</button>
							<button className="btn btn-secondary">Sign up</button>
						</div>
						{/* <div className="stats mt-4">
							<div className="stat">
								<div className="stat-figure text-secondary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block h-8 w-8 stroke-current"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
								</div>
								<div className="stat-title">Downloads</div>
								<div className="stat-value">31K</div>
								<div className="stat-desc">Jan 1st - Feb 1st</div>
							</div>

							<div className="stat">
								<div className="stat-figure text-secondary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block h-8 w-8 stroke-current"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
										></path>
									</svg>
								</div>
								<div className="stat-title">New Users</div>
								<div className="stat-value">4,200</div>
								<div className="stat-desc">↗︎ 400 (22%)</div>
							</div>

							<div className="stat">
								<div className="stat-figure text-secondary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block h-8 w-8 stroke-current"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
										></path>
									</svg>
								</div>
								<div className="stat-title">New Registers</div>
								<div className="stat-value">1,200</div>
								<div className="stat-desc">↘︎ 90 (14%)</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
