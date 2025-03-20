import { useOutletContext } from "react-router";
import ZodiacInfo from "../components/ui/zodiacinfo";
import { zodiacInfo } from "../lib/data";
import { getTokenFromLocalStorage } from "../lib/common";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { TbZodiacLibra } from "react-icons/tb";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { APP_ROUTES, API_ROUTES } from "../lib/constants";
import { Link } from "react-router";
import axios from "axios";
const Button = ({ children }) => {
  return (
    <Link to="/chat" className="m-6 btn btn-primary">
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
const CountdownPopup = ({
  showCountdown,
  countdown,
  setCountdown,
  setShowCountdown,
}) => {
  useEffect(() => {
    if (showCountdown && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setShowCountdown(false);
    }
  }, [countdown, showCountdown]);

  return (
    showCountdown && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
          <p className="text-lg font-semibold">
            Are you ready to see your destiny
          </p>
          <p className="text-lg font-semibold">
            You have {countdown} seconds left...
          </p>
          <Button>Matching</Button>
        </div>
      </div>
    )
  );
};

const LoadingPopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

const MatchPage = () => {
  //user to test useOutletContext
  const [testuser] = useOutletContext();
  //
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [matchedUser, setMatchedUser] = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const requestMatch = async () => {
    setLoading(true);
    const token = getTokenFromLocalStorage();
    try {
      const response = await axios({
        method: "POST",
        data: { username: username },
        headers: {
          authorization: `Bearer ${token}`,
        },
        url: API_ROUTES.MATCH,
        withCredentials: true,
      });
      if (response.status === 200) {
        setLoading(false);
        //REAL SHOW COUNT DOWN HERE
        setShowCountdown(true);
        toast("Request successfully", { type: "success" });
        console.log(response);
        localStorage.setItem("matchedUser", response.data.matchedUser.match);
        setMatchedUser(response.data.matchedUser.match);
      }
    } catch (err) {
      setLoading(false);
      //TEST SHOW COUNT DOWN
      setShowCountdown(true);
      alert("YOU ARE AN F.A");
      toast("Request failed", { type: "error" });
      console.log(err);
    }
  };

  if (testuser)
    return (
      <>
        <ZodiacInfo
          zodiac={zodiacInfo[0]}
          user={testuser}
          event={requestMatch}
        />
        {!showCountdown && loading ? <LoadingPopup /> : <></>}
        <CountdownPopup
          countdown={countdown}
          setCountdown={setCountdown}
          showCountdown={showCountdown}
          setShowCountdown={setShowCountdown}
        />
      </>
    );
};

export default MatchPage;
