import React from 'react';
import {addRecordActionCreator, updateNewRecordTextActionCreator} from "../../../Redux/ProfileReducer";
import RecordsWall from "./RecordsWall";
import {connect} from "react-redux";


// let RecordsWallContainer = (props) => {
//
// 	let state = props.store.getState().profilePage;
// 	let addRecord = () => {
// 		props.store.dispatch(addRecordActionCreator());
//
// 	}
//
// 	let onRecordChange = (text) => {
// 		let action = updateNewRecordTextActionCreator(text);
// 		props.store.dispatch(action);
// 	}
// 	return (
// 			<RecordsWall updateNewRecordText={onRecordChange}
// 									 addRecord={addRecord}
// 									 records={state.profilePage.recordsState}
// 									 newRecordText={state.profiePage.newRecordText}/>
// 	);
// }

const mapStateToProps = (state) => {
	return {
		newRecordText: state.profilePage.newRecordText,
		records: state.profilePage.recordsState,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewRecordText: (text) => {
			dispatch(updateNewRecordTextActionCreator(text))
		},
		addRecord: (message) => {
			dispatch(addRecordActionCreator(message))
		}
	}
}

let RecordsWallContainer = connect(mapStateToProps, mapDispatchToProps)(RecordsWall)

export default RecordsWallContainer;

