import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./context/themeprovider.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/ui/layout.jsx";
import Chat from "./pages/chat.jsx";
import Login from "./pages/login.jsx";
import Reg from "./pages/reg.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<App />} />
						<Route path="/login" element={<Login />} />
						<Route path="/reg" element={<Reg />} />
					</Route>
					<Route path="/chat" element={<Chat />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
