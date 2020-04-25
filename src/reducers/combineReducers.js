import { combineReducers } from "redux";

import fileReducer from "./fileReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

const combineReducer= combineReducers({
    fileReduxStore: fileReducer,
    errorReduxStore: errorReducer,
    userReduxStore: userReducer
});

export default combineReducer;