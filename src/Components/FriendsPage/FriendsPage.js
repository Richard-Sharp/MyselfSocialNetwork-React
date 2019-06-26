import React from 'react';
import {statuses} from "../../Redux/FriendsPageReducer";
import style from './FriendsPage.module.css';
import {baseUserImg} from "../../Services(DAL)/BaseImgs";

let FriendsPage = (props) => {
	if (props.status === statuses.NOT_INITIALIZED) {
		props.setFriends();
	}

	let unSubcribe = (user) => {
		props.unSubscribeFriend(user.id);
	};

	let filterFriends = props.users.filter(fr => fr.followed);
	if (!filterFriends.length) {
		return <div>Friends not found</div>
	}
	return <div> {filterFriends.map(user =>
			<div className={style.user}>
				<img className={style.avatar}
						 src={user.photos.small == null ? baseUserImg : user.photos.small} alt='avatar'/>
				<div className={style.name}>{user.name}</div>
				<div className={style.status}>{user.status ? user.status : 'no status'}</div>
				<div>
					<button onClick={() => unSubcribe(user)}>Отписаться</button>
				</div>
			</div>
	)}
	</div>
}

export default FriendsPage;