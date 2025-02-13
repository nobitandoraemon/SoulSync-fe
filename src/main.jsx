import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./context/themeprovider.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/ui/layout.jsx";
import Chat from "./pages/chat.jsx";
import Auth from "./pages/auth.jsx";
import User from "./pages/user.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<App />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/auth" element={<Auth />} />
						<Route path="/user" element={<User />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
