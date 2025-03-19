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
} from "./config/components.js";
import { io } from "socket.io-client";

const socket = io("http://localhost:3500", {
	withCredentials: true,
	autoConnect: false,
});

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
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path="/form" element={<FormPage />} />
						<Route path="/match" element={<MatchPage />} />
						<Route path="/chat" element={<Chat socket={socket} />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
