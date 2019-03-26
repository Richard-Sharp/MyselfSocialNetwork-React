import profileReducer from "./ProfileReducer";
import messagePageReducer from "./MessagePageReducer";


let store = {
	_state: {
		profilePage: {
			profile: {
				name: 'Artsiom',
				surname: 'Novitski',
				date_brth: '4 апреля',
				male: "Мужской",
				education: 'IT-Kamasutra'
			},
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
		},
		messagePage: {
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
		}
	},
	_callSubscriber() {
		console.log('rerender');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagePage = messagePageReducer(this._state.messagePage, action);

		this._callSubscriber(this._state);
	}
}




export default store;

// let state = {
// 	profilePage: {
// 		profile: {
// 			name: 'Artsiom',
// 			surname: 'Novitski',
// 			date_brth: '4 апреля',
// 			male: "Мужской",
// 			education: 'IT-Kamasutra'
// 		},
// 		recordsState: [
// 			{id: 1, name:'Димыч', record: 'Делай сегодня то, что другие не хотят - Завтра будешь жить так, как другие не могут!' },
// 			{id: 2, name:'Света', record: "Проголосуй, пожалуйста, за меня в конкурсе. Ссылка у меня на стене." },
// 			{id: 3, name:'Сашка', record: "Делай домашку по английскому, хватит кодить!" }
// 		],
// 		newRecordText: ''
// 	},
// 	messagePage: {
// 		dialogsState: [
// 			{id: 1, name: 'Dima', userAvatar: "https://www.clipartmax.com/png/middle/344-3448955_download-english-man-icon-clipart-computer-icons-avatar-avatar-profile-man-beard.png"},
// 			{id: 2, name: 'Sasha', userAvatar: "https://banner2.kisspng.com/20180525/wc/kisspng-computer-icons-user-profile-eyewear-clip-art-feminine-5b0815591c4c21.9910116915272564091159.jpg" },
// 			{id: 3, name: 'Sveta', userAvatar: "https://banner2.kisspng.com/20180430/vfw/kisspng-computer-icons-woman-demo-icon-5ae77d86b418d5.0160301215251203907377.jpg" },
// 			{id: 4, name: 'Viktor', userAvatar: "https://banner2.kisspng.com/20180710/bjr/kisspng-computer-icons-user-profile-avatar-clip-art-female-user-icon-5b448eaa98f3b0.1463231315312196266265.jpg"},
// 			{id: 5, name: 'Adndrew', userAvatar: "https://img.icons8.com/cotton/2x/user.png "}
// 		],
// 		messagesState: [
// 			{id: 1, message: "Hello!"},
// 			{id: 2, message: "How are you?"},
// 			{id: 3, message: "What do you do?"},
// 			{id: 4, message: "What's up?"}
// 		]
// 	}
//
// 	// messages: [
// 	//     {
// 	//         author: 'Dima',
// 	//         message: 'Hello!'
// 	//     },
// 	//     {
// 	//         author: 'Andrey',
// 	//         message: 'How are you?'
// 	//     },
// 	//     {
// 	//         author: 'Sasha',
// 	//         message: 'What do you do?'
// 	//     },
// 	//     {
// 	//         author: 'Sveta',
// 	//         message: 'Like my photo, plz!'
// 	//     }
// 	//]
// }
// export const addRecord = () => {
// 	if (state.profilePage.newRecordText === '') {
// 		console.log('empty message');
// 	} else {
// 		let newRecord = {
// 			id: 4,
// 			name: state.profilePage.profile.name,
// 			record: state.profilePage.newRecordText
// 		};
// 		state.profilePage.recordsState.unshift(newRecord);
// 		state.profilePage.newRecordText = '';
// 		rerenderPage(state);
// 	}
// }
// export const updateNewRecordText = (newText) => {
// 	state.profilePage.newRecordText = newText;
// 	rerenderPage(state);
// }
// export const subscribe = (observer) => {
// 	rerenderPage = observer;
// }

// addRecord() {
// 	if (this._state.profilePage.newRecordText === '') {
// 		console.log('empty message');
// 	} else {
// 		let newRecord = {
// 			id: 4,
// 			name: this._state.profilePage.profile.name,
// 			record: this._state.profilePage.newRecordText
// 		};
// 		this._state.profilePage.recordsState.unshift(newRecord);
// 		this._state.profilePage.newRecordText = '';
// 		this._callSubscriber(this._state);
// 	}
// },
// updateNewRecordText (newText) {
// 	this._state.profilePage.newRecordText = newText;
// 	this._callSubscriber(this._state);
// },

// dispatch(action) {
// 	this._state.profilePage = profileReducer(this._state.profilePage, action);
// 	this._state.messagePage = messagePageReducer(this._state.messagePage, action);
//
//
// 	if(action.type === ADD_RECORD) {
// 		if (this._state.profilePage.newRecordText === '') {
// 			console.log('empty message');
// 		} else {
// 			let newRecord = {
// 				id: 4,
// 				name: this._state.profilePage.profile.name,
// 				record: this._state.profilePage.newRecordText
// 			};
// 			this._state.profilePage.recordsState.unshift(newRecord);
// 			this._state.profilePage.newRecordText = '';
// 			this._callSubscriber(this._state);
// 		}
// 	} else if (action.type === UPDATE_NEW_RECORD_TEXT) {
// 		this._state.profilePage.newRecordText = action.text;
// 		this._callSubscriber(this._state);
// 	} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
// 		this._state.messagePage.newMessageBody = action.body;
// 		this._callSubscriber(this._state);
// 	}	else if (action.type === SEND_MESSAGE) {
// 		let body = this._state.messagePage.newMessageBody;
// 		this._state.messagePage.messagesState.push({id: 5, message: body});
// 		this._state.messagePage.newMessageBody = '';
// 		this._callSubscriber(this._state);
// 	}
// }
