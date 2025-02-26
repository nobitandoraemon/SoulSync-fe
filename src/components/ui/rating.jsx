const Rating = () => {
	return <div>
		<div className="flex px-10 gap-6 mt-6 ">
			<div className="rounded-full size-28 ">
			<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className=" w-full rounded-full" />

			</div>
			<div className="flex flex-col gap-2">
				<h1 className="font-bold bg-blue">Johnson Tomy</h1>
				<span>⭐⭐⭐⭐⭐</span>
				<h1 className="font-bold">"Amazing Experience!"</h1>
				<p>"I've tried many dating apps, but this one stands out. The zodiac matching is so spot-on, and the match queue feature makes finding a connection fun and interactive. Truly a very good app that brings destiny and technology together!"</p>
			</div>
		</div>
	</div>;
};

export default Rating;
