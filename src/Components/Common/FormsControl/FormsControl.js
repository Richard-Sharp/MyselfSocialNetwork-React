import React from "react";
import style from './FormsControl.module.css';

const FormControl = (props) => {
	const hasError = props.meta.touched && props.meta.error;

	return (
			<div className={style.formControl + " " + (hasError ? style.error : "")}>
				{props.children}
				{hasError && <span>{props.meta.error}</span>}
			</div>
	)
}

export const Input = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}>
		<input {...input} {...restProps} />
	</FormControl>
}

export const TextArea = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}>
		<textarea {...input} {...restProps} />
	</FormControl>
}