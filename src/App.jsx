import Contact from "./components/ui/homepage/contact";
import Features from "./components/ui/homepage/features";
import FAQ from "./components/ui/homepage/faq";
import Hero from "./components/ui/homepage/hero";
import Rating from "./components/ui/homepage/rating";
import Team from "./components/ui/homepage/team";

function App() {
	return (
		<>
			<Hero />
			<Features />
			<Rating />
			<Team />
			<FAQ />
			<Contact />
		</>
	);
}

export default App;
