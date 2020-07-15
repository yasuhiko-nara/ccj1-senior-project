const initialState = {
  users: {
    loginFlag: true,
    userId: "testId",
    userName: "testName",
    email: "testMail",
    idToken:
      "eyJraWQiOiI4RDBwcmNTNjAzUkxTVm5mRE44NnZUd1RWcDNEMVJKOXMzZTlTUm5pRzRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiODcxYWY2NC1jZmUzLTQ4OWEtOTVkZC1hNWUyNTc2ZDk5N2UiLCJhdWQiOiIxdDUyNG9yZm9wa2xvYXZuc2dhZWs1dXR1aSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJmNjJhNTU5LTNmZGQtNGZjOS05ZDI4LTM2MDFlMzdlMDdhZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTk0NzczNjk3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfTHdoSGRnYmVwIiwibmFtZSI6InJ5b3Rha2F5YSIsImNvZ25pdG86dXNlcm5hbWUiOiJiODcxYWY2NC1jZmUzLTQ4OWEtOTVkZC1hNWUyNTc2ZDk5N2UiLCJleHAiOjE1OTQ3NzcyOTcsImlhdCI6MTU5NDc3MzY5NywiZW1haWwiOiJyeW91dGFrYXlhMzYyM0B5YWhvby5jby5qcCJ9.GBAevInjNbTL9p2qfcMh1SUwu0oNnpoGSDqlACO7Qy2JziHktl3uCFJ5uw7lpdhDmywgDdqwnXab65TkklEe4wsGMrlAmjKIRPoDQC7ev2X0EMFdNgC68BRBJ9m5UsdXNQbhPFwBlkM6uHETi4h8FO3aHfstsGM7mMCCqJ9U6opo-jL8gbfLmIGD9q_JFOhjfZlQC7XhFRJLdKfBQO6trI5kvU3-1lmHE4V-5gIQxA0aJwCIud87hhYYCSB90hGir9G8xy-G8IfueBg2Ht_n7YQkzKVj_Y3pGR5RiAH744CMzkvTNuD0iy5NFxxm_v4-RCRZHY87LzYFJaTvh8Vpqw",
  },

  map: {},
  travels: {
    show: true,
    currentDirection: null,
    routeInfo: [],

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
      //   checked: false,
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
      //   checked: false,
      //   like: true,
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
      // {
      //   activityClass: "attractions",
      //   day: "",
      //   checked: false,
      //   prefecture: "hokkaido",
      //   location: { lat: 43.090831, lng: 144.210956 },
      //   name: "testAttraction3",
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
      //   rating: 2.9,
      // },
    ],
    hotels: [
      // {
      //   activityClass: "hotels",
      //   day: "",
      //   checked: false,
      //   prefecture: "hokkaido",
      //   location: { lat: 41.87144, lng: 140.467568 },
      //   name: "testHotels3",
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
      //   rating: 3.2,
      // },
    ],
  },
};

export default initialState;
