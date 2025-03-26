import { useNavigate } from "react-router";
const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="relative h-screen overflow-hidden bg-indigo-900">
			{" "}
			<img
				src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
				className="absolute object-cover w-full h-full"
			/>
			<div className="absolute inset-0 bg-black opacity-25"></div>{" "}
			<div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
				{" "}
				<div className="relative z-10 flex flex-col items-center w-full font-mono">
					{" "}
					<h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-primary-content">
						Đừng cô đơn ở đây một mình !{" "}
					</h1>{" "}
					<p className="font-extrabold text-primary-content text-8xl mt-44 animate-bounce">
						404{" "}
					</p>{" "}
					<button
						className="mt-8 uppercase btn btn-wide btn-base"
						onClick={() => navigate("/")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-4"
						>
							<path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
							<path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
						</svg>
						Về trang chủ
					</button>
				</div>{" "}
			</div>
		</div>
	);
};

export default NotFound;
