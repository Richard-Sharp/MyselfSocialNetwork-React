import {loginAPI} from "../Services(DAL)/API";
import {setFriendsThunkCreator} from "./FriendsPageReducer";
import {getUsersThunkCreator} from "./SetUsersReducer";
import {getUserStatusThunkCreator} from "./ProfileReducer";

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


export const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_AUTH:
			return {...state, isAuth: action.value}

		case SET_USER_INFO:
			return {
				...state,
				userInfo: {
					...state.userInfo,
					userId: action.userId,
					userName: action.userName
				}
			}

		default:
			return state;
	}
};

//ActionCreators
export const setIsAuth = (value) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId, userName) => ({type: SET_USER_INFO, userId, userName});

//ThunkCreators
export const infoMeThunkCreator = () => async (dispatch) => {
	let data = await loginAPI.authMe();
	if (data.resultCode === 0) {
		dispatch(setIsAuth(true));
		dispatch(setUserInfo(data.data.id, data.data.login));
		dispatch(getUserStatusThunkCreator(data.data.id));
	}
};
export const logOutThunkCreator = () => async (dispatch) => {
	let data = await loginAPI.authLogOut();
	if (data.resultCode === 0) {
		dispatch(setIsAuth(false));
		dispatch(setUserInfo(null, null));
		dispatch(setFriendsThunkCreator());
		dispatch(getUsersThunkCreator());
	}
};