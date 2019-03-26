import React from 'react';
import style from './../Message.module.css';
import {NavLink} from "react-router-dom";

const  Dialog = (props) => {
	return (
			<div className={style.dialog}>
				<div>
					<img className={style.userAvatar} src={props.userAvatar} alt=""/>
				</div>
				<div>
					<NavLink to={'/messagePage/' + props.id}>{props.name}</NavLink>
				</div>
			</div>
	)
}

export default Dialog;
