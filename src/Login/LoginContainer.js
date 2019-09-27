import React from 'react';
import {connect} from "react-redux";
import {loginStatuses, loginThunkCreator} from "../Redux/LoginReducer";
import Login from "./Login";


let mapStateToProps = (state) => ({
		isAuth: state.auth.isAuth,
		status: state.logIn.status,
		message: state.logIn.message,
		captchaUrl: state.logIn.captchaUrl
});

let mapDispatchToProps = (dispatch) => ({
		login: (login, password, rememberMe) => {
			dispatch(loginThunkCreator(login, password, rememberMe))
		}

});

let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;