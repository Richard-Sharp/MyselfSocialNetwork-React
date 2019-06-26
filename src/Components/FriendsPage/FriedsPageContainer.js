import React from 'react';
import FriendsPage from "./FriendsPage";
import {connect} from "react-redux";
import {setFriendsThunkCreator,
	unSubdcribeFriendThunkCreator} from "../../Redux/FriendsPageReducer";

let mapStateToProps = (state) => {
	return {
		users: state.friendsPage.users,
		status: state.friendsPage.status,
		name: state.friendsPage.name
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setFriends: () => {
			dispatch(setFriendsThunkCreator())
		},
		unSubscribeFriend: (userId) => {
			dispatch(unSubdcribeFriendThunkCreator(userId))
		}
	}
}

const FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage);

export default FriendsPageContainer;