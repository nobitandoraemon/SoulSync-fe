import { TbZodiacLibra } from "react-icons/tb";
import { motion } from "framer-motion";

const Profile = () => {
	return (
		<section className="flex flex-col items-center h-full">
			<div className="flex flex-col items-center">
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					className="w-24 h-24 rounded-full bg-primary/50 flex items-center justify-center"
				>
					<div className="avatar online">
						<img
							src="https://media.daily.dev/image/upload/s--wzOhK88f--/f_auto/v1724228753/avatars/avatar_nyNDZ2Trf7sk4FgOodgWN"
							className="rounded-full"
						/>
					</div>
				</motion.div>
				<h1 className="text-2xl font-bold mt-4">Phùng Quang Anh</h1>
				<p className="text-gray-500 text-sm mt-2">October 1 2000</p>
			</div>
			<div className="divider"></div>

			<div className="grid grid-cols-6 grid-rows-6 gap-4 w-full flex-1">
				<div className="grid place-content-center card bg-primary/50 col-span-2 row-span-4">
					1
				</div>
				<div className="grid place-content-center card bg-primary/50 col-span-2 row-span-2 col-start-3">
					2
				</div>
				<div className="grid place-content-center card bg-primary/50 col-span-2 row-span-2 col-start-5">
					3
				</div>
				<div className="grid place-content-center card bg-primary/50 col-span-4 row-span-2 col-start-3 row-start-3">
					4
				</div>
				<div className="grid place-content-center card bg-primary/50 col-span-3 row-span-2 row-start-5">
					5
				</div>
				<div className="grid place-content-center card bg-primary/50 col-span-3 row-span-2 col-start-4 row-start-5">
					6
				</div>
			</div>
		</section>
	);
};

export default Profile;
