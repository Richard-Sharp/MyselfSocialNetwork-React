import React from 'react';
import FriendsPage from "./FriendsPage";
import {connect} from "react-redux";
import {setFriendsAC, setStatusAC, unSubscribeAC} from "../../Redux/FriendsPageReducer";
import {setUsersACreator} from "../../Redux/SetUsersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.friendsPage.users,
		status: state.friendsPage.status,
		name: state.friendsPage.name
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setFriends: (users) => {
		dispatch(setFriendsAC(users))
		},
		setStatus: (status) => {
			dispatch(setStatusAC(status))
		},
		unSubscribe: (userId) => {
			dispatch(unSubscribeAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersACreator(users))
		}
	}
}

let FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage);

export default FriendsPageContainer;