import React from 'react';
import {baseUserImg} from "../../Services(DAL)/BaseImgs";
import style from "./usersPage.module.css"
import {NavLink} from "react-router-dom";

const SetUsersPage = (props) => {
	let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return <div className={style.wrapper}>

		<div className={style.pagesWrapper}>
			{pages.map(p => {
					return <button
						onClick={() => {props.onPageChanged(p)}}
						className={props.currentPage === p && style.selectedPage}>{p}</button>
			})}
		</div>

		<div className={style.usersWrapper} >
		{
			props.users.map(user => <div className={style.users} key={user.id}>
				<NavLink to={'/user/' + user.id}>
				<img className={style.userImg} src={user.photos.small
						? user.photos.small
						: baseUserImg} alt=""/>
				</NavLink>
				<h4>{user.name}</h4>

				{user.followed
						? <button
								disabled={props.followingInProgress.some(id => id === user.id)}
								onClick={() => {
							props.unSubcribeUser(user)
						}}>Отписаться</button>
						: <button
								data-user-id={user.id}
								disabled={props.followingInProgress.some(id => id === user.id)}
								onClick={props.subScribeUser}>Подписаться</button>}
			</div>)
		}
		</div>

	</div>
}

export default SetUsersPage;