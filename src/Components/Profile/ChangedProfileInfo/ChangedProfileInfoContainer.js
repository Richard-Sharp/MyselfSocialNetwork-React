import React from 'react';
import {connect} from "react-redux";
import ChangedProfileInfo from "./ChangedProfileInfo";

let mapStateToProps = (state) => ({
	name: state.profilePage.profile.name,
	surname: state.profilePage.profile.surname,
	date_brth: state.profilePage.profile.date_brth,
	male: state.profilePage.profile.male,
	education: state.profilePage.profile.education

})

let ChangedProfileInfoContainer = connect(mapStateToProps)(ChangedProfileInfo);
export default ChangedProfileInfoContainer;