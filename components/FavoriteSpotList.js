import Carousel from "react-multi-carousel";
import Rating from "@material-ui/lab/Rating";

const FavoriteSpotList = (props) => {
  const spotsArr = props.spotsOfTargetPref;
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
      <h2>お気に入りの場所</h2>
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
