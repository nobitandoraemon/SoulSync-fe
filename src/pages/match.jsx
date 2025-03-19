import { useOutletContext } from "react-router";
const MatchPage = () => {
	const [user] = useOutletContext();
	console.log(user);
	return <div>Match Page here</div>;
};

export default MatchPage;
