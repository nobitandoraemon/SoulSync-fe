import { div } from "motion/react-m";
import { zodiacInfo } from "../../lib/data";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const CountdownPopup = () => {
  const [countdown, setCountdown] = useState(5);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [countdown]);

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold">
            Closing in {countdown} seconds...
          </p>
        </div>
      </div>
    )
  );
};

const Button = ({ children }) => {
  return (
    <Link to="/" className="btn btn-primary m-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="size-[1.2em]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      {children}
    </Link>
  );
};
const Tab = ({ tab }) => (
  <>
    <input
      defaultChecked={tab.label === "Tổng quan"}
      type="radio"
      name="tab_1"
      className="tab min-w-32"
      aria-label={tab.label}
    />
    <div className="tab-content bg-base-100 border-base-300 p-6 h-[65vh] rounded-3xl overflow-y-auto break-words">
      {tab.content.map((item, index) => {
        return (
          <ul key={index}>
            {item.type === "text" ? (
              <>
                <li>{item.value}</li>
                <br />
              </>
            ) : item.type === "image" ? (
              <li>
                <img
                  src={item.value}
                  alt="Zodiac"
                  className="w-full h-auto rounded-lg mb-5"
                />
              </li>
            ) : item.type === "h2" ? (
              <li>
                <h2 className="text-xl font-bold mb-3">{item.value}</h2>
              </li>
            ) : null}
          </ul>
        );
      })}
    </div>
  </>
);
const ZodiacInfo = ({ zodiac }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="tabs tabs-boxed w-full p-3">
        {zodiac.tabs.map((tabs, index) => {
          return <Tab key={index} tab={tabs} />;
        })}
      </div>
      <Button onClick={() => <CountdownPopup />}>Matching</Button>
    </div>
  );
};

export default ZodiacInfo;
