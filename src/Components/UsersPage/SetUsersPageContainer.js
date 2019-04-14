import React from 'react';
import {connect} from "react-redux";
import SetUsersPage from "./SetUsersPage";
import {setUsersACreator, subscribeACreator, unSubscribeACreator} from "../../Redux/SetUsersReducer";
import {setFriendsAC} from "../../Redux/FriendsPageReducer";


let mapStateToProps = (state) => ({
	users: state.setUsersPage.items
})

let mapDispstchToProps = (dispatch) => ({
	setUsers: (users) => {
		dispatch(setUsersACreator(users))
	},
	subscribeU: (userId) => {
		dispatch(subscribeACreator(userId))
	},
	unSubscribe: (userId) => {
		dispatch(unSubscribeACreator(userId))
	},
	setFriends: (users) => {
		dispatch(setFriendsAC(users))
	}
})

let SetUsersPageContainer = connect(mapStateToProps, mapDispstchToProps)(SetUsersPage);
export default SetUsersPageContainer;