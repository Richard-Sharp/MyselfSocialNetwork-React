import React from 'react';
import style from './Message.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const MessagePage = (props) => {
	let state = props.messagePage;

	let dialogsList = state.messagePage.dialogsState.map(d => <Dialog name={d.name} id={d.id} userAvatar={d.userAvatar}/> );
	let messagesList = state.messagePage.messagesState.map(m => <Message message={m.message} id={m.id}/> );
	let newMessageBody = state.messagePage.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	};
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}

	return (
			<div className={style.messagePage}>
				<div className={style.dialogs}>
					{dialogsList}
				</div>
				<div className={style.messages}>
				<div>	{messagesList}</div>
					<div><textarea value={newMessageBody}
												 onChange={onNewMessageChange}
												 placeholder='Введите ваше сообщение'
												 cols="100" rows="3"> </textarea></div>
					<div><button onClick={onSendMessageClick}>Отправить сообщение</button></div>
				</div>

				{/*<span className = {style.massage}>Сообщение 1</span><br></br>	 */}

			</div>
	);
}

export default MessagePage;
