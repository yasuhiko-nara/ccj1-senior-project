import initialState from "../store/initialState";
import * as actions from "./action";
export const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
