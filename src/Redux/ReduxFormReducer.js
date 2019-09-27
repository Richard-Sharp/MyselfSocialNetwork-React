
import SNAxios from "../Services(DAL)/SNAxios";
import {loginStatuses} from "./LoginReducer";

const SET_LOGINRDX_STATUS = 'SN|LOGIN|SET-LOGINRDX-STATUS';
const SET_LOGINRDX_MESSAGE = 'SN|LOGIN|SET-LOGINRDX-MESSAGE';

let initialState = {
	status: loginStatuses.INIT,
	massage: ''
};

const loginRDXFReducer = (state = initialState, action) => {
	return state;
}

export default loginRDXFReducer;