import { useOutletContext, Link } from "react-router";
import ZodiacInfo from "../components/ui/zodiacinfo";
import { zodiacInfo } from "../lib/data";
import bImage from "../assets/wallpapersden.com_k-beautiful-landscape-digital-art_3840x2160.jpg";
import { useContext, useEffect, useState } from "react";
import Toast from "../hooks/useToast";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "../lib/constants";
import { toast } from "react-toastify";
import { logOut } from "../lib/common";
import { Footer, Header, ToggleTheme } from "../config/components.js";
import { ThemeContext } from "../context/themeprovider.jsx";

const SideBarNew = ({ setTabActive, tabActive, user, handleEnterChat }) => {
  const { handleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <ul className="fixed left-0 z-50 mt-6 -translate-y-1/2 top-1/2 md:hidden menu menu-vertical bg-base-200 rounded-box">
        <li onClick={handleEnterChat}>
          <a
            className="tooltip animate-bounce animate-delay-[1000ms] animate-duration-[2000ms] tooltip-primary text-primary"
            data-tip="Chat"
          >
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
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </a>
        </li>
        <li onClick={() => setTabActive(0)}>
          <a className="tooltip" data-tip="Tổng quan">
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
          </a>
        </li>
        <li onClick={() => setTabActive(1)}>
          <a className="tooltip" data-tip="Tính cách">
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
          </a>
        </li>
        <li onClick={() => setTabActive(2)}>
          <a className="tooltip" data-tip="Tình yêu">
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
          </a>
        </li>
        <li onClick={handleTheme}>
          <a className="tooltip" data-tip="Đổi chủ đề">
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
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </a>
        </li>
        <li onClick={() => navigate(APP_ROUTES.SETTING)}>
          <a className="tooltip" data-tip="Cài đặt">
            <svg
              className="size-6"
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
          </a>
        </li>
        <li onClick={() => logOut()}>
          <a className="tooltip" data-tip="Đăng xuất">
            <svg
              className="size-6"
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
          </a>
        </li>
      </ul>
      <div className="flex-row hidden md:flex">
        <div className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased text-base-content bg-base-200">
          <div className="flex flex-col w-64 h-full border-r bg-base-100">
            <div className="flex flex-col items-center justify-center">
              <figure className="p-6">
                <div className="avatar avatar-online size-24">
                  <img
                    src={user.image}
                    alt={user.username}
                    className="rounded-full "
                  />
                </div>
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-extrabold uppercase text-primary">
                  {user.fullName}
                </h2>
                <span className="badge badge-primary badge-soft">
                  {user.location}
                </span>
                <div className="flex items-center justify-center w-full mt-4">
                  <ToggleTheme className="btn btn-soft" />
                  <button
                    className="text-lg btn btn-primary btn-active animate-pulse"
                    onClick={handleEnterChat}
                  >
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
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                      />
                    </svg>
                    Yêu thôi
                  </button>
                </div>
              </div>
              {/*Bar*/}
              <div className="divider"></div>
            </div>
            <div className="flex w-full mx-auto overflow-x-hidden">
              <ul className="flex flex-col w-full space-y-1">
                <li>
                  <a
                    onClick={() => navigate(APP_ROUTES.HOME)}
                    href="#"
                    className="relative flex flex-row items-center pr-6 border-l-4 text-primary border-primary hover:bg-gray-50 hover:text-gray-800 hover:border-primary h-11 focus:outline-none"
                  >
                    <span className="inline-flex items-center justify-center ml-4">
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
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </span>
                    <span className="px-4 ml-2 text-sm tracking-wide truncate">
                      Trang chủ
                    </span>
                  </a>
                </li>
                <li className="px-5">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-primary">
                      Thông tin cung hoàng đạo
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    onClick={() => setTabActive(0)}
                    href="#"
                    className={`${
                      tabActive === 0 &&
                      "border-l-4 text-primary border-primary bg-primary-content"
                    } hover:bg-gray-50 hover:text-gray-800 hover:border-primary relative flex flex-row items-center pr-6 text-gray-600 border-l-0 border-transparent h-11 focus:outline-none`}
                  >
                    <span className="inline-flex items-center justify-center ml-4">
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
                    <span className="px-4 ml-2 text-sm tracking-wide truncate">
                      Tổng quan
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setTabActive(1)}
                    href="#"
                    className={`${
                      tabActive === 1 &&
                      "border-l-4 text-primary border-primary bg-primary-content"
                    } hover:bg-gray-50 hover:text-gray-800 hover:border-primary relative flex flex-row items-center pr-6 text-gray-600 border-l-0 border-transparent h-11 focus:outline-none`}
                  >
                    <span className="inline-flex items-center justify-center ml-4">
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
                    <span className="px-4 ml-2 text-sm tracking-wide truncate">
                      Tính cách
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setTabActive(2)}
                    href="#"
                    className={`${
                      tabActive === 2 &&
                      "border-l-4 text-primary border-primary bg-primary-content"
                    } hover:bg-gray-50 hover:text-gray-800 hover:border-primary relative flex flex-row items-center pr-6 text-gray-600 border-l-0 border-transparent h-11 focus:outline-none`}
                  >
                    <span className="inline-flex items-center justify-center ml-4">
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
                    <span className="px-4 ml-2 text-sm tracking-wide truncate">
                      Tình Yêu
                    </span>
                  </a>
                </li>

                <li className="px-5">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-primary">
                      Cài đặt
                    </div>
                  </div>
                </li>

                <li onClick={() => navigate(APP_ROUTES.SETTING)}>
                  <a
                    href="#"
                    className={`
										border-l-4
									hover:bg-gray-50 hover:text-gray-800 hover:border-primary relative flex flex-row items-center pr-6 text-gray-600 border-transparent h-11 focus:outline-none`}
                  >
                    <span className="inline-flex items-center justify-center ml-4">
                      <svg
                        className="size-6"
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
                    <span className="px-4 ml-2 text-sm tracking-wide truncate">
                      Cài đặt
                    </span>
                  </a>
                </li>

                <li onClick={() => logOut()}>
                  <a
                    href="#"
                    className="relative flex flex-row items-center pr-6 text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-800 hover:border-primary h-11 focus:outline-none"
                  >
                    <span className="inline-flex items-center justify-center ml-4">
                      <svg
                        className="size-6"
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
                    <span className="px-4 ml-2 text-sm tracking-wide truncate">
                      Đăng xuất
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const UserZodiacInfomation = ({ zodiac, tabActive }) => {
  return (
    <div className="min-h-screen hero">
      <div className="w-full h-full hero-overlay bg-primary">
        <img
          src={bImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-4/5 hero-content bg-base-200 rounded-xl bg-opacity-60">
        <div className="flex flex-col items-center">
          <div className="">
            <Tab tab={zodiac.tabs[tabActive]} />
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
                  className="w-[75%] h-auto mx-auto my-5"
                />
              </li>
            ) : item.type === "h2" ? (
              <li>
                <h2 className="text-2xl font-bold mb-5">{item.value}</h2>
              </li>
            ) : null}
          </ul>
        );
      })}
    </div>
  </>
);
const MatchPage = () => {
  const { user, token, entered, setEntered } = useOutletContext();
  const [tabActive, setTabActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleLoading = () => {
    setIsLoading(false);
  };
  const handleEnterChat = () => {
    setEntered(true);
    setTimeout(() => {
      navigate(APP_ROUTES.CHAT);
    }, 1000);
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
    }, 3000);
    return () => clearInterval(handleLoading);
  }, []);
  return isLoading ? (
    <div className="flex items-center justify-center w-screen h-screen ">
      <Toast />
      <span className="text-2xl animate-pulse">
        Phân tích cung hoàng đạo ...
      </span>
      <span className="ml-8 loading loading-spinner text-info"></span>
    </div>
  ) : (
    user && (
      <>
        <div className="block md:hidden">
          <Header user={user} />
        </div>
        <div className="flex flex-row">
          <Toast />
          <SideBarNew
            tabActive={tabActive}
            setTabActive={setTabActive}
            handleEnterChat={handleEnterChat}
            user={user}
          />
          <UserZodiacInfomation
            tabActive={tabActive}
            zodiac={zodiacInfo[user.zodiac - 1]}
          />
        </div>
        <div className="block md:hidden">
          <Footer />
        </div>
      </>
    )
  );
};

export default MatchPage;
