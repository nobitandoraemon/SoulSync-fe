import ZodiacInfo from "../components/ui/zodiacinfo";
import { DatePick } from "../config/components";
import { aries } from "../lib/data";
const TestPage = () => {
	const handleSubmit = (e) => {
		console.log(e.target.value);
	};
	return (
		<div className="max-w-screen-lg p-4 mx-auto">
			{/* <div className="w-56" onKeyDown={handleSubmit}>
                <DatePick />
            </div> */}
			<ZodiacInfo zodiac={aries} />
		</div>
	);
};

export default TestPage;
