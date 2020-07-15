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
            modifiedElem.like = false;
            modifiedElem.activityClass = "restaurants";
            return modifiedElem;
          }),
        ],
        attractions: [
          ...state.attractions,
          ...action.initialState.attractions.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = 1;
            modifiedElem.like = false;
            modifiedElem.activityClass = "attractions";
            return modifiedElem;
          }),
        ],
        hotels: [
          ...state.hotels,
          ...action.initialState.hotels.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = 1;
            modifiedElem.like = false;
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
      const routeInfo = action.routeInfo;
      const routeOrder = action.routeOrder;
      const schedules = state.schedules;
      const origin = schedules[0];
      const destination = schedules[schedules.length - 1];
      const waypoints = schedules.slice(1, schedules.length - 1);
      const reOrderedWaypoints = routeOrder.map((order) => waypoints[order]);
      const reOrderedSchedules = [origin, ...reOrderedWaypoints, destination];

      return {
        ...state,
        currentDirection: direction,
        routeInfo,
        schedules: reOrderedSchedules,
      };

    case actions.DELETE_SCHEDULES_AND_ROUTE:
      return {
        ...state,
        currentDirection: null,
        routeInfo: [],
        schedules: [],
      };

    default:
      return state;
  }
};
