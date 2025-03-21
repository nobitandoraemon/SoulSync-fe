import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { motion } from "motion/react";
import nga from "../../../image/teams/nga.jpg";
import long from "../../../image/teams/long.jpg";
import quang from "../../../image/teams/quang.jpg";
import thai from "../../../image/teams/thai.jpg";
import truong from "../../../image/teams/truong.jpg";

const members = [
	{
		avatar:
			"https://media.daily.dev/image/upload/s--wzOhK88f--/f_auto/v1724228753/avatars/avatar_nyNDZ2Trf7sk4FgOodgWN",
		social: [
			{ href: "https://www.facebook.com/anhphungquang", icon: <FaFacebookF /> },
			{ href: "https://github.com/anhphungquang", icon: <FaGithub /> },
		],
		name: "Phùng Quang Anh",
		role: "Technical Leader",
	},
	{
		avatar: nga,
		social: [
			{
				href: "https://www.facebook.com/100038045830437/",
				icon: <FaFacebookF />,
			},
			{
				href: "https://github.com/Lilyhouser",
				icon: <FaGithub />,
			},
		],
		name: "Quỳnh Nga",
		role: "Backend Leader",
	},
	{
		avatar: thai,
		social: [
			{ href: "https://www.facebook.com/vu.ding.thai", icon: <FaFacebookF /> },
			{ href: "https://github.com/Kazelf", icon: <FaGithub /> },
		],
		name: "Vũ Đình Thái",
		role: "Project Leader",
	},
	{
		avatar: quang,
		social: [
			{
				href: "https://www.facebook.com/profile.php?id=100078348354304",
				icon: <FaFacebookF />,
			},
			{ href: "https://github.com/LeeMinHoo1501", icon: <FaGithub /> },
		],
		name: "Tô Minh Quang",
		role: "Backend Member",
	},
	{
		avatar: truong,
		social: [
			{ href: "https://www.facebook.com/ejdjc", icon: <FaFacebookF /> },
			{ href: "https://github.com/FPT-jBoy", icon: <FaGithub /> },
		],
		name: "Hà Trường",
		role: "Frontend Member",
	},
	{
		avatar: long,
		social: [
			{
				href: "https://www.facebook.com/master.long.3112",
				icon: <FaFacebookF />,
			},
			{ href: "https://github.com/Master-Long-3112", icon: <FaGithub /> },
		],
		name: "Master Long",
		role: "Frontend Member",
	},
];

const Member = ({ avatar, social, name, role }) => {
	return (
		<li className="flex flex-col items-center justify-center w-48 overflow-hidden shadow-xs md:w-56 card bg-neutral/90 hover:shadow-md">
			<div className="w-full avatar">
				<div className="w-full">
					<img src={avatar} />
				</div>
			</div>
			<div className="flex flex-col items-center my-2 cursor-context-menu">
				<h1 className="hover:animate-jump animate-duration-[2000ms] animate-delay-1000 animate-ease-in-out animate-alternate animate-fill-both text-xl font-extrabold tracking-wider text-primary stroke-accent drop-shadow-2xl hover:text-neutral-content">
					{name}
				</h1>
				<h2 className="tracking-widest text-accent text-md text-pretty">
					{role}
				</h2>
			</div>
			<div className="flex items-center gap-4 mt-2 mb-6 text-neutral-content">
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
							className="text-2xl hover:text-accent"
						>
							{item.icon}
						</motion.a>
					);
				})}
			</div>
		</li>
	);
};

const Team = () => {
	return (
		<div className="flex flex-col items-center p-8 mx-auto hero bg-primary/80">
			<div className="grid w-full mt-12 mb-4 place-content-center">
				<span className="badge badge-accent">Team</span>
			</div>

			<h2 className="mb-8 text-4xl font-semibold tracking-wide">
				Gặp gỡ các thành viên
			</h2>

			<div className="inline-flex w-[90%] overflow-hidden flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] mb-8">
				<ul className="flex items-center py-4 justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll hover:[animation-play-state:paused]">
					{[...members, ...members, ...members].map((item, idx) => {
						return <Member {...item} key={idx} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Team;
