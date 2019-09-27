import React from 'react';
import {NavLink} from "react-router-dom";


const LoginInfo = (props) => {
	const onLogOut = () => {
		props.logOut();
	};

	return <div>
		{props.isAuth && <div>Вы вошли, как: {props.userInfo.userName}.
			(ID: {props.userInfo.userId}) - <button onClick={onLogOut}>Выйти</button></div>}
		{!props.isAuth && <div>
			<button><NavLink to='/login'>Sign In</NavLink></button>
		</div>}

	</div>
}

export default LoginInfo;