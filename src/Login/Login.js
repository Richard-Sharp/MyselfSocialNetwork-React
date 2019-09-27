import React from 'react';
import {loginStatuses} from "../Redux/LoginReducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"

export const Login = (props) => {
	if (props.isAuth) {
		return <Redirect to='/profilePage'/>
	}

	let loginRef = React.createRef();
	let passwordRef = React.createRef();
	let rememberRef = React.createRef();

	const onLoginClock = () => {
	props.login && props.login(loginRef.current.value, passwordRef.current.value, rememberRef.current.checked);
}

	let errorMessageBlock = props.status === loginStatuses.ERROR &&
			<div className='error'>{props.message}</div>;

	return <div className={style.wrapper}>
		<span>Для того, чтобы просматривать страницу, необходимо авторизироваться!</span> <br/>
		<h2>Авторизация</h2>
		<div className={style.divInput}><input ref={loginRef} type="text" defaultValue='novitskii.a@gmail.com'/></div>
		<div className={style.divInput}><input ref={passwordRef} type="password" defaultValue='3407877n'/></div>
		<div className={style.divInput}><input ref={rememberRef} type="checkbox" defaultChecked={true}/> Запомнить меня</div>
		<div className={style.divInput}><button disabled={props.status === loginStatuses.INPROGRESS} onClick={onLoginClock}>LogIn</button></div>
		{errorMessageBlock}
	</div>
}

export default Login;