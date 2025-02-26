import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import {
	Layout,
	Chat,
	Login,
	Reg,
	AuthProvider,
	App,
	ThemeProvider,
	PrivateRoute,
	TestPage,
} from "./config/components.js";
import { socket } from "./config/socket.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path="/" element={<Layout socket={socket} />}>
							<Route index element={<App socket={socket} />} />
							<Route path="/login" element={<Login socket={socket} />} />
							<Route path="/reg" element={<Reg socket={socket} />} />
							<Route path="/test" element={<TestPage socket={socket} />} />
						</Route>
						<Route element={<PrivateRoute />}>
							<Route path="/chat" element={<Chat socket={socket} />} />
						</Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
