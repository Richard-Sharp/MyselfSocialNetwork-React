import React from 'react';
import UserTest from "./UserTestPresentation";
import {connect} from "react-redux";
import {changeUserStatus, getAdmins, getNotAdmins, getUsers} from "../../Redux/TestReducer";

let mapStateToProps = (state) => {
 	return {
		users: getUsers(state),
		admins: getAdmins(state),
		noAdmins: getNotAdmins(state)
	}
}

let UserTestContainer = connect(mapStateToProps, {changeUserStatus})(UserTest);
export default UserTestContainer;