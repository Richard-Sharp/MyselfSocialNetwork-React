import {profileAPI} from "../Services(DAL)/API";

const ADD_RECORD = 'ADD-RECORD';
const UPDATE_NEW_RECORD_TEXT = 'UPDATE-NEW-RECORD-TEXT';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
	profile: {
		name: 'Artsiom',
		surname: 'Novitski',
		date_brth: '4 апреля',
		male: "Мужской",
		education: 'IT-Kamasutra',
	},
	status: '',
	recordsState: [
		{
			id: 1,
			name: 'Димыч',
			record: 'Делай сегодня то, что другие не хотят - Завтра будешь жить так, как другие не могут!'
		},
		{id: 2, name: 'Света', record: "Проголосуй, пожалуйста, за меня в конкурсе. Ссылка у меня на стене."},
		{id: 3, name: 'Сашка', record: "Делай домашку по английскому, хватит кодить!"}
	],
	newRecordText: ''

}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_RECORD:
			let newMessage = {record: action.message, name: state.profile.name}
			let newRecordsState = [newMessage, ...state.recordsState];
			state.newRecordText = '';
			return {...state, recordsState: newRecordsState};

		case UPDATE_NEW_RECORD_TEXT:
			return {...state, newRecordText: action.text};

		case SET_USER_STATUS:
			return {...state, status: action.status};

		default:
			return state;
	}
}

export const addRecordActionCreator = (message) => ({type: ADD_RECORD, message: message});
export const updateNewRecordTextActionCreator = (text) =>
		({type: UPDATE_NEW_RECORD_TEXT, text: text});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
			.then(response => {
				dispatch(setUserStatus(response.data))
			});
}

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
			.then(response => {
				if(response.data.resultCode === 0) {
					dispatch(setUserStatus(status))
				}
			});
}

export default profileReducer;
