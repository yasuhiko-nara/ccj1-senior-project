import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

const FavoriteSpotList = (props) => {
  const userName = useSelector((state) => state.users.userName);
  const spotsArr = useSelector((state) => state.travels.favoritePlaces);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Typography gutterBottom>{userName}さんのお気に入りの場所</Typography>
      <Carousel responsive={responsive}>
        {spotsArr.map((spot, index) => (
          <div key={index} className="container">
            <img src={spot.image} />
            <p>{spot.name}</p>
            <Rating defaultValue={spot.rationg} />
          </div>
        ))}
      </Carousel>
      <style jsx>{`
        .container {
          margin: 50px;
        }
      `}</style>
    </>
  );
};

export default FavoriteSpotList;
