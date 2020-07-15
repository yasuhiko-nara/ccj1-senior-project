const initialState = {
  users: {
    loginFlag: false,
    userId: "",
    userName: "",
    email: "",
    idToken: "",
  },

  map: {},
  travels: {
    show: true,
    currentDirection: null,
    routeInfo: [],
    favoritePlaces: [],

    // routeInfo: [
    // {
    //   distance: { text: "257 km", value: 257155 },
    //   duration: { text: "4 hours 46 mins", value: 17160 },
    // },
    // ],
    // routeOrder: [], //=> 出発点と終点以外の場所の順番

    selectedActivities: { restaurants: true, attractions: true, hotels: true }, // restaurants,attractions,hotelsのなかで表示するべきもの
    schedules: [
      // {
      //   day: 1,
      //   activityClass: "restaurants",
      //   like: false,
      //   prefecture: "hokkaido",
      //   location: { lat: 43.048583, lng: 141.318944 },
      //   name: "testRestaurants1",
      //   image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
      //   category: "",
      //   reviews: [
      //     {
      //       titile: "test1",
      //       text: "testtesttesttesttest",
      //       rating: "4",
      //       published_data: "2020-02-22T20:52:08-05:00",
      //     },
      //     {
      //       titile: "test1",
      //       text: "testtesttesttesttest",
      //       rating: "4",
      //       published_data: "2020-02-22T20:52:08-05:00",
      //     },
      //     {
      //       titile: "test1",
      //       text: "testtesttesttesttest",
      //       rating: "4",
      //       published_data: "2020-02-22T20:52:08-05:00",
      //     },
      //   ],
      //   rating: 1.7,
      // },
    ],

    restaurants: [
      // {
      //   activityClass: "restaurants",
      //   day: "",
      //   like: false,
      //   prefecture: "hokkaido",
      //   location: { lat: 43.048583, lng: 141.318944 },
      //   name: "testRestaurants1",
      //   image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
      //   category: "",
      //   reviews: [
      //     {
      //       titile: "test1",
      //       text: "testtesttesttesttest",
      //       rating: "4",
      //       published_data: "2020-02-22T20:52:08-05:00",
      //     },
      //     {
      //       titile: "test1",
      //       text: "testtesttesttesttest",
      //       rating: "4",
      //       published_data: "2020-02-22T20:52:08-05:00",
      //     },
      //     {
      //       titile: "test1",
      //       text: "testtesttesttesttest",
      //       rating: "4",
      //       published_data: "2020-02-22T20:52:08-05:00",
      //     },
      //   ],
      //   rating: 1.7,
      // },
    ],
    attractions: [
      // レストランと同じ
    ],
    hotels: [
      // レストランと同じ
    ],
  },
};

export default initialState;
