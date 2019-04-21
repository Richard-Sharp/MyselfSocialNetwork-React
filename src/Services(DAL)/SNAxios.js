import * as axios from "axios";

const SNAxios = axios.create ({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true
});

export default SNAxios;