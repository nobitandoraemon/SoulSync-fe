import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./context/themeprovider.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/ui/layout.jsx";
import About from "./pages/about.jsx";
import Chat from "./pages/chat.jsx";
import Contact from "./pages/contact.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<App />} />
						<Route path="/about" element={<About />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
