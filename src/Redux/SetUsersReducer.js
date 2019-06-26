import {friendsAPI, usersAPI} from "../Services(DAL)/API";
import {setFriendsAC, setStatusAC, statuses} from "./FriendsPageReducer";

const SET_USERS = 'SN|SETUSERS|SET-USERS';
const SUBSCRIBE = 'SN|SETUSERS|SUBSCRIBE';
const UNSUBSCRIBE = 'SN|SETUSERS|UNSUBSCRIBE';
const SET_CURRENT_PAGE = 'SN|SETUSERS|SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SN|SETUSERS|SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'SN|SETUSERS|TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWIG = 'SN|SETUSERS|TOGGLE_IS_FOLLOWIG';

let initialState = {
	items: [],
	pageSize: 10,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

let SetUsersReducer = (state = initialState, action) => {
	let copy;
	let user;
	switch (action.type) {
		case SET_USERS:
			return {...state, items: action.users}

		case SUBSCRIBE:
			copy = {...state, items: [...state.items]}
			user = copy.items.find(user => user.id === action.userId);
			user.followed = true;
			return copy;

		case UNSUBSCRIBE:
			copy = {...state, items: [...state.items]}
			user = copy.items.filter(u => u.id === action.userId)[0];
			user.followed = false;
			return copy;

		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}

		case SET_TOTAL_USER_COUNT:
			return {...state, totalItemsCount: action.total}

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		case TOGGLE_IS_FOLLOWIG: {
			return {
				...state,
				followingInProgress: action.isFetching
						? [...state.followingInProgress, action.userId]
						: state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state;
	}
}

//ActionCreators
export let setUsersACreator = (users) => ({
	type: SET_USERS,
	users: users
})
export let subscribeACreator = (userId) => ({type: SUBSCRIBE, userId})
export let unSubscribeACreator = (userId) => ({type: UNSUBSCRIBE, userId})
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setUsersTotalCountAC = (totalItemsCount) => ({type: SET_TOTAL_USER_COUNT, total: totalItemsCount})
export let toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export let toggleFollowingProgressAC = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWIG, isFetching, userId})

////ThunkCreators
export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetchingAC(true));
		usersAPI.getUsers(currentPage, pageSize)
				.then(data => {
					if (data.error) {
						alert(data.error);
					} else {
						dispatch(toggleIsFetchingAC(false));
						dispatch(setCurrentPageAC(currentPage))
						dispatch(setUsersACreator(data.items));
						dispatch(setUsersTotalCountAC(data.totalCount));
					}
				});
	}
}

export const subscribeThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgressAC(true, userId));
		usersAPI.subScribeUser(userId)
				.then(data => {
					dispatch(subscribeACreator(userId));
					dispatch(toggleFollowingProgressAC(false, userId));
					friendsAPI.getFriends()
							.then(data => {
								dispatch(setStatusAC(statuses.SUCCESS));
								dispatch(setFriendsAC(data.items));
							});
				})
				.catch((response) => {
					alert(response.message);
				})

	}
}

export const unSubscribeThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgressAC(true, userId));
		usersAPI.unSubscribeUser(userId)
				.then(data => {
					dispatch(unSubscribeACreator(userId));
					dispatch(toggleFollowingProgressAC(false, userId));
					dispatch(setFriendsAC(data.items));
					friendsAPI.getFriends()
							.then(data => {
								dispatch(setStatusAC(statuses.SUCCESS));
								dispatch(setFriendsAC(data.items));
							});
				})
				.catch((response) => {
					alert(response.message);
				})

	}
}

export default SetUsersReducer;