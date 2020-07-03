import initialState from "../store/initialState";
export const userReducer = (store = initialState.users, action) => {
  switch (action.type) {
    default:
      return store;
  }
};
