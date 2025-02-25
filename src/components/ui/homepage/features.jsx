import { SiAstro, SiSuperuser, SiWechat } from "react-icons/si";

const Features = () => {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="py-16">
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-lg flex flex-col items-center">
						<div className="badge badge-secondary top-6 mb-12">Features</div>
						<h1 className="mb-12 text-5xl font-bold">
							Syncing your
							<span className="text-accent"> Destiny</span>
						</h1>
						<p className="mb-12">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<div className="stats stats-vertical md:stats-horizontal shadow text-center">
							<div className="stat place-items-center">
								<div className="stat-title mb-4 btn btn-primary btn-outline">
									<SiWechat size={24} />
								</div>
								<div className="stat-value text-primary mb-4">Chatting</div>
								<div className="stat-desc text-primary mb-4">
									Chat with your Destiny
								</div>
							</div>

							<div className="stat place-items-center">
								<div className="stat-title mb-4 btn btn-secondary btn-outline">
									<SiSuperuser size={24} />
								</div>
								<div className="stat-value mb-4 text-secondary">Anonymous</div>
								<div className="stat-desc mb-4 text-secondary">
									Completely hide your information Until
								</div>
							</div>

							<div className="stat place-items-center">
								<div className="stat-title mb-4 text-accent btn btn-accent btn-outline">
									<SiAstro size={24} />
								</div>
								<div className="stat-value mb-4 text-accent">Zodiac</div>
								<div className="stat-desc mb-4 text-accent">
									Knowing more about your internal self
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
