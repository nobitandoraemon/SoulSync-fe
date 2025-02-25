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
import socketIO from "socket.io-client";
import AuthProvider from "./hooks/useAuth.jsx";
import PrivateRoute from "./pages/private.jsx";

const socket = socketIO.connect("http://localhost:4000");

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
