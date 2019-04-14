import React from 'react';
import {statuses} from "../../Redux/FriendsPageReducer";
import style from './FriendsPage.module.css';
import SNAxios from "../../Services/SNAxios";
import {baseUserImg} from "../../Services/BaseImgs";

let FriendsPage = (props) => {
	if (props.status === statuses.NOT_INITIALIZED) {
		props.setStatus(statuses.INPROGRESS)
		SNAxios
				.get("users?count=100")
				.then((response) => {
					props.setStatus(statuses.SUCCESS)
					props.setFriends(response.data.items);
				})
	}

	let unSubcribe = (user) => {
		SNAxios.delete('follow/' + user.id)
				.then(response => {
					props.unSubscribe(user.id);
				})
		SNAxios
				.get("users?count=100")
				.then( (response) => {
					if(response.data.error) {
						alert(response.data.error);
					} else {
						props.setUsers(response.data.items);
					}
				});
	};

	let filterFriends = props.users.filter(fr => fr.followed);
	if (!filterFriends.length) {
		return <div>Friends not found</div>
	}
	return <div> {filterFriends.map(user =>
					<div className={style.user}>
					<img className={style.avatar}
						 src={user.photos.small == null ? baseUserImg : user.photos.small} alt=''/>
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