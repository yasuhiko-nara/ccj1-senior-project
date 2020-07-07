const initialState = {
  users: {},
  map: {
    restaurants: [],
    attractions: [],
    hotels: [],
    markers: [],
  },
  travels: {
    // selectedPlace: "hokkaido", // 表示すべき地域や都道府県
    toggleDisplay: true,
    selectedActivities: { restaurants: true, attractions: true, hotels: true }, // restaurants,attractions,hotelsのなかで表示するべきもの
    restaurants: [],
    attractions: [],
    hotels: [],
  },
};

export default initialState;
