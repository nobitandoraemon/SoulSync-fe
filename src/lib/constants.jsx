const API_URL = "http://localhost:3500";
export const API_ROUTES = {
	SIGN_UP: `${API_URL}/register`,
	SIGN_IN: `${API_URL}/auth/login`,
	REFRESH_TOKEN: `${API_URL}/refresh`,
	LOG_OUT: `${API_URL}/auth/logout`,
	GET_USER: `${API_URL}/users`,
	MATCH: `${API_URL}/match`,
};

export const APP_ROUTES = {
	SIGN_UP: "/reg",
	SIGN_IN: "/login",
	CHAT: "/chat",
	FORM: "/form",
};
