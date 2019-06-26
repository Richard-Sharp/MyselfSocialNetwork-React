import * as axios from "axios";

const SNAxios = axios.create ({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '801df46e-f886-45d8-a1e6-8bcfa28d98d8'
	}
});

export default SNAxios;