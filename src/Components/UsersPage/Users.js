import React from 'react';
import {statuses} from "../../Redux/UsersPageReducer";
import * as axios from "axios";
import style from './Users.module.css';

let Users = (props) => {
	if (props.status === statuses.NOT_INITIALIZED) {
		props.setStatus(statuses.INPROGRESS)
		axios
				.get("https://social-network.samuraijs.com/api/1.0/users?count=100")
				.then((response) => {
					props.setStatus(statuses.SUCCESS)
					props.setUsers(response.data.items);
				})
	}

	if (!props.users.length) {
		return <div>Users not found</div>
	}

	return <div> {props.users.map(user =>
			<div className={style.user}>
				<img className={style.avatar} src={user.photos.small == null ? "http://beauty73.org/wp-content/uploads/2018/11/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg" : user.photos.small} alt=''/>
				<div className={style.name}>{user.name}</div>
				<div className={style.status}>{user.status ? user.status : 'no status'}</div>
			</div>
	)
	}
	</div>

}



export default Users;