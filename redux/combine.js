import { userReducer } from "./users/reducer";
import { travelReducer } from "./travels/reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({ users: userReducer, travels: travelReducer });

export default reducer;
