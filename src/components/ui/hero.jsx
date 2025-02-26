const Hero = () => {
	return <div className="p-24 pt-20 pr-0 flex gap-20">
		<div className=" flex flex-col  justify-center items-center gap-10 w-[40%] ">
			<div className="text-blue-700 text-5xl font-extrabold flex flex-col justify-center items-center gap-2 ">
				<h1>Your Other Half is Waiting for you </h1>
				
			</div>
			<div className="font-serif mt-4 text-xl flex flex-col gap-8 ">
				<div>
				<p>SoulSync is where your feeling fly, connections souls, and love blossoms. </p>
				<p>Join us today and let your love story begin</p>
				</div>
				<p>Discover meaningful connections with ease. Swipe, chat, and meet like-minded singles who share your vibe. Your love story starts here!"</p>
			</div>
			<div className="flex justify-center gap-8  ">
			<button className="btn btn-secondary ml-8 p-4 ">Sign in</button>
			<button className="btn btn-accent p-4 ">Sign up</button>

			</div>
			<div className="flex justify-center gap-24">
				<div className="flex flex-col items-center ">
					<span className="text-4xl font-bold ">8M + </span>
					
					<span>Registrations</span>
				</div>
				<div className="flex flex-col items-center justify-center">
				<span className="text-4xl font-bold ">2000+ </span>
				<span>Matches made </span>
				<span>every day</span>
				</div>
				<div className="flex flex-col items-center">
				<span className="text-4xl font-bold ">85%</span>
				<span>Successful</span>
				<span>rate</span>
				
				</div>
			</div>
		</div>
		<div className="w-[40%] h-[40%]">
			<img src="https://4kwallpapers.com/images/wallpapers/love-couple-hands-2048x2048-14351.jpg " className="size-full" />
		</div>
	</div>;
};



export default Hero;
