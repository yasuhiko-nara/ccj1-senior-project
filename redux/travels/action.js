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
export const get_initial_status = (initialState) => {
  return {
    type: "GET_INITIAL_STATUS",
    initialState,
  };
};

export const SELECT_PLAN = "SELECT_PLAN";
export const select_plan = (target, activity) => {
  return {
    type: "SELECT_PLAN",
    target,
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
