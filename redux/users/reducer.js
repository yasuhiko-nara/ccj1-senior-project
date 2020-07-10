import initialState from "../store/initialState";
import * as actions from "./action";
import { HYDRATE } from "next-redux-wrapper";
export const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actions.USER_LOGIN:
      console.log("hh");
      console.log({ ...action.payload });
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
