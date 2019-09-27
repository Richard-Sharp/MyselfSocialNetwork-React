import React from 'react'
import { Field, reduxForm } from 'redux-form'


let ReduxFormOld = (props) => {
	const { handleSubmit } = props
	return (
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="firstName">First Name</label>
					<Field name="firstName" type="text" component={renderField} validate={[required]} warn={minLength5}/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name</label>
					<Field name="lastName" type="text" component={renderField} validate={[required]}/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<Field name="email" type="email" component={renderField} validate={[required]} />
				</div>
				<button type="submit">Submit</button>
			</form>
	)
}


const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const minLength = min => value =>
		value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength5 = minLength(5)

const renderField = ({input, label, type,
											 meta: { touched, error, warning, active }}) => (
		<div>
			<label>{label}</label>
			<div>
				<input {...input} placeholder={label} type={type} />
				{touched && ((error && <span style={{color:'red'}}>{error}</span>) || (warning && <span style={{color:'yellow'}}>{warning}</span>))}
				{/*{active && (warning && <span style={{color:'yellow'}}>{warning}</span>)}*/}
			</div>
		</div>
)




ReduxFormOld = reduxForm({

	form: 'redux-form'
})(ReduxFormOld)

export default ReduxFormOld;