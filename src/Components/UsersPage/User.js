import React from 'react';
import {baseUserImg} from "../../Services(DAL)/BaseImgs";
import style from "./usersPage.module.css"
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, subScribeUser, unSubcribeUser, isAuth, authRedirect}) => {

	return <div className={style.users}>
					<NavLink to={'/user/' + user.id}>
						<img className={style.userImg} src={user.photos.small
								? user.photos.small
								: baseUserImg} alt="userPhoto"/>
					</NavLink>
					<h4>{user.name}</h4>

					{user.followed
							? <button
									disabled={followingInProgress.some(id => id === user.id)}
									onClick={() => {
										unSubcribeUser(user)
									}}>Отписаться</button>
							: <button
									data-user-id={user.id}
									disabled={followingInProgress.some(id => id === user.id)}
									onClick={isAuth ? subScribeUser : authRedirect}>Подписаться</button>}
				</div>

}

export default User;