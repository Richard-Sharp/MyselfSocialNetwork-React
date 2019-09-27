import {loginAPI} from "../Services(DAL)/API";
import {infoMeThunkCreator, setIsAuth} from "./AuthReducer";
import {setFriendsThunkCreator} from "./FriendsPageReducer";
import {stopSubmit} from "redux-form";

const SET_LOGINRDX_STATUS = 'SN|LOGIN|SET-LOGINRDX-STATUS';
const SET_LOGINRDX_MESSAGE = 'SN|LOGIN|SET-LOGINRDX-MESSAGE';

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


const LoginRDXFReducer = (state = initialState, action) => {
	return state;
}

//ActionCreators
export const setLoginStatus = (status) => ({type: SET_LOGINRDX_STATUS, status});
export const setLoginMessage = (message) => ({type: SET_LOGINRDX_MESSAGE, message});

////ThunkCreators
export const loginRDXThunkCreator = (login, password, rememberMe) => (dispatch) => {
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
					dispatch(stopSubmit("login", {_error: data.messages[0]}));

					// dispatch(setLoginStatus(loginStatuses.ERROR));
					// dispatch(setLoginMessage(data.messages[0]));
					// alert('ERROR: ' + data.messages[0]);
				}
			})
};








export default LoginRDXFReducer;