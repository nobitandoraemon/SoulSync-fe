import { SiAstro, SiSuperuser, SiWechat } from "react-icons/si";

const Features = () => {
	return (
		<div
			className="min-h-screen hero"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<div className="hero-overlay"></div>
			<div className="py-16">
				<div className="text-center hero-content text-neutral-content">
					<div className="flex flex-col items-center max-w-lg">
						<div className="mb-4 badge badge-secondary top-6">Features</div>
						<h1 className="mb-12 text-5xl font-bold">
							Syncing your
							<span className="text-accent"> Destiny</span>
						</h1>
						<p className="mb-12">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<div className="text-center shadow-sm stats glass bg-base-100 stats-vertical md:stats-horizontal">
							<div className="stat place-items-center">
								<div className="mb-4 stat-title btn btn-primary btn-outline">
									<SiWechat size={24} />
								</div>
								<div className="mb-4 stat-value text-primary">Chatting</div>
								<div className="mb-4 stat-desc text-primary">
									Chat with your Destiny
								</div>
							</div>

							<div className="stat place-items-center">
								<div className="mb-4 stat-title btn btn-secondary btn-outline">
									<SiSuperuser size={24} />
								</div>
								<div className="mb-4 stat-value text-secondary">Anonymous</div>
								<div className="mb-4 stat-desc text-secondary">
									Completely hide your information Until
								</div>
							</div>

							<div className="stat place-items-center">
								<div className="mb-4 stat-title text-accent btn btn-accent btn-outline">
									<SiAstro size={24} />
								</div>
								<div className="mb-4 stat-value text-accent">Zodiac</div>
								<div className="mb-4 stat-desc text-accent">
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
