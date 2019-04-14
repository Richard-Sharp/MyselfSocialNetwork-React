
const SET_FRIENDS = 'SN/FRIENDS/SET_FRIENDS';
const SET_STATUS = 'SN/FRIENDS/SET_STATUS';
const UNSUBSCRIBE = 'SN/FRIENDS/UNSUBSCRIBE';


export const statuses = {
	NOT_INITIALIZED: 'NOT_INITIALIZED',
	ERROR: 'ERROR',
	INPROGRESS: 'INPROGRESS',
	SUCCESS: 'SUCCESS'
};

let initialState = {
	status: statuses.NOT_INITIALIZED,
	users: []
};


const FriendsPageReducer = (state = initialState, action) => {
	let copy;
	let user;
	switch (action.type) {
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case SET_FRIENDS: {
			return {
				...state,
				users: action.users
			}
		}
		case UNSUBSCRIBE:
			copy = {...state, users: [...state.users]}
			user = copy.users.filter(u => u.id === action.userId)[0];
			user.followed = false;
			return copy;

		default: {
			return state
		}
	}
}
export const setFriendsAC = (users) => ({type: SET_FRIENDS, users: users});
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export let unSubscribeAC = (userId) => ({type: UNSUBSCRIBE, userId})
export default FriendsPageReducer;