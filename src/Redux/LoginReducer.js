import {infoMeThunkCreator, setIsAuth} from "./AuthReducer";
import {loginAPI} from "../Services(DAL)/API";
import {setFriendsThunkCreator} from "./FriendsPageReducer";

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

//ActionCreators
export const setLoginStatus = (status) => ({type: SET_LOGIN_STATUS, status});
export const setLoginMessage = (message) => ({type: SET_LOGIN_MESSAGE, message});

////ThunkCreators
export const loginThunkCreator = (login, password, rememberMe) => (dispatch) => {
	dispatch(setLoginStatus(loginStatuses.INPROGRESS));
	loginAPI.loginACC(login, password, rememberMe)
		.then(data => {
		if(data.resultCode === 0) {
			dispatch(setLoginStatus(loginStatuses.SUCCESS));
			dispatch(setIsAuth(true));
			dispatch(infoMeThunkCreator());
			dispatch(setFriendsThunkCreator());
			alert('SUCCESS: You are logined as ' + login + '. Your ID is: ' + data.data.userId);
		} else {
			dispatch(setLoginStatus(loginStatuses.ERROR));
			dispatch(setLoginMessage(data.messages[0]));
			alert('ERROR: ' + data.messages[0]);
		}
	})
};



// export const setLoginStatus = (status) => ({type: SET_LOGIN_STATUS, status});
