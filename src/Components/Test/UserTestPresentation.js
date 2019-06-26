import React from 'react';
import style from './UserTest.module.css'


const UserTest = (props) => {

	return <div className={style.wrapper}>
		<div className={style.users}>
			<h2>Users</h2>
			{props.noAdmins.map(u => <div className={style.item}
						onMouseUp={() => {props.changeUserStatus(u.id)}}
			>{u.name}</div>)}</div>

		<div className={style.admins}>
			<h2>Admins</h2>
			{props.admins.map(u => <div className={style.item}
						onMouseUp={() => {props.changeUserStatus(u.id)}}
		>{u.name}</div>)}</div>
	</div>
}

export default UserTest;