import initialState from "../store/initialState";
import * as actions from "./action";
import { ActionSchedule } from "material-ui/svg-icons";

export const travelReducer = (state = initialState.travels, action) => {
  switch (action.type) {
    case actions.SELECT_ACTIVITIES:
      return {
        ...state,
        selectedActivities: {
          ...state.selectedActivities,
          [action.activity.name]: action.activity.checked,
        },
      };
    default:
      return state;
  }
};
