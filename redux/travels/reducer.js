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
          ...action.initialState.restaurants.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = 1;
            modifiedElem.like = false;
            modifiedElem.activityClass = "restaurants";
            return modifiedElem;
          }),
        ],
        attractions: [
          ...action.initialState.attractions.map((elem) => {
            const modifiedElem = elem;
            modifiedElem.day = 1;
            modifiedElem.like = false;
            modifiedElem.activityClass = "attractions";
            return modifiedElem;
          }),
        ],
        hotels: [
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

    case actions.LIKE_ACTIVITY:
      const targetActivity = action.activity;
      const targetClass = action.activity.activityClass;
      const revisedActivities = state[targetClass].map((activity) => {
        if (activity.name === targetActivity.name) {
          const revisedActivity = { ...activity };
          revisedActivity.like = !activity.like;
          return revisedActivity;
        }
        return activity;
      });

      return {
        ...state,
        [targetClass]: revisedActivities,
      };

    case actions.GET_FAVORITE_PLACES:
      return {
        ...state,
        favoritePlaces: action.activities,
      };

    case actions.GET_MY_ROUTES:
      return {
        ...state,
        myRoutesAndSchedules: action.myRoutesAndSchedules,
      };
    case actions.SAVE_ROUTE_NAME:
      return {
        ...state,
        routeName: action.routeName,
      };
    case actions.DELETE_SCHEDULES_AND_ROUTE:
      return {
        ...state,
        currentDirection: null,
        routeInfo: [],
        schedules: [],
        routeName: null,
      };

    default:
      return state;
  }
};
