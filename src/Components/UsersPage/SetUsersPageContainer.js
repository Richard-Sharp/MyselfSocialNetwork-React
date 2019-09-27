import React from 'react';
import {connect} from "react-redux";
import SetUsersPage from "./SetUsersPage";
import {
	getUsersThunkCreator,
	subscribeThunkCreator,
	unSubscribeThunkCreator
} from "../../Redux/SetUsersReducer";
import Preloader from "../Common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {
	geFollowingInProgress,
	getCurrentPage,
	getIsFetching,
	getPageSize,
	getTotalItemsCount,
	getUsers
} from "../../Redux/Selectors/Users-Selectors";


class SetUsersListAPI extends React.Component {
	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
	}

	unSubcribeUser = (user) => {
		this.props.unSubscribe(user.id);
	};

	subScribeUser = (e) => {
		let clickedButton = e.target;
		let userId = +clickedButton.dataset.userId;
		this.props.subscribe(userId);
	};

	onPageChanged = (pageNumber) => {
		this.props.getUsersThunk(pageNumber, this.props.pageSize);
	}

	authRedirect = () => {
		return <Redirect to={"/login"} />
	}

	render() {
		return <>
			{this.props.isFetching && <Preloader />}
		<SetUsersPage
				totalItemsCount={this.props.totalItemsCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				onPageChanged={this.onPageChanged}
				unSubcribeUser={this.unSubcribeUser}
				subScribeUser={this.subScribeUser}
				followingInProgress={this.props.followingInProgress}
				isAuth={this.props.isAuth}
				authRedirect={this.authRedirect}
		/>
		</>
	}
}

// let mapStateToProps = (state) => ({
// 	users: state.setUsersPage.items,
// 	pageSize: state.setUsersPage.pageSize,
// 	totalItemsCount: state.setUsersPage.totalItemsCount,
// 	currentPage: state.setUsersPage.currentPage,
// 	isFetching: state.setUsersPage.isFetching,
// 	followingInProgress: state.setUsersPage.followingInProgress,
// 	isAuth: state.auth.isAuth
// })

let mapStateToProps = (state) => ({
	users: getUsers(state),
	pageSize: getPageSize(state),
	totalItemsCount: getTotalItemsCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: geFollowingInProgress(state),
	isAuth: state.auth.isAuth
})




let mapDispstchToProps = (dispatch) => ({
	subscribe: (userId) => {
		dispatch(subscribeThunkCreator(userId))
	},
	unSubscribe: (userId) => {
		dispatch(unSubscribeThunkCreator(userId))
	},
	getUsersThunk: (currentPage, pageSize) => {
		dispatch(getUsersThunkCreator(currentPage, pageSize))
	}
})

let SetUsersPageContainer = connect(mapStateToProps, mapDispstchToProps)(SetUsersListAPI);
export default SetUsersPageContainer;