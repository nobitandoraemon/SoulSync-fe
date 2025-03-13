const API_URL = "https://soulsync-api.onrender.com";
export const API_ROUTES = {
	SIGN_UP: `${API_URL}/register`,
	SIGN_IN: `${API_URL}/auth/login`,
	LOG_OUT: `${API_URL}/auth/logout`,
	GET_USER: `${API_URL}/users`,
};

export const APP_ROUTES = {
	SIGN_UP: "/reg",
	SIGN_IN: "/login",
	CHAT: "/chat",
};
