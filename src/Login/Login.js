import React from 'react';
import {connect} from "react-redux";
import {loginStatuses, loginTH} from "../Redux/LoginReducer";
import {Redirect} from "react-router-dom";


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

	return <div>
		<div><input ref={loginRef} type="text" defaultValue='novitskii.a@gmail.com'/></div>
		<div><input ref={passwordRef} type="password" defaultValue='3407877n'/></div>
		<div><input ref={rememberRef} type="checkbox" defaultChecked={true}/></div>
		<div><button disabled={props.status === loginStatuses.INPROGRESS} onClick={onLoginClock}>LogIn</button></div>
		{errorMessageBlock}
	</div>
}

let maStateToProps = (state) => ({
		isAuth: state.auth.isAuth,
		status: state.logIn.status,
		message: state.logIn.message,
		captchaUrl: state.logIn.captchaUrl
});

let mapDispatchToProps = (dispatch) => ({
		login: (login, password, rememberMe) => {
			dispatch(loginTH(login, password, rememberMe))
		}

});

export default connect(maStateToProps, mapDispatchToProps)(Login);