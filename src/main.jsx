import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import {
	Layout,
	Chat,
	Login,
	Reg,
	App,
	ThemeProvider,
	PrivateRoute,
	NotFound,
	FormPage,
	MatchPage,
	OTPPage,
	SettingPage,
} from "./config/components.js";
import { socket } from "./config/socket.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<App />} />
						<Route path="/login" element={<Login />} />
						<Route path="/reg" element={<Reg />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/verify-otp" element={<OTPPage />} />
					</Route>
					<Route element={<PrivateRoute socket={socket} />}>
						<Route path="/form" element={<FormPage />} />
						<Route path="/setting" element={<SettingPage />} />
						<Route path="/match" element={<MatchPage />} />
						<Route path="/chat" element={<Chat socket={socket} />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
