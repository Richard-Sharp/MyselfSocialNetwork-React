import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthValidator, required} from "../Components/Common/Utils/Validators";
import {Input} from "../Components/Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {loginRDXThunkCreator} from "../Redux/loginRDXReducer";
import {Redirect} from "react-router-dom";
import style from '../Components/Common/FormsControl/FormsControl.module.css';

const maxLength30 = maxLengthValidator(30);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={"Email"} type="text" placeholder={"Email"}
							 component={Input}
							 validate={[required, maxLength30]}
				/>
			</div>
			<div>
				<Field name={"Password"} type="password" placeholder={"Password"}
							 component={Input}
							 validate={[required, maxLength30]}
				/>
			</div>
			<div>
				<Field name={"RememberMe"} type="checkbox"
							 component={"input"}

				/> Запомнить данные
			</div>
			{props.error && <div className={style.errorLogin}>
				{props.error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>)
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const LoginRDXForm = (props) => {
	const onSubmit = (formData) => {
		props.loginRDXThunkCreator(formData.Email, formData.Password, formData.RememberMe);
	}
	if(props.isAuth) {
		return <Redirect to={"/profilePage"} />
	}
	return <div>
		<h2>Авторизация (Redux Form)</h2>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

let mapState = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapState, {loginRDXThunkCreator})(LoginRDXForm);
