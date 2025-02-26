import { DatePick } from "../config/components";
import { zodiacInfo } from "../lib/data";

const TestPage = () => {
	const handleSubmit = (e) => {
		console.log(e.target.value);
	};
	return (
		<div className="max-w-screen-lg p-4 mx-auto">
			{/* <div className="w-56" onKeyDown={handleSubmit}>
				<DatePick />
			</div> */}
		</div>
	);
};

export default TestPage;
