import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { motion } from "motion/react";

const Member = ({ avatar, social, name, role }) => {
	return (
		<div className="flex flex-col items-center justify-center w-48 shadow-md card hover:shadow-2xl">
			<div className="w-full avatar">
				<div className="rounded-xl">
					<img src={avatar} />
				</div>
			</div>
			<div className="flex flex-col items-center my-2">
				<h1 className="text-xl font-extrabold text-primary-content">{name}</h1>
				<h2 className="text-primary-content/65">{role}</h2>
			</div>
			<div className="flex items-center gap-4 mt-2 mb-6 text-primary-content">
				{social.map((item) => {
					return (
						<motion.a
							href={item.href}
							key={item.href}
							whileHover={{
								scale: 1.5,
							}}
							transition={{
								duration: 0.25,
								type: "spring",
							}}
							className="text-xl hover:text-accent"
						>
							{item.icon}
						</motion.a>
					);
				})}
			</div>
		</div>
	);
};

const Team = () => {
	return (
		<div className="flex flex-col items-center p-8 mx-auto hero bg-primary/80">
			<div className="grid w-full mt-12 mb-4 place-content-center">
				<span className="badge badge-accent">Team</span>
			</div>

			<h2 className="mb-8 text-lg font-semibold tracking-wide">
				Meeting our team.
			</h2>

			<div className="grid grid-cols-6 grid-rows-6 gap-8">
				<div className="col-span-2 row-span-3">
					{" "}
					<Member
						avatar="https://avatars.githubusercontent.com/u/84665790?v=4"
						social={[
							{
								icon: <FaFacebookF />,
								href: "https://fb.me/1020phug",
							},
							{
								icon: <FaGithub />,
								href: "https://github.com/1020phug",
							},
							{
								icon: <FaInstagram />,
								href: "https://instagram.com/1020phug",
							},
						]}
						name="Phùng Quang Anh"
						role="Technical Leader"
					/>
				</div>
				<div className="col-span-2 col-start-3 row-span-3">
					{" "}
					<Member
						avatar="https://avatars.githubusercontent.com/u/84665790?v=4"
						social={[
							{
								icon: <FaFacebookF />,
								href: "https://fb.me/1020phug",
							},
							{
								icon: <FaGithub />,
								href: "https://github.com/1020phug",
							},
						]}
						name="Phùng Quang Anh"
						role="Technical Leader"
					/>
				</div>
				<div className="col-span-2 col-start-5 row-span-3">
					{" "}
					<Member
						avatar="https://avatars.githubusercontent.com/u/84665790?v=4"
						social={[
							{
								icon: <FaFacebookF />,
								href: "https://fb.me/1020phug",
							},
							{
								icon: <FaGithub />,
								href: "https://github.com/1020phug",
							},
						]}
						name="Phùng Quang Anh"
						role="Technical Leader"
					/>
				</div>
				<div className="col-span-2 col-start-2 row-span-3 row-start-4">
					{" "}
					<Member
						avatar="https://avatars.githubusercontent.com/u/84665790?v=4"
						social={[
							{
								icon: <FaFacebookF />,
								href: "https://fb.me/1020phug",
							},
							{
								icon: <FaGithub />,
								href: "https://github.com/1020phug",
							},
						]}
						name="Phùng Quang Anh"
						role="Technical Leader"
					/>
				</div>
				<div className="col-span-2 col-start-4 row-span-3 row-start-4">
					{" "}
					<Member
						avatar="https://avatars.githubusercontent.com/u/84665790?v=4"
						social={[
							{
								icon: <FaFacebookF />,
								href: "https://fb.me/1020phug",
							},
							{
								icon: <FaGithub />,
								href: "https://github.com/1020phug",
							},
						]}
						name="Phùng Quang Anh"
						role="Technical Leader"
					/>
				</div>
			</div>
		</div>
	);
};

export default Team;
