import initialState from "../store/initialState";

export const GET_LOCATIONS = "GET_LACATIONS";

export const get_locations = (data) => {
  return {
    type: "GET_LACATIONS",
    data: data,
  };
};

export const SELECT_ACTIVITIES = "SELECT_ACTIVITIES";
export const select_activities = (activity) => {
  return {
    type: "SELECT_ACTIVITIES",
    activity,
  };
};

export const GET_INITIAL_STATUS = "GET_INITIAL_STATUS";
export const get_initial_status = (initialState, favoritePlaces) => {
  return {
    type: "GET_INITIAL_STATUS",
    initialState,
    favoritePlaces,
  };
};

export const SELECT_PLAN = "SELECT_PLAN";
export const select_plan = (activity) => {
  return {
    type: "SELECT_PLAN",
    activity,
  };
};

export const TOGGLE_DISPLAY = "TOGGLE_DISPLAY";
export const toggle_display = () => {
  return {
    type: "TOGGLE_DISPLAY",
  };
};

export const CHANGE_DIRECTION = "CHANGE_DIRECTION";
export const change_direction = (directionResponse, routeInfo, routeOrder) => {
  return {
    type: "CHANGE_DIRECTION",
    directionResponse,
    routeInfo,
    routeOrder,
  };
};

export const LIKE_ACTIVITY = "LIKE_ACTIVITY";
export const like_activity = (activity) => {
  return {
    type: "LIKE_ACTIVITY",
    activity,
  };
};

export const GET_FAVORITE_PLACES = "GET_FAVORITE_PLACES";
export const get_favorite_places = (activities) => {
  return {
    type: "GET_FAVORITE_PLACES",
    activities,
  };
};

export const GET_MY_ROUTES = "GET_MY_ROUTES";
export const get_my_routes = (myRoutesAndSchedules) => {
  return {
    type: "GET_MY_ROUTES",
    myRoutesAndSchedules,
  };
};

export const SAVE_ROUTE_NAME = "SAVE_ROUTE_NAME";
export const save_route_name = (routeName) => {
  return {
    type: "SAVE_ROUTE_NAME",
    routeName,
  };
};

export const DELETE_SCHEDULES_AND_ROUTE = "DELETE_SCHEDULES_AND_ROUTE";
export const delete_schedules_and_route = () => {
  return {
    type: "DELETE_SCHEDULES_AND_ROUTE",
  };
};
