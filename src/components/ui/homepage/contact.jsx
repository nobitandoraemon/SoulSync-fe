import { motion } from "motion/react";

const Contact = () => {
	return (
		<div
			className="min-h-screen hero"
			style={{
				backgroundImage:
					"url(https://images.squarespace-cdn.com/content/v1/5eac45f88da144413f9b5763/b85d7659-1901-4859-b33a-04356e135fb7/myles-munroe-3-principles-of-biblical-dating-and-courting.jpg)",
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>

			<div className="flex-col max-w-screen-lg mx-auto hero-content lg:flex-row-reverse">
				<div className="font-extrabold text-center text-accent lg:text-right">
					<h1 className="text-5xl">Contact Us</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
					<form className="card-body">
						<label className="flex items-center gap-2 mb-2 input input-bordered">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
								<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
							</svg>
							<input type="text" className="grow" placeholder="Email" />
						</label>
						<label className="flex items-center gap-2 mb-2 input input-bordered">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
							</svg>
							<input type="text" className="grow" placeholder="Name" />
						</label>
						<label className="flex items-center gap-2 mb-2 input input-bordered">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
							</svg>

							<input type="text" className="grow" placeholder="Your message" />
						</label>
						<motion.button
							className="mt-4 rounded btn btn-neutral"
							whileHover={{
								scale: 1.1,
							}}
							transition={{ visualDuration: 0.15 }}
						>
							Send
						</motion.button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
