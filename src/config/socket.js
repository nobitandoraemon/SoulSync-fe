import { io } from "socket.io-client";
export const socket = io("https://soulsync-api.onrender.com", {
	withCredentials: true,
	autoConnect: false,
	auth: {
		username: localStorage.getItem("username"),
	},
});
