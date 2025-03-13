import axios from "axios";

const token = localStorage.getItem("token");
const API = "https://soulsync-api.onrender.com";

const useAxios = axios.create({
	baseURL: API,
	timeout: 1000,
	headers: { authorization: `Bearer ${token}` },
});

// // Add a request interceptor
// useAxios.interceptors.request.use(
// 	(config) => {
// 		// Add logic to attach token if needed
// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

// // Add a response interceptor
// useAxios.interceptors.response.use(
// 	(response) => response,
// 	async (error) => {
// 		const originalRequest = error.config;
// 		if (error.response.status === 401 && !originalRequest._retry) {
// 			originalRequest._retry = true;
// 			try {
// 				// Assume refreshToken is stored and available
// 				const refreshToken = localStorage.getItem("refreshToken");
// 				const response = await axios.get("/refresh", { token: refreshToken });
// 				const newToken = response.data.accessToken;

// 				// Update token in local storage and axios headers
// 				localStorage.setItem("token", newToken);
// 				useAxios.defaults.headers["authorization"] = `Bearer ${newToken}`;
// 				originalRequest.headers["authorization"] = `Bearer ${newToken}`;

// 				return useAxios(originalRequest);
// 			} catch (refreshError) {
// 				// Handle refresh token failure (e.g., redirect to login)
// 				console.error("Token refresh failed:", refreshError);
// 				return Promise.reject(refreshError);
// 			}
// 		}
// 		return Promise.reject(error);
// 	}
// );

export default useAxios;
