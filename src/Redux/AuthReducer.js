import {loginStatuses, setLoginMessage, setLoginStatus} from "./LoginReducer";
import SNAxios from "../Services(DAL)/SNAxios";

const SET_IS_AUTH = 'SN|AUTH|SET-IS-AUTH';
const SET_USER_INFO = 'SN|AUTH|SET-USER-INFO';

let initialState = {
	isAuth: false,
	userInfo: {
		userId: null,
		userName: null,
		userAvatar: ''
	}
};

export const setIsAuth = (value) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId, userName) => ({type: SET_USER_INFO, userId, userName});


export const infoMeTH = () => (dispatch) => {
	SNAxios.get('auth/me')
			.then(res => {
				if (res.data.resultCode === 0) {
					dispatch(setIsAuth(true));
					dispatch(setUserInfo(res.data.data.id, res.data.data.login));
				}
			})
};
export const logOutTH = () => (dispatch) => {
	SNAxios.post('auth/logout')
			.then(res => {
				if (res.data.resultCode === 0) {
					dispatch(setIsAuth(false));
					dispatch(setUserInfo(null, null));
				}
			})
};

export const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_AUTH:
			return {...state, isAuth: action.value}

		case SET_USER_INFO:
			return {...state,
				userInfo: {
						...state.userInfo,
						userId: action.userId,
						userName: action.userName
				}
			}

		default:
			return state;
	}
}