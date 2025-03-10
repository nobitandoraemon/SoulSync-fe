import ZodiacInfo from "../components/ui/zodiacinfo";
import { DatePick } from "../config/components";
import { zodiacInfo } from "../lib/data";
import UserUpdate from "../components/ui/userUpdate";
const TestPage = () => {
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="max-w-screen-lg p-4 mx-auto">
      {/* <div className="w-56" onKeyDown={handleSubmit}>
				<DatePick />
			</div> */}
      {/*<ZodiacInfo zodiac={zodiacInfo[0]} />*/}
      <UserUpdate />
    </div>
  );
};

export default TestPage;
