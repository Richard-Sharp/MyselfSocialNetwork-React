import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/MessagePageReducer";
import MessagePage from "./MessagePage";
import {connect} from "react-redux";
import {AuthRedirectHOC} from "../../HOC/AuthRedirectHOC";
import {compose} from "redux";


// const MessagePageContainer = (props) => {
// 	let state = props.store.getState().messagePage;
//
// 	let onSendMessageClick = () => {
// 		props.store.dispatch(sendMessageCreator());
// 	};
// 	let onNewMessageChange = (body) => {
// 		props.store.dispatch(updateNewMessageBodyCreator(body));
// 	}
//
// 	return (
// 			<MessagePage updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagePage={state} />
// 	);
// }




const mapStateToProps = (state) => {
	return {
		messagePage: state.messagePage
	}};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body))
		},
		sendMessage: () => {
			dispatch(sendMessageCreator())
		}
	}
}


// let withAuthRedirect = AuthRedirectHOC(MessagePage);
// let MessagePageContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect);
// export default MessagePageContainer;

export default compose(
		connect(mapStateToProps, mapDispatchToProps),
		AuthRedirectHOC
)(MessagePage);
