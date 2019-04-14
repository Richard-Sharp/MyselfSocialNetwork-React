import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagePageReducer from "./MessagePageReducer";
import friendsPageReducer from "./FriendsPageReducer";
import setUsersReducer from "./SetUsersReducer";
import ProfileInfoReduser from "./ProfileInfoReducer";

let reducers = combineReducers({
		profilePage: profileReducer,
		messagePage: messagePageReducer,
		friendsPage: friendsPageReducer,
		setUsersPage: setUsersReducer,
});

let store = createStore(reducers);

export default store;