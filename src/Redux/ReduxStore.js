import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagePageReducer from "./MessagePageReducer";
// import FriendsReducer from "./FriendsReducer";
import usersPageReducer from "./UsersPageReducer";

let reducers = combineReducers({
		profilePage: profileReducer,
		messagePage: messagePageReducer,
		usersPage: usersPageReducer
});

let store = createStore(reducers);

export default store;