import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/MessagePageReducer";
import MessagePage from "./MessagePage";


const MessagePageContainer = (props) => {
	let state = props.store.getState().messagePage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};
	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}

	return (
			<MessagePage updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagePage={state} />
	);
}

export default MessagePageContainer;
