import { useOutletContext } from "react-router";
import ZodiacInfo from "../components/ui/zodiacinfo";
import { zodiacInfo } from "../lib/data";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbZodiacLibra } from "react-icons/tb";
const testuser = {
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
const MatchPage = () => {
  const [user] = useOutletContext();
  console.log(user);
  return (
    <>
      <ZodiacInfo zodiac={zodiacInfo[0]} user={testuser} />
    </>
  );
};

export default MatchPage;
