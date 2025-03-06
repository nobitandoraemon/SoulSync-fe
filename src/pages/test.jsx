import ZodiacInfo from "../components/ui/zodiacinfo";
import { DatePick } from "../config/components";
import { aries } from "../lib/data";
import ProfileTest from "../components/ui/testLog/profiletest";
const TestPage = () => {
	const handleSubmit = (e) => {
		console.log(e.target.value);
	};
	return (
		<div className="">
			{/* <div className="w-56" onKeyDown={handleSubmit}>
                <DatePick />
            </div> */}
			<ProfileTest />
		</div>
	);
};

export default TestPage;
