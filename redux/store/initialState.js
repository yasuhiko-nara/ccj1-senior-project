const initialState = {
  users: {},
  travels: {
    hokkaido: {
      restaurants: [
        {
          locations: { lat: 43.048583, lng: 141.318944 },
          name: "testRestaurants1",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 1.7,
        },
        {
          locations: { lat: 43.290157, lng: 141.974789 },
          name: "testRestaurants2",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 4.2,
        },
        {
          locations: { lat: 43.331995, lng: 145.607599 },
          name: "testRestaurants3",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 3.3,
        },
      ],
      attractions: [
        {
          locations: { lat: 43.279687, lng: 145.204944 },
          name: "testAttraction1",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 3.8,
        },
        {
          locations: { lat: 43.146834, lng: 144.863129 },
          name: "testAttraction2",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 1.1,
        },
        {
          locations: { lat: 43.090831, lng: 144.210956 },
          name: "testAttraction3",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 2.9,
        },
      ],
      hotels: [
        {
          locations: { lat: 45.105505, lng: 142.010715 },
          name: "testHotels1",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 4.1,
        },
        {
          locations: { lat: 42.691185, lng: 142.07773 },
          name: "testHotels2",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 2.6,
        },
        {
          locations: { lat: 41.87144, lng: 140.467568 },
          name: "testHotels3",
          image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          category: "",
          reviews: ["testtest", "testtesttesttest", "testtesttesttesttesttest"],
          rating: 3.2,
        },
      ],
    },
  },
};

export default initialState;
