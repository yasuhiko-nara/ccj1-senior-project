const initialState = {
  users: {},
  map: {},
  travels: {
    show: true,
    schedules: [],
    toggleDisplay: true,
    selectedActivities: { restaurants: true, attractions: true, hotels: true }, // restaurants,attractions,hotelsのなかで表示するべきもの
    restaurants: [],
    attractions: [],
    hotels: [],
  },
};

export default initialState;
