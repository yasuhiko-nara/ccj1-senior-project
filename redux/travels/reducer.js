import initialState from "../store/initialState";
import * as actions from "./action";
import { ActionSchedule } from "material-ui/svg-icons";
import restaurant from "material-ui/svg-icons/maps/restaurant";

export const travelReducer = (state = initialState.travels, action) => {
  switch (action.type) {
    case actions.TOGGLE_DISPLAY:
      return { ...state, toggleDisplay: !state.toggleDisplay };
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
      // console.log(action.target.checked, action.selectedPlace);
      const activityClass = action.selectedPlace.activityClass;
      const activityName = action.selectedPlace.name;
      // console.log(activityClass, activityName, state[activityClass]);
      // const modifiedActivities = state[activityClass].map((activity, index) => {
      //   console.log(index, activity.name === activityName, !activity.checked);
      //   return activity.name === activityName
      //     ? { ...activity, checked: !activity.checked }
      //     : activity;
      // });
      const selectedActivity = state[activityClass].filter(
        (activity) => activity.name === activityName
      )[0];
      console.log({
        ...state,
        schedules: [...state.schedules, selectedActivity],
        // [activityClass]: modifiedActivities,
      });

      return {
        ...state,
        schedules: [...state.schedules, selectedActivity],
        // [activityClass]: modifiedActivities,
      };
    default:
      return state;
  }
};
