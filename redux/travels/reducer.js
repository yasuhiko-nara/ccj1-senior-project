import initialState from "../store/initialState";
import * as actions from "./action";
import { HYDRATE } from "next-redux-wrapper";

// import { ActionSchedule } from "material-ui/svg-icons";
// import restaurant from "material-ui/svg-icons/maps/restaurant";

export const travelReducer = (state = initialState.travels, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
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
            modifiedElem.day = 1;
            modifiedElem.checked = false;
            modifiedElem.activityClass = "restaurants";
            return modifiedElem;
          }),
        ],
        attractions: [
          ...state.attractions,
          ...action.initialState.attractions.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = 1;
            modifiedElem.checked = false;
            modifiedElem.activityClass = "attractions";
            return modifiedElem;
          }),
        ],
        hotels: [
          ...state.hotels,
          ...action.initialState.hotels.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = 1;
            modifiedElem.checked = false;
            modifiedElem.activityClass = "hotels";
            return modifiedElem;
          }),
        ],
      };
    case actions.SELECT_PLAN:
      const activityClass = action.activity.activityClass;
      const activityName = action.activity.name;
      const selectedActivity = state[activityClass].filter(
        (activity) => activity.name === activityName
      )[0];
      return {
        ...state,
        schedules: [...state.schedules, selectedActivity],
      };
    case actions.CHANGE_DIRECTION:
      const direction = action.directionResponse;
      return { ...state, currentDirection: direction };
    case actions.CHANGE_SCHEDULES_ORDER:
      const routeInfo = action.routeInfo;
      const routeOrder = action.routeOrder;
      return { ...state, routeInfo, routeOrder };
    default:
      return state;
  }
};
