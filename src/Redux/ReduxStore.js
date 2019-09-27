import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagePageReducer from "./MessagePageReducer";
import friendsPageReducer from "./FriendsPageReducer";
import setUsersReducer from "./SetUsersReducer";
import ProfileInfoReduser from "./ProfileInfoReducer";
import thunkMiddleware from "redux-thunk";
import {LoginReducer} from "./LoginReducer";
import {AuthReducer} from "./AuthReducer";
import TestReducer from "./TestReducer";
import {reducer as formReducer} from "redux-form";
import LoginRDXFReducer from "./loginRDXReducer";
import DialogPageReducer from "./DialogsPageReducer";
import {logger} from "redux-logger";
import SimpleDrawingToolReducer from "../Components/TASKS/SimpleDrawingTool/SimpleDrawingToolReducer";
import {AppReducer} from "./AppReducer";

let store = createStore(combineReducers({
	profilePage: profileReducer,
	messagePage: messagePageReducer,
	friendsPage: friendsPageReducer,
	setUsersPage: setUsersReducer,
	logIn: LoginReducer,
	auth: AuthReducer,
	testUser: TestReducer,
	form: formReducer,
	RDXForm: LoginRDXFReducer,
	dialogsPage: DialogPageReducer,
	drawTools: SimpleDrawingToolReducer,
	AppPage: AppReducer
}), applyMiddleware(logger, thunkMiddleware))

window.store = store;


export default store;