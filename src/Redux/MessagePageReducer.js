const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
		dialogsState: [
			{
				id: 1,
				name: 'Dima',
				userAvatar: "https://www.clipartmax.com/png/middle/344-3448955_download-english-man-icon-clipart-computer-icons-avatar-avatar-profile-man-beard.png"
			},
			{
				id: 2,
				name: 'Sasha',
				userAvatar: "https://banner2.kisspng.com/20180525/wc/kisspng-computer-icons-user-profile-eyewear-clip-art-feminine-5b0815591c4c21.9910116915272564091159.jpg"
			},
			{
				id: 3,
				name: 'Sveta',
				userAvatar: "https://banner2.kisspng.com/20180430/vfw/kisspng-computer-icons-woman-demo-icon-5ae77d86b418d5.0160301215251203907377.jpg"
			},
			{
				id: 4,
				name: 'Viktor',
				userAvatar: "https://banner2.kisspng.com/20180710/bjr/kisspng-computer-icons-user-profile-avatar-clip-art-female-user-icon-5b448eaa98f3b0.1463231315312196266265.jpg"
			},
			{id: 5, name: 'Adndrew', userAvatar: "https://img.icons8.com/cotton/2x/user.png "}
		],
		messagesState: [
			{id: 1, message: "Hello!"},
			{id: 2, message: "How are you?"},
			{id: 3, message: "What do you do?"},
			{id: 4, message: "What's up?"}
		],
		newMessageBody: ''
};

const messagePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			// let newMessage = [...state.messagesState.push({id: 5, message: body})];
			let newMessage = [...state.messagesState, {id: 5, message: body}];
			state.newMessageBody = '';
			return {...state, messagesState: newMessage};

		case UPDATE_NEW_MESSAGE_BODY:
			// state.newMessageBody = action.body;
			return {...state, newMessageBody: action.body};

		default:
			return state;

	}
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
		({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export default messagePageReducer;