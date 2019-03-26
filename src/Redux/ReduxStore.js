import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagePageReducer from "./MessagePageReducer";

let reducers = combineReducers({
		profilePage: profileReducer,
		messagePage: messagePageReducer
});

let store = createStore(reducers);

export default store;