const CHANGE_ADMIN_STATUS = 'CHANGE-ADMIN-STATUS';
const DRAG_STARTED = 'DRAG_STARTED';

let initialState = {
	users: [
		{
			name: 'Dima',
			isAdmin: true,
			id: 1
		},
		{
			name: 'Artem',
			isAdmin: false,
			id: 2
		},
		{
			name: 'Sveta',
			isAdmin: true,
			id: 3
		},
		{
			name: 'Andrew',
			isAdmin: false,
			id: 4
		},
		{
			name: 'Sasha',
			isAdmin: false,
			id: 5
		},
		{
			name: 'Vanya',
			isAdmin: false,
			id: 6
		}
	]
};

let TestReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ADMIN_STATUS: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, isAdmin: !u.isAdmin};
					} else {
						return u;
					}
				})
			};
		}
		case DRAG_STARTED: {

		}
	}

	return state;
}

export const getUsers = (state) => {
	return state.testUser.users;
};

export const getAdmins = (state) => {
	return state.testUser.users.filter(user => user.isAdmin);
};

export const getNotAdmins = (state) => {
	return state.testUser.users.filter(user => !user.isAdmin);
};

export const changeUserStatus = (userId) => ({type: CHANGE_ADMIN_STATUS, userId: userId});

export default TestReducer;