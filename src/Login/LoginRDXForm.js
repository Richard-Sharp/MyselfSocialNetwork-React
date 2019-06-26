import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const LoginRDXForm = () => {
	return <div>
		<h1>Форма регистрации</h1>
		<div>
			<LoginReduxForm onSubmit={bllSubmit}/>
		</div>
	</div>
}

let bllSubmit = (values) => {
	console.log(values);
}
const LoginForm = (props) => {

	return (
			<form onSubmit={props.handleSubmit}>
				<Field component={Input} name='login' type='name' placeholder='Ваш логин'
				validate={requiredValidation}/>
				<Field component={Input} name='password' type='password' placeholder='Ваш пароль'/>
				<button type="submit">Отпавить</button>
			</form>
	)
}

const Input = ({input, meta, ...props}) => {
	return <div>
		<input {...props} {...input}/>
		{meta.touched && meta.invalid && <span style={{color: 'red' }}>{meta.error}</span>}
		{meta.touched && meta.warning && <span style={{color: 'red' }}>{meta.error}</span>}
	</div>
}

let requiredValidation = (value) => {
	if(!value) return "Обязательное поле";
	return undefined;
}

let LoginReduxForm = reduxForm({form: 'login-form'})(LoginForm);

export default LoginRDXForm;
