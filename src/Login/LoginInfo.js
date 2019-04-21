import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {infoMeTH, logOutTH} from "../Redux/AuthReducer";

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

class LoginInfoContainer extends React.Component {
	componentWillMount() {
		this.props.infoMeTH();
	}

	render() {
		return <LoginInfo {...this.props} />
	}
}

let mapStateToProps = (state) => ({
	userInfo: state.auth.userInfo,
	isAuth: state.auth.isAuth
})

let mapDispatchToProps = (dispatch) => ({
	infoMeTH: () => {
		dispatch(infoMeTH());
	},
	logOut: () => {
		dispatch(logOutTH());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginInfoContainer);