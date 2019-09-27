import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {updateUserStatusThunkCreator} from "../../../Redux/ProfileReducer";
import {infoMeThunkCreator} from "../../../Redux/AuthReducer";

class  ProfileStatusConatainer extends React.Component {
	componentDidMount() {
		this.props.infoMeThunkCreator();
	}

	render() {
		return <ProfileInfo {...this.props}/>
	}
}

// status={this.props.status} updateUserStatus={this.props.updateUserStatusThunkCreator}

let mapStateToProps = (state) => ({
	name: state.profilePage.profile.name,
	surname: state.profilePage.profile.surname,
	date_brth: state.profilePage.profile.date_brth,
	male: state.profilePage.profile.male,
	education: state.profilePage.profile.education,

	status: state.profilePage.status

})

let ProfileInfoContainer = connect(mapStateToProps, {infoMeThunkCreator, updateUserStatusThunkCreator})(ProfileStatusConatainer);
export default ProfileInfoContainer;

