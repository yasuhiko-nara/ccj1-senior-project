import { userReducer } from "./users/reducer";
import { travelReducer } from "./travels/reducer";
import { mapReducer } from "./map/reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  map: mapReducer,
  users: userReducer,
  travels: travelReducer,
});

export default reducer;
