import axios from "axios";

const token = localStorage.getItem("token");
const API = "https://soulsync-api.onrender.com";

const useAxios = axios.create({
	baseURL: API,
	timeout: 1000,
	headers: { authorization: `Bearer ${token}` },
});

export default useAxios;
