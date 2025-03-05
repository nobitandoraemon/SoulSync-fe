import { div } from "motion/react-m";
import { zodiacInfo } from "../../lib/data";
const DisplayList = () => {};

const Tab = ({ tab }) => (
  <>
    <input
      defaultChecked={tab.label === "Tong Quan"}
      type="radio"
      name="tab_1"
      className="tab min-w-32"
      aria-label={tab.label}
    />
    <div className="tab-content bg-base-100 border-base-300 p-6 min-h-[50vh] w-full rounded-">
      {tab.content.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item}</li>
            <br />
          </ul>
        );
      })}
    </div>
  </>
);
const ZodiacInfo = ({ zodiac }) => {
  return (
    <div className="tabs tabs-boxed w-full p-3">
      {zodiac.tabs.map((tabs, index) => {
        return <Tab key={index} tab={tabs} />;
      })}
    </div>
  );
};

export default ZodiacInfo;
