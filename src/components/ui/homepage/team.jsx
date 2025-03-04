import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { motion } from "motion/react";

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
		avatar:
			"https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/481265533_1309428260335356_7141587972400806033_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFLqriSx8SNsg0kvCV1D1VVU8qklZ_F4KZTyqSVn8Xgptbt51KaoS2jAeByfstZEzE89skehfw56MGn7v3WqhLf&_nc_ohc=0OXlGzthUocQ7kNvgG2Twbg&_nc_oc=AdgwQ7J_4_bKjT6girKAhg5ZXj_wkllKRmwAqXWjEtmvRRevI4RRqyw8oeF34cdFKD4&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=A9Mz_TXHTSaJ7sy66jupSIh&oh=00_AYCusilV1aZd6CZOvlFTBRqiQGYc951DitgnjWdw6jeZKw&oe=67CA9EE0",
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
		avatar:
			"https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/362888406_979045313299724_8416318308051624143_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtLz3p7YhdrGXGUDyrienv03xKqGPPCmDTfEqoY88KYKD2vRBArHQsREgrefKdhcnDm0PnQgqrZ7K2DZr5xfwu&_nc_ohc=vqJTuuF-n90Q7kNvgF5mMYo&_nc_oc=AdgYvrY3e6JYISDjkxxtH3Ec4A3RKc6QWA_rfAN-TrqXxBDedXC4X-yJVGGYX0ke_pM&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AfW7uixlgyTYhi_3Xh51OKM&oh=00_AYAtJyTcp1un6LXy98cNbDw0KCiHyJoZC2h-On5QG9fAjw&oe=67CA7B79",
		social: [
			{ href: "https://www.facebook.com/vu.ding.thai", icon: <FaFacebookF /> },
			{ href: "https://github.com/Kazelf", icon: <FaGithub /> },
		],
		name: "Vũ Đình Thái",
		role: "Project Leader",
	},
	{
		avatar:
			"https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/476228844_622734143681525_2179801129029073099_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHNJgG2bl0Bi11aKcD3j-t89xrLdRJl-rH3Gst1EmX6sYKFLjpI6JCFDgmh2270crwtBgOQIxpdVVsQO6Hsp98G&_nc_ohc=Yr5WRvoxpeQQ7kNvgHIQWPR&_nc_oc=Adiofu1T_DrwxQP8rMq7U6yowOYEUxAME_48-5jJUlPmvB5w10zDy675JcM2GyinJtQ&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=A_mBJ5edpybr2JdlDZ_fUNF&oh=00_AYBbNnKzbrGgiJl1yp9Tvb2tvj16RbFGLdv4whu-C6vZaQ&oe=67CA73DD",
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
		avatar:
			"https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/481090183_2434136800260429_8682895417695602385_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH1f1mS2hXfSwBNo0ymzkuxlwfLGCwZAYOXB8sYLBkBgyLJpO5YhtTxt1ha_OizNyuseRV09pb_az1qLEFB4XvJ&_nc_ohc=5ErvY-sf8YEQ7kNvgGOEAPj&_nc_oc=AdhFcG2qU9KlaDszHXpfMaIGS3wuju4EZ-ZhWKjB1NxeOsru8TtEGVNHVyvOZj5sEms&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AROvq0Q1HhlalgIntmXQGiy&oh=00_AYDNIxR9uU-13OlsE5jdKY3p4SfT2YaAsiW3u-2YUFKkAA&oe=67CA78A9",
		social: [
			{ href: "https://www.facebook.com/ejdjc", icon: <FaFacebookF /> },
			{ href: "https://github.com/FPT-jBoy", icon: <FaGithub /> },
		],
		name: "Hà Trường",
		role: "Frontend Member",
	},
	{
		avatar:
			"https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/73071311_770712400055813_3288047685587697664_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF1wK-f2fyzjq2gUygfBDZHRTH8yg6sUUpFMfzKDqxRSo2jNVNxwtGAwYbsr67QXn1mzVj_tCHveW7nM4x1yAfS&_nc_ohc=9V6xkxpK6lQQ7kNvgGngm1E&_nc_oc=AdgFEuUw0as-LUO9IySKF-K5-aarZrnl7z_e7M1gdT8_HIiTSzsA0eoyBgjgL-zVEsM&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AEJ-xpHY2PC5a1SV1HK3UbK&oh=00_AYBegXaPvpxb2Go3dlU5AZe2Zg8qCXJBKg01ou6eEWdsdw&oe=67EC4408",
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
		<li className="flex flex-col items-center justify-center w-48 shadow-md md:w-56 card bg-secondary/20 hover:shadow-2xl">
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

			<h2 className="mb-8 text-lg font-semibold tracking-wide">
				Meeting our team.
			</h2>

			<div className="inline-flex w-[90%] overflow-hidden flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] mb-8">
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
					{[...members, ...members, ...members].map((item, idx) => {
						return <Member {...item} key={idx} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Team;
