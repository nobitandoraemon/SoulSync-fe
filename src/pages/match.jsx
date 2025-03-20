import { useOutletContext } from "react-router";
import ZodiacInfo from "../components/ui/zodiacinfo";
import { zodiacInfo } from "../lib/data";
import { useEffect } from "react";

const MatchPage = () => {
	const { user, isFinding, toggleFinding } = useOutletContext();
	useEffect(() => {
		if (user) {
			console.log("Get user data successfully");
		} else {
			console.log("Get user data failed");
		}
	}, [user]);
	return (
		<>
			<ZodiacInfo
				zodiac={zodiacInfo[0]}
				user={user}
				toggleFinding={toggleFinding}
			/>
		</>
	);
};

export default MatchPage;
