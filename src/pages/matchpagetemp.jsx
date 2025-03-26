import { useState } from "react";
import { zodiacInfo } from "../lib/data";
import { Link } from "react-router";
import { logOut } from "../lib/common";
import { useOutletContext } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Toast from "../hooks/useToast";
const SideBarNew = ({ setTabActive, user, handleFinding }) => {
  return (
    <div className="flex flex-row">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <div className="flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
          <div>
            <div className="w-full">
              <div className="relative w-full bg-gray-50 flex justify-center items-center">
                <div className="absolute flex justify-center items-center">
                  <img
                    className="object-cover h-20 w-20 rounded-full"
                    src="./src/assets/12-cung-hoang-dao-thang-sinh-1.jpg"
                    alt=""
                  />
                </div>

                <div className="h-56 mx-4 w-5/6 rounded-3xl shadow-md sm:w-80 sm:mx-0 ">
                  <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
                    <h1
                      className="text-2xl font-bold text-center w-full py-5 bg-gradient-to-r from-cyan-500 via-red-500 to-yellow-400
               text-transparent bg-clip-text
               animate-blinkGlow"
                    >
                      User Profile
                    </h1>
                  </div>

                  <div className=" bg-base-300 h-1/2 w-full  rounded-3xl  flex flex-col  justify-around  items-center">
                    <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2"></div>
                    <div className="w-full h-1/2 flex flex-col justify-center items-center">
                      <h1 className="text-gray-700 font-bold">
                        {/*user.fullName*/} Master
                      </h1>
                      <h1 className="text-gray-500 text-sm">
                        {/*user.place*/} Phu Tho
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Bar*/}
          </div>
          <div className="relative overflow-x-hidden flex">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    User Zodiac Info
                  </div>
                </div>
              </li>
              <li>
                <a
                  onClick={() => setTabActive(0)}
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Tổng quan
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTabActive(1)}
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Tính cách
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTabActive(2)}
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Tình Yêu
                  </span>
                </a>
              </li>

              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="/setting"
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </Link>
              </li>
              <li>
                <a
                  onClick={() => logOut()}
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <button
            className="mx-auto my-5 p-6 shadow-sm btn-circle btn btn-primary animate-bouce size-28"
            onClick={handleFinding}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-48"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const UserZodiacInfomation = ({ zodiac, tabActive }) => {
  return (
    <div
      className="min-h-screen  hero"
      // style={{
      // 	backgroundImage:
      // 		"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      // 	backgroundPosition: "center",
      // 	backgroundSize: "cover",
      // }}
    >
      <div className="hero-overlay bg-primary w-full h-full"></div>
      <div className="w-4/5 hero-content bg-base-200 rounded-xl bg-opacity-60">
        <div className="flex flex-col items-center">
          <div className="">
            <Tab tab={zodiac.tabs[tabActive]} />;
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ tab }) => (
  <>
    <div className="bg-base-100 border-base-300 p-6 h-[80vh] rounded-3xl overflow-y-auto break-words ">
      {tab.content.map((item, index) => {
        return (
          <ul key={index}>
            {item.type === "text" ? (
              <>
                <li>{item.value}</li>
                <br />
              </>
            ) : item.type === "image" ? (
              <li className="">
                <img
                  src={item.value}
                  alt="Zodiac"
                  className="w-full aspect-video"
                />
              </li>
            ) : item.type === "h2" ? (
              <li>
                <h2 className=" text-xl font-bold">{item.value}</h2>
              </li>
            ) : null}
          </ul>
        );
      })}
    </div>
  </>
);
const MatchPageTest = () => {
  const { user, isFinding, setIsFinding } = useOutletContext();
  const [tabActive, setTabActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const handleFinding = () => {
    setIsFinding((prev) => !prev);
    setTimeout(() => {
      navigate(APP_ROUTES.CHAT);
    }, 1000);
  };
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    if (user) {
      console.log("Get user data successfully");
      if (!user.gender) {
        toast("Bạn thiếu thông tin để có thể phân tích dữ liệu ...", {
          type: "warning",
        });
        setTimeout(() => {
          navigate(APP_ROUTES.FORM);
        }, 2000);
      }
    } else {
      console.log("Get user data failed");
    }
  }, [user]);

  useEffect(() => {
    setInterval(() => {
      handleLoading();
    }, 5000);
    return () => clearInterval(handleLoading);
  }, []);
  //const zodiac = zodiacInfo[user.zodiac-1];
  //test zodiac
  const zodiac = zodiacInfo[24 - 1];
  return isLoading ? (
    <div className="flex items-center justify-center w-screen h-screen ">
      <Toast />
      <span className="text-2xl animate-pulse">
        Phân tích cung hoàng đạo ...
      </span>
      <span className="ml-8 loading loading-spinner text-info"></span>
    </div>
  ) : (
    <div className="flex flex-row">
      <Toast />
      <SideBarNew setTabActive={setTabActive} handleFinding={handleFinding} />
      <UserZodiacInfomation tabActive={tabActive} zodiac={zodiac} />
    </div>
  );
};

export default MatchPageTest;
