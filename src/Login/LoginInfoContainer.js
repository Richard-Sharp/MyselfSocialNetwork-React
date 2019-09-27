import React from 'react';
import {connect} from "react-redux";
import {infoMeThunkCreator, logOutThunkCreator} from "../Redux/AuthReducer";
import LoginInfo from "./LoginInfo";


class AuthContainer extends React.Component {
	// componentWillMount() {
	// 	this.props.infoMe();
	// }

	render() {
		return <LoginInfo {...this.props} />
	}
}

let mapStateToProps = (state) => ({
	userInfo: state.auth.userInfo,
	isAuth: state.auth.isAuth
})

let mapDispatchToProps = (dispatch) => ({
	infoMe: () => {
		dispatch(infoMeThunkCreator());
	},
	logOut: () => {
		dispatch(logOutThunkCreator());
	}
})

let LoginInfoContainer = connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
export default LoginInfoContainer