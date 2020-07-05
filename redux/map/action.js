// export const GET_LOCATIONS = 'GET_LACATIONS'
// export const get_locations = (data)=>{
//   return {
//     type:'GET_LACATIONS',
//     data:data
//   }
// }
export const GET_LOCATIONS = "GET_LACATIONS";
export const get_locations = () => {
  return {
    type: "GET_LACATIONS",
    // travels, // state.travelsのこと
    // selectedPlace, // state.selectedPlaceのこと
  };
};

export const SET_MARKERS = "SET_MARKERS";
export const set_markers = (travels, selectedPalce, mselectedActivities) => {
  return {
    type: "SET_MARKERS",
    selectedPlace,
    selectedActivities, // state.selectedActivitiesのこと
  };
};

//-----------------------------
