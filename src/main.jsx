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
} from "./config/components.js";
import { socket } from "./config/socket.js";
import FormPage from "./pages/form.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<App />} />
						<Route path="/login" element={<Login />} />
						<Route path="/reg" element={<Reg />} />
						<Route path="/form" element={<FormPage />} />
						<Route path="*" element={<NotFound />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path="/chat" element={<Chat socket={socket} />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
