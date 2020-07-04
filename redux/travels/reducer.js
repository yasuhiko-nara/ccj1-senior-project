import initialState from "../store/initialState";
import * as actions from "./action";
import { ActionSchedule } from "material-ui/svg-icons";

export const travelReducer = (state = initialState.travels, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
