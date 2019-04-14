const SET_USERS = 'SN|SETUSERS|SET-USERS';
const SUBSCRIBE = 'SN|SETUSERS|SUBSCRIBE';
const UNSUBSCRIBE = 'SN|SETUSERS|UNSUBSCRIBE';

let initialState = {
	items: []
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

		default:
			return state;
	}
}

export let setUsersACreator = (users) => ({
	type: SET_USERS,
	users: users
})
export let subscribeACreator = (userId) => ({type: SUBSCRIBE, userId})
export let unSubscribeACreator = (userId) => ({type: UNSUBSCRIBE, userId})
export default SetUsersReducer;