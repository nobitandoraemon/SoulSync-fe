import ZodiacInfo from "../components/ui/zodiacinfo";
import { DatePick } from "../config/components";
import { zodiacInfo } from "../lib/data";
import MessageFetcher from "../lib/messageMethod";
import MessageUpdater from "../lib/messageMethod";
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
      <MessageFetcher />
    </div>
  );
};

export default TestPage;
