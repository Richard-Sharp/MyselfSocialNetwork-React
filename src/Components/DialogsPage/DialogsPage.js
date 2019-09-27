import React from 'react';
import style from './DialogsPage.module.css';
import {baseUserImg} from "../../Services(DAL)/BaseImgs";
import {NavLink} from "react-router-dom";


const DialogPage = (props) => {
	// let dialogs = (props.dialogs);
	let messageRef = React.createRef();
	const sendMessage = () => {
		props.sendMessagesThunkCreator(props.selectedDialogId, messageRef.current.value);
	}

	return (
			<div className={style.wrapper}>
				<div className={style.dialogs}>
					<h3>DIALOGS</h3>
					{/*{props.newMessagesCount &&*/}
					{/*<div>Новых сообщений: {props.newMessagesCount} </div>*/}
					{/*}*/}
					<div>Новых сообщений: {props.newMessagesCount} </div>

					<div style={style}>
						{props.dialogs.map((d) => {
							return <div style={{border: 1 + 'px' + ' solid', margin: 3 + 'px', padding: 5 + 'px'}}>
								<NavLink to={`/dialogsPage/${d.id}`} key={d.id} activeClassName={style.active} >
									<img style={{width: 50 + 'px', height: 50 + 'px', margin: 3 + 'px'}} src={d.photos.large ? d.photos.large : baseUserImg} alt="userPhoto"/>
									{d.userName}
								</NavLink>
										{d.hasNewMessages && <img style={{width: '30px', margin: '5px'}}
										src="https://www.friendsmatchme.com/blog/wp-content/uploads/new-message.png" alt="new-messages"/>}

							</div>})}
					</div>

				</div>
				<div className={style.messages}>
					<h3>MESSAGES</h3>
					<div>
						{props.messages.length < props.currentDialogsMessagesCount
							&& <button>Показать предыдущие</button>}

						{props.messages.map(m => <div key={m.id}><b>{m.senderName}: </b>{m.body}
							{!!m.viewed && <span style={{color: 'lime', textAlign: 'right'}}>Просмотрено</span>}
						</div>)}
					</div>
					{props.selectedDialogId &&
					<div>
						<textarea ref={messageRef} cols="50" rows="3">

						</textarea>
						<div>
							<button onClick={sendMessage}>Отправить</button>
						</div>
					</div>}
				</div>
			</div>
	)
}

export default DialogPage;