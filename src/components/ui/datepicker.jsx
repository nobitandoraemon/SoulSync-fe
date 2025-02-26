import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePick = () => {
	const [value, setValue] = useState({
		startDate: null,
		endDate: null,
	});

	return (
		<Datepicker
			primaryColor="pink"
			useRange={false}
			asSingle={true}
			value={value}
			onChange={(newValue) => setValue(newValue)}
		/>
	);
};

export default DatePick;
