import initialState from "../store/initialState";
import * as actions from "./action";
import { ActionSchedule } from "material-ui/svg-icons";

export const travelReducer = (state = initialState.travels, action) => {
  switch (action.type) {
    case actions.GET_LOCATIONS:
      return { ...state, num: 1 };
    default:
      return state;
  }
};
