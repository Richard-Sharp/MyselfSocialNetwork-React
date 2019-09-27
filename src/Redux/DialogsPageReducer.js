import {dialogsAPI} from "../Services(DAL)/API";

const GET_DIALOGS_SUCCESS = 'SN/DIALOGS-PAGE/GET-DIALOGS-SUCCESS';
const GET_MESSAGES_SUCCESS = 'SN/DIALOGS-PAGE/GET-MESSAGES-SUCCESS';
const SEND_MESSAGES_SUCCESS = 'SN/DIALOGS-PAGE/SEND-MESSAGES-SUCCESS';
const SET_HAS_NEW_MESSAGES = 'SN/DIALOGS-PAGE/SET-HAS-NEW-MESSAGES';
const PUT_UP_DIALOG = 'SN/DIALOGS-PAGE/PUT-UP-DIALOG';
const SET_CURRENT_DIALOG = 'SN/DIALOGS-PAGE/SET-CURRENT-DIALOG';
const SET_NEED_REFRESH = 'SN/DIALOGS-PAGE/SET-NEED-REFRESH';
const SET_NEW_MESSAGES_COUNT = 'SN/DIALOGS-PAGE/SET-NEW-MESSAGES-COUNT';

const update = (state, action) => ({...state, ...action.payload});

let initialState = {
	dialogs: [],
	messages: [],
	selectedDialogId: null,
	newMessagesCount: null,
	needRefresh: false,
	currentDialogsMessagesCount: 0
}

const DialogPageReducer = (state = initialState, action) => {

	switch (action.type) {
		case GET_DIALOGS_SUCCESS:
		case SET_NEW_MESSAGES_COUNT:
		case SET_NEED_REFRESH:
			return update(state, action);

		case GET_MESSAGES_SUCCESS:
			return {...state, ...action.payload};

		case SET_HAS_NEW_MESSAGES:
			return {
					...state,
					dialogs: state.dialogs.map(d => {
						if (d.id == action.userId) {
							return {...d, hasNewMessages: action.hasNewMessages}
						} else {
							return d;
						}
					})
			};

		case SEND_MESSAGES_SUCCESS:
			return {...state, messages: [...state.messages, ...action.message]};

		case SET_CURRENT_DIALOG:
			return {...state, ...action.payload};

		case PUT_UP_DIALOG:
			return {
				...state,
				dialogs: [state.dialogs.find(d => d.id == action.userId),
					...state.dialogs.filter(d => d.id != action.userId)]};
		default:
			return state;
	}
}

//ActionCreators:
export const getDialogsAC = (dialogs) => ({type: GET_DIALOGS_SUCCESS, payload: {dialogs}});
export const getMessagesAC = (messages, totalCount) => ({type: GET_MESSAGES_SUCCESS, payload: {messages, currentDialogsMessagesCount: totalCount}});
export const setHasNewMessagesAC = (userId, hasNewMessages) => ({type: SET_HAS_NEW_MESSAGES, userId, hasNewMessages});
export const sendMessagesAC = (message) => ({type: SEND_MESSAGES_SUCCESS, message});
export const putUpDialogAC = (userId) => ({type: PUT_UP_DIALOG, userId});
export const setCurrentDialogAC = (selectedDialogId) => ({type: SET_CURRENT_DIALOG, payload: {selectedDialogId}});
export const setNewMessagesCount = (newMessagesCount) => ({type: SET_NEW_MESSAGES_COUNT, payload: {newMessagesCount}});
export const setNeedRefresh= (needRefresh) => ({type: SET_NEED_REFRESH, payload: {needRefresh}});


//ThunkCreators:
export const getDialogsThunkCreator = () => async (dispatch) => {
	let dialogs = await dialogsAPI.getDialogs();
		dispatch(getDialogsAC(dialogs));
};

export const getMessagesThunkCreator = (userId) => async (dispatch) => {
	let result = await dialogsAPI.getMessages(userId);
	if (result.messages.some(m => !m.viewed)) {
		dispatch(setNeedRefresh(true));
	}
		dispatch(getMessagesAC(result.messages, result.totalCount));
		dispatch(setHasNewMessagesAC(userId, false));
};

export const sendMessagesThunkCreator = (userId, body) => async (dispatch) => {
	let result = await dialogsAPI.sendMessages(userId, body);
	if(result.resultCose === 0) {
		dispatch(sendMessagesAC(result.data.message));
		dispatch(updateDialogs(userId));
	}
};

export const startDialogsThunkCreator = (userId) => async (dispatch, getState) => {
	await dialogsAPI.startDialogs(userId)
		// let dialog = getState().dialogs.dialogs.find(d => d.id == userId);
		// if (dialog) {
		// 	dispatch(putUpDialogAC(userId));
		// } else {
		// 	dispatch(getDialogsThunkCreator());
		// }
		dispatch(getDialogsThunkCreator());
};

export const initDialogs = (userId) => async (dispatch) => {
	if(!!userId) {
		dispatch(getMessagesThunkCreator(userId));
		dispatch(setCurrentDialogAC(userId));
		await dispatch(startDialogsThunkCreator(userId));
		dispatch(getDialogsThunkCreator())
	} else {
		dispatch(getDialogsThunkCreator())};
};

export const updateDialogs = (userId = null) => (dispatch) => {
	if(!!userId) {
		dispatch(getMessagesThunkCreator(userId));
		dispatch(setCurrentDialogAC(userId));
	} else {
		dispatch(setCurrentDialogAC(null));
	}
};

export const getNewMessagesCount = () => async (dispatch, getState) => {
	let state = getState();
	let count = await dialogsAPI.getNewMessagesCount();

	if (state.dialogsPage.newMessagesCount !== count || state.dialogsPage.needRefresh) {
		dispatch(setNeedRefresh(false));
		dispatch(setNewMessagesCount(count));
		dispatch(getDialogsThunkCreator());
			if (state.dialogsPage.selectedDialogId != null) {
				dispatch(getMessagesThunkCreator(state.dialogsPage.selectedDialogId));
			}
	}
}

export default DialogPageReducer;