import { useNavigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect, useLayoutEffect, useState } from "react";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import axios from "axios";
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
const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const [matchedUser, setMatchedUser] = useState(null);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  // 	if (!token) {
  // 		toast("You are not logged in", { type: "warning" });
  // 		setTimeout(() => {
  // 			navigate(APP_ROUTES.SIGN_IN);
  // 		}, 1500);
  // 	}
  // }, []);

  useLayoutEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: API_ROUTES.GET_USER + `/${username}`,
          headers: {
            authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
    console.log(user);
  });

  return (
    <Outlet context={([matchedUser, setMatchedUser], [testuser, setUser])} />
  );
};

export default PrivateRoute;
