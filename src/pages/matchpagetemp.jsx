import { useState } from "react";
import { zodiacInfo } from "../lib/data";
import { Link } from "react-router";
import { logOut } from "../lib/common";
import { useOutletContext } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Toast from "../hooks/useToast";
import { useNavigate, Navigate } from "react-router";
import { APP_ROUTES } from "../lib/constants";
import bImage from "../assets/wallpapersden.com_k-beautiful-landscape-digital-art_3840x2160.jpg";
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
                    <div className="w-full h-full flex flex-col justify-center items-center mt-7">
                      <h1 className="text-gray-700 font-bold">Master</h1>
                      <h1 className="text-gray-500 text-sm">Phu Tho</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Bar*/}
          </div>
          <div className="overflow-x-hidden flex w-full">
            <ul className="flex flex-col py-4 space-y-1">
              <li>
                <a
                  onClick={handleFinding}
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none animate-infinite animate-wiggle hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate text-primary">
                    {"Yêu thôi <3"}
                  </span>
                </a>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Thông tin cung hoàng đạo
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
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                      />
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
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
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
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
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
                    Cài đặt
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Cài đặt
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Đăng xuất
                  </span>
                </a>
              </li>
            </ul>
          </div>
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
      <div className="hero-overlay bg-primary w-full h-full">
        <img
          src={bImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      </div>
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
  const navigate = useNavigate();
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
      <SideBarNew
        setTabActive={setTabActive}
        handleFinding={handleFinding}
        user={user}
      />
      <UserZodiacInfomation tabActive={tabActive} zodiac={zodiac} />
    </div>
  );
};

export default MatchPageTest;
