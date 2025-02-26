//Layout

import Layout from "../components/ui/layout.jsx";
import PrivateRoute from "../pages/private.jsx";

//Pages
import Chat from "../pages/chat.jsx";
import Login from "../pages/login.jsx";
import Reg from "../pages/reg.jsx";
import App from "../App.jsx";

//Hooks
import AuthProvider from "../hooks/useAuth.jsx";
import { useAuth } from "../hooks/useAuth.jsx";
import { useScroll } from "../hooks/useScroll.js";

//Context
import ThemeProvider from "../context/themeprovider.jsx";
import ThemeContext from "../context/themeprovider.jsx";

//UI

//Chatpage//
import ChatBody from "../components/ui/chatpage/chatbody.jsx";
import ChatBox from "../components/ui/chatpage/chatbox.jsx";
import ChatContainer from "../components/ui/chatpage/chatcontainer.jsx";
import ChatInput from "../components/ui/chatpage/chatinput.jsx";
import Content from "../components/ui/chatpage/content.jsx";
import ChatHeader from "../components/ui/chatpage/header.jsx";
import Info from "../components/ui/chatpage/info.jsx";
import Profile from "../components/ui/chatpage/profile.jsx";
import Setting from "../components/ui/chatpage/setting.jsx";
import SideBar from "../components/ui/chatpage/sidebar.jsx";

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
import ToggleTheme from "../components/ui/toggletheme.jsx";

export {
	Layout,
	Chat,
	Login,
	Reg,
	App,
	AuthProvider,
	ThemeProvider,
	ThemeContext,
	PrivateRoute,
	ChatBody,
	ChatBox,
	ChatContainer,
	ChatInput,
	Content,
	ChatHeader,
	Info,
	Profile,
	Setting,
	SideBar,
	Contact,
	Features,
	FAQ,
	Hero,
	Rating,
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
	useAuth,
	useScroll,
};
