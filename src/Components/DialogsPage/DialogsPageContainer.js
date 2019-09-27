import React from 'react';
import DialogPage from "./DialogsPage";
import {connect} from "react-redux";
import {initDialogs, updateDialogs, sendMessagesThunkCreator, getNewMessagesCount} from "../../Redux/DialogsPageReducer";

class DialogPageContainer extends React.Component {

// useEffect(() => {
// 	setInterval(() => {
// 	this.props.getNewMessagesCount();
// }, 5000);
// }, []);
//
// setInterval(() => {
// 	this.props.getNewMessagesCount();
// }, 5000);

	componentDidMount() {
		this.props.initDialogs(this.props.userId);
		this.props.getNewMessagesCount();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.userId !== this.props.userId) {
			this.props.updateDialogs(this.props.userId);
			this.props.getNewMessagesCount();
		}
	}

	componentWillUnmount() {
		this.props.getNewMessagesCount();
	}

	render() {

		return <DialogPage {...this.props} />
	}
}

let mapStateToProps = (state) => ({
	dialogs: state.dialogsPage.dialogs,
	messages: state.dialogsPage.messages,
	selectedDialogId: state.dialogsPage.selectedDialogId,
	newMessagesCount: state.dialogsPage.newMessagesCount,
	currentDialogsMessagesCount: state.dialogsPage.currentDialogsMessagesCount

})

const DialogsPageProdaction = connect(mapStateToProps, {initDialogs, updateDialogs, sendMessagesThunkCreator, getNewMessagesCount})(DialogPageContainer);
export default DialogsPageProdaction;