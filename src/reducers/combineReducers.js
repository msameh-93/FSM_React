import { combineReducers } from "redux";

import fileReducer from "./fileReducer";
import errorReducer from "./errorReducer";

const combineReducer= combineReducers({
    fileReduxStore: fileReducer,
    errorReduxStore: errorReducer
});

export default combineReducer;