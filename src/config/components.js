//Layout

import Layout from "../components/ui/layout.jsx";
import PrivateRoute from "../pages/private.jsx";

//Pages
import Chat from "../pages/chat.jsx";
import Login from "../pages/login.jsx";
import Reg from "../pages/reg.jsx";
import App from "../App.jsx";
import NotFound from "../pages/notfound.jsx";
import FormPage from "../pages/form.jsx";
import MatchPage from "../pages/match.jsx";
import OTPPage from "../pages/otp.jsx";
import SettingPage from "../pages/settings.jsx";

//Hooks
import { useScroll } from "../hooks/useScroll.js";
import Toast from "../hooks/useToast.jsx";

//Context
import ThemeProvider from "../context/themeprovider.jsx";
import ThemeContext from "../context/themeprovider.jsx";

//UI

//Chatpage//
import ChatBody from "../components/ui/chatpage/chatbody.jsx";
import ChatBox from "../components/ui/chatpage/chatbox.jsx";
import ChatInput from "../components/ui/chatpage/chatinput.jsx";
import ChatHeader from "../components/ui/chatpage/header.jsx";
import Info from "../components/ui/chatpage/info.jsx";
import Profile from "../components/ui/chatpage/profile.jsx";

//Homepage//
import Contact from "../components/ui/homepage/contact";
import Features from "../components/ui/homepage/features";
import FAQ from "../components/ui/homepage/faq";
import Hero from "../components/ui/homepage/hero";
import Rating from "../components/ui/homepage/rating";
import Team from "../components/ui/homepage/team";

//General//
import Footer from "../components/ui/general/footer.jsx";
import Header from "../components/ui/general/header.jsx";
import {
	UserIcon,
	ChatIcon,
	GroupIcon,
	ContactIcon,
	InfoIcon,
	SettingIcon,
} from "../components/ui/general/icon.jsx";
import Logo from "../components/ui/general/logo.jsx";

//Other
import { ToggleTheme } from "../components/ui/toggletheme.jsx";
import DatePick from "../components/ui/datepicker.jsx";

export {
	Layout,
	Chat,
	Login,
	Reg,
	App,
	NotFound,
	MatchPage,
	OTPPage,
	SettingPage,
	ThemeProvider,
	ThemeContext,
	PrivateRoute,
	ChatBody,
	ChatBox,
	ChatInput,
	ChatHeader,
	Info,
	Profile,
	Contact,
	Features,
	FAQ,
	Hero,
	Rating,
	FormPage,
	Team,
	Footer,
	Header,
	UserIcon,
	ChatIcon,
	GroupIcon,
	ContactIcon,
	InfoIcon,
	SettingIcon,
	Logo,
	ToggleTheme,
	useScroll,
	Toast,
	DatePick,
};
