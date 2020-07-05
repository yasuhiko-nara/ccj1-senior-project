export const GET_LOCATIONS = "GET_LACATIONS";
export const get_locations = (data) => {
  return {
    type: "GET_LACATIONS",
    data: data,
  };
};

export const SELECT_ACTIVITIES = "SELECT_ACTIVITIES";
export const select_activities = (activity) => {
  console.log("unko", activity);
  return {
    type: "SELECT_ACTIVITIES",
    activity,
  };
};
