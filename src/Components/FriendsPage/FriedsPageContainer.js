import React from 'react';
import FriendsPage from "./FriendsPage";
import {connect} from "react-redux";
import {setFriendsThunkCreator,
	unSubdcribeFriendThunkCreator} from "../../Redux/FriendsPageReducer";
import MessagePage from "../MessagePage/MessagePage";
import {AuthRedirectHOC} from "../../HOC/AuthRedirectHOC";
import {compose} from "redux";



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

// let withAuthRedirect = AuthRedirectHOC(FriendsPage);
// // const FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect);
// // export default FriendsPageContainer;

export default compose(
		connect(mapStateToProps, mapDispatchToProps),
		AuthRedirectHOC
)(FriendsPage);

