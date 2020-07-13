import initialState from "../store/initialState";
import * as actions from "./action";
import { HYDRATE } from "next-redux-wrapper";
export const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actions.USER_LOGOUT:
      console.log("logout");
      return { loginFlag: false, userId: "", userName: "", email: "" };
    case actions.CHANGE_EMAIL:
      return { ...state, email: action.email };
    case actions.USER_LOGIN:
      console.log("login");
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
