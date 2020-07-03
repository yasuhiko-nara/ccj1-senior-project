import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../combine.js";

export const createStore = (initialState) => {
  return reduxCreateStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
};
