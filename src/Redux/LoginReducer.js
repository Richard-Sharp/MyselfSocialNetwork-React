import SNAxios from "../Services(DAL)/SNAxios";
import {infoMeTH, setIsAuth} from "./AuthReducer";

const SET_LOGIN_STATUS = 'SN|LOGIN|SET-LOGIN-STATUS';
const SET_LOGIN_MESSAGE = 'SN|LOGIN|SET-LOGIN-MESSAGE';

export const loginStatuses = {
	INIT: 'INIT',
	ERROR: 'ERROR',
	INPROGRESS: 'INPROGRESS',
	SUCCESS: 'SUCCESS',
	CAPTCHAREQUIRED: 'CAPTCHAREQUIRED'
};

let initialState = {
	status: loginStatuses.INIT,
	massage: ''
};

export const setLoginStatus = (status) => ({type: SET_LOGIN_STATUS, status});
export const setLoginMessage = (message) => ({type: SET_LOGIN_MESSAGE, message});

export const loginTH = (login, password, rememberMe) => (dispatch) => {
	dispatch(setLoginStatus(loginStatuses.INPROGRESS));

		SNAxios.post('auth/login', {
			email: login,
			password: password,
			rememberMe: rememberMe
		}).then(res => {
			if(res.data.resultCode === 0) {
				dispatch(setLoginStatus(loginStatuses.SUCCESS));
				dispatch(setIsAuth(true));
				dispatch(infoMeTH());
				alert('SUCCESS: You are logined as ' + login + '. Your ID is: ' + res.data.data.userId);
			} else {
				dispatch(setLoginStatus(loginStatuses.ERROR));
				dispatch(setLoginMessage(res.data.messages[0]));
				alert('ERROR: ' + res.data.messages[0]);
			}
		})
};



export const LoginReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_LOGIN_STATUS:
			return {...state, status: action.status};
		case SET_LOGIN_MESSAGE:
			return {...state, message: action.message};
		default:
			return state;
	}
}
// export const setLoginStatus = (status) => ({type: SET_LOGIN_STATUS, status});
