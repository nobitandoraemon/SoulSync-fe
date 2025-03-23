import {
	Contact,
	Features,
	FAQ,
	Hero,
	Rating,
	Team,
	Toast,
} from "./config/components";

function App() {
	return (
		<div className="bg-pink-100">
			<Toast />
			<Hero />
			<Features />
			<Rating />
			<Team />
			<FAQ />
			<Contact />
		</div>
	);
}

export default App;
