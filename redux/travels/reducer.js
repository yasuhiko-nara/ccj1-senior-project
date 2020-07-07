import initialState from "../store/initialState";
import * as actions from "./action";
import { ActionSchedule } from "material-ui/svg-icons";
import restaurant from "material-ui/svg-icons/maps/restaurant";

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
    case actions.GET_INITIAL_STATUS:
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          ...action.initialState.restaurants.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = "";
            modifiedElem.checked = false;
            modifiedElem.activityClass = "restaurants";
            return modifiedElem;
          }),
        ],
        attractions: [
          ...state.attractions,
          ...action.initialState.attractions.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = "";
            modifiedElem.checked = false;
            modifiedElem.activityClass = "attractions";
            return modifiedElem;
          }),
        ],
        hotels: [
          ...state.hotels,
          ...action.initialState.hotels.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = "";
            modifiedElem.checked = false;
            modifiedElem.activityClass = "hotels";
            return modifiedElem;
          }),
        ],
      };
    case actions.SELECT_PLAN:
      console.log(action.target.checked, action.selectedPlace);
      const activityClass = action.selectedPlace.activityClass;
      const activityName = action.selectedPlace.name;
      console.log(activityClass, activityName, state[activityClass]);
      const modifiedActivities = state[activityClass].map(
        (activity) => activity.name !== activityName
      )[0];
      // const modifiedActivities = activities.map(
      //   (activity) => (activity.chacked = !activity.chacked)
      // );
      console.log(modifiedActivities);

      return {
        ...state,
        // [activityClass]: modifiedActivities,
        // selectedActivities: {
        //   ...state.selectedActivities,
        //   [action.activity.name]: action.activity.checked,
        // },
      };
    default:
      return state;
  }
};
