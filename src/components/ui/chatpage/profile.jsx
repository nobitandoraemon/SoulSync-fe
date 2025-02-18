const Profile = () => {
	return (
		<section className="flex flex-col items-center">
			<div className="stats shadow">
				<div className="stat">
					<div className="stat-figure text-secondary">
						<div className="avatar online">
							<div className="w-16 rounded-full">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
							</div>
						</div>
					</div>
					<div className="stat-value">My Profile</div>
					<div className="stat-title my-2">Username</div>
					<div className="stat-desc text-secondary">Location ...</div>
					<div className="badge badge-primary badge-outline mt-4 text-center">
						Libra
					</div>
				</div>
			</div>
			<div className="divider divider-secondary"></div>
			<div className="card bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">About </h2>
					<p>Cause when a heart breaks and it don&apos;t break even</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
							>
								<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
