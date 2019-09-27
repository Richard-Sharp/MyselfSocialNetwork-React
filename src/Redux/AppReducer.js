import {loginAPI} from "../Services(DAL)/API";
import {setFriendsThunkCreator} from "./FriendsPageReducer";
import {getUsersThunkCreator} from "./SetUsersReducer";
import {getUserStatusThunkCreator} from "./ProfileReducer";
import {infoMeThunkCreator} from "./AuthReducer";

const SET_INITIALIZED = 'SN|APP|SET-INITIALIZED';


let initialState = {
	initialized: false
};


export const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {...state, initialized: true}

		default:
			return state;
	}
};

//ActionCreators
export const initializedAppAC = () => ({type: SET_INITIALIZED});


//ThunkCreators
export const initializedAppTC = () => (dispatch) => {
	let promise = dispatch(infoMeThunkCreator());

	Promise.all([promise])
			.then(() => {
						dispatch(initializedAppAC());
					});
};
