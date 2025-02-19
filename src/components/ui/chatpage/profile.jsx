import { motion } from "framer-motion";

const Profile = () => {
	return (
		<section className="flex flex-col items-center min-h-full">
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
		</section>
	);
};

export default Profile;
