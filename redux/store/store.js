import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../combine.js";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// export const createStore = (initialState) => {
//   return reduxCreateStore(
//     reducer,
//     initialState,
//     applyMiddleware(thunkMiddleware)
//   );
// };

const makeStore = (context) => createStore(reducer);
export const wrapper = createWrapper(makeStore, { debug: true });
