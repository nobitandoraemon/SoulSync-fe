import { Link } from "react-router";
import { useAuth } from "../../../config/components";
import { Toast, Profile } from "../../../config/components";
const InformationSideBar = ({ content }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="cursor-pointer">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="grid grid-cols-1 lg:grid-cols-2 menu bg-base-200 text-base-content h-screen min-w-[25vw] max-h-[95vh] max-w-[90vw] p-4 overflow-auto z-[10000]">
          {/* Sidebar content here */}
          <div className="card bg-primary w-96 shadow-sm m-2">
            <div className="card-body">{content.other}</div>
          </div>
          <div className="card bg-secondary w-96 shadow-sm m-2">
            <div className="card-body">{content.mine}</div>
          </div>
          {/* Sidebar content end here */}
        </div>
      </div>
    </div>
  );
};

const SubNav = ({ isLoggin, content }) => {
  const auth = useAuth();
  const handleLeaveChat = () => {
    auth.logOut();
  };
  return (
    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box place-content-center">
      <li>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Trang chủ
        </Link>
      </li>
      <li onClick={handleLeaveChat}>
        <a
          // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Kết thúc
          <span className="badge badge-sm badge-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </li>
      <li>
        <a>
          Trạng thái
          {isLoggin ? (
            <span className="badge badge-xs badge-success"></span>
          ) : (
            <span className="badge badge-xs badge-warning"></span>
          )}
        </a>
      </li>
      <li>
        <InformationSideBar content={content} />
      </li>
    </ul>
  );
};

const MainNav = ({ isLoggin }) => {
  const auth = useAuth();

  const handleLogOut = () => {
    auth.logOut();
  };
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
        onClick={handleLogOut}
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
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
      </div>
    </div>
  );
};

const ChatHeader = ({ user, isLoggin, content }) => {
  return (
    <div className="absolute top-0 left-0 right-0 p-4 min-h-[80px] flex shadow-lg bg-primary/10 backdrop-blur-lg">
      <Toast />
      <div className="flex items-center flex-1 float-left gap-4 mr-4">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={user.avatar} />
          </div>
        </div>
        <span className="badge badge-lg">
          {user.name} {!user.main && `#${user.id}`}{" "}
        </span>
      </div>
      {user.main ? (
        <MainNav user={user} isLoggin={isLoggin} />
      ) : (
        <SubNav isLoggin={isLoggin} content={content} />
      )}
    </div>
  );
};

export default ChatHeader;
