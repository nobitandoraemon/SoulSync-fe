import { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";

const Content = ({ isActive, content, isScroll }) => {
	const [isLoading, setLoading] = useState(true);
	const handleLoading = () => {
		setLoading(false);
	};
	useEffect(() => {
		setInterval(() => {
			handleLoading();
		}, 1500);
		return () => {
			clearInterval(handleLoading);
		};
	}, []);

	return !isLoading ? (
		<div
			className={cn(
				"w-[30%] p-4 bg-secondary/5 text-secondary-content overflow-hidden",
				isScroll && "ml-[72px]"
			)}
		>
			{content[isActive - 1].component}
		</div>
	) : (
		<div className="w-[30%] p-4 flex justify-center items-center">
			<span className=" loading loading-spinner text-primary"></span>
		</div>
	);
};

export default Content;
