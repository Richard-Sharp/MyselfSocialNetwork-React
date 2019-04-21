import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagePageReducer from "./MessagePageReducer";
import friendsPageReducer from "./FriendsPageReducer";
import setUsersReducer from "./SetUsersReducer";
import ProfileInfoReduser from "./ProfileInfoReducer";
import thunk from "redux-thunk";
import {LoginReducer} from "./LoginReducer";
import {AuthReducer} from "./AuthReducer";

let store = createStore(combineReducers({
		profilePage: profileReducer,
		messagePage: messagePageReducer,
		friendsPage: friendsPageReducer,
		setUsersPage: setUsersReducer,
		logIn: LoginReducer,
		auth: AuthReducer
}), applyMiddleware(thunk))



export default store;