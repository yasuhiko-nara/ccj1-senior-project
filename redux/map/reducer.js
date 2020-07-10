import initialState from "../store/initialState";
import * as actions from "./action";
import { ActionSchedule } from "material-ui/svg-icons";
import { HYDRATE } from "next-redux-wrapper";
export const mapReducer = (state = initialState.map, action) => {
  //   const travels = action.travels; // state.travels
  //   const selectedPlace = action.selectedPlace; // state.selectedPlace =>hokkaido
  //   const selectedActivities = action.selectedActivities; //state.selectedActivities
  //   console.log(travels, selectedPlace);
  //   console.log(travels[selectedPlace]);
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actions.GET_LOCATIONS:
      console.log("uko!!");
      return {
        ...state,
        // restaurants: travels[selectedPlace].restaurants,
        // attractions: travels[selectedPlace].attractions,
        // hotels: travels[selectedPlace].hotels,
      };
    case actions.SET_MARKERS:
      const markers = [];
      for (const activity of selectedActivities) {
        markers.concat(travels[selectedPlace][activity]);
      }
      return {
        ...state,
        markers: markers,
      };
    default:
      return state;
  }
};
