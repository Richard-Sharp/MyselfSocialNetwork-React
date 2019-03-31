import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setStatus, setUsers} from "../../Redux/UsersPageReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		status: state.usersPage.status,
		name: state.usersPage.name
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
		dispatch(setUsers(users))
		},
		setStatus: (status) => {
			dispatch(setStatus(status))
		}
	}
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;