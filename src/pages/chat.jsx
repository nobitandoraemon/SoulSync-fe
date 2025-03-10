import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbZodiacLibra, TbZodiacLeo } from "react-icons/tb";
import {
  UserIcon,
  InfoIcon,
  SettingIcon,
  ChatIcon,
} from "../components/ui/general/icon";
import Profile from "../components/ui/chatpage/profile";
import Info from "../components/ui/chatpage/info";
import Setting from "../components/ui/chatpage/setting";
import {
  SideBar,
  ChatContainer,
  useScroll,
  Toast,
  ChatHeader,
} from "../config/components";
import Waiting from "../components/ui/chatpage/waiting";
import ZodiacInfo from "../components/ui/zodiacinfo";
import { zodiacInfo } from "../lib/data";
const otherUser = {
  name: "Người dùng ẩn danh",
  id: 1020,
  age: 18,
  location: "Cần thơ, VN",
  zodiac: <TbZodiacLeo />,
  avatar:
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  social: [
    {
      icon: <FaFacebookF />,
      href: "https://fb.me/1020phug",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/1020phug",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/1020phug",
    },
  ],
  quote: `I see tears in your eyes, I feel helpless inside`,
};

const user = {
  main: true,
  name: "Phùng Quang Anh",
  job: "Website Developer",
  location: "Hà Nội, VN",
  id: "1020",
  zodiac: <TbZodiacLibra />,
  age: 25,
  avatar:
    "https://media.daily.dev/image/upload/s--wzOhK88f--/f_auto/v1724228753/avatars/avatar_nyNDZ2Trf7sk4FgOodgWN",
  social: [
    {
      icon: <FaFacebookF />,
      href: "https://fb.me/1020phug",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/1020phug",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/1020phug",
    },
  ],
  quote: `Cause when a heart break, and it don't break even`,
};

const content = [
  {
    id: 1,
    icon: <ChatIcon />,
    component: <ZodiacInfo zodiac={zodiacInfo[0]} />,
  },
  {
    id: 2,
    icon: <SettingIcon />,
    component: <Setting user={user} />,
  },
];

const Chat = ({ socket }) => {
  const [isActive, setActive] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMatched, setHasMatched] = useState(false);
  const toggleActive = (id) => {
    setActive(id);
  };
  const isScroll = useScroll();
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    setInterval(() => {
      handleLoading();
    }, 1500);
    return () => {
      clearInterval(handleLoading);
    };
  }, []);
  return !isLoading ? (
    <div className="flex w-screen max-w-full min-h-screen">
      <SideBar
        content={content}
        isActive={isActive}
        toggleActive={toggleActive}
        isScroll={isScroll}
        user={user}
      />
      {isActive === 1 && !hasMatched && (
        <ZodiacInfo
          zodiac={zodiacInfo[0]}
          user={user}
          event={() => setHasMatched(true)}
        />
      )}
      {isActive === 1 && hasMatched && (
        <ChatContainer
          content={content}
          isActive={isActive}
          isScroll={isScroll}
          socket={socket}
          user={user}
        />
      )}
      {isActive === 2 && <Setting user={user} isScroll={isScroll} />}
    </div>
  ) : (
    <div className="flex items-center justify-center w-screen h-screen">
      <Toast />
      <span className=" loading loading-spinner text-primary"></span>
    </div>
  );
};

export default Chat;
