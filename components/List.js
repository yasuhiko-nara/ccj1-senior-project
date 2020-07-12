import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";

import Carousel from "react-multi-carousel";

import { Divider } from "material-ui";

const List = (props) => {
  const travels = useSelector((store) => store.travels);

  const selectedActivities = props.selectedActivities;
  let result = [];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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

  for (const key in selectedActivities) {
    if (selectedActivities[key]) {
      let tmp = travels[key].map((obj, i) => {
        if (i === 0) console.log(i);
        return (
          <Item
            image={obj.image}
            name={obj.name}
            reviews={obj.reviews}
            rating={obj.rationg}
            key={obj.name + i.toString()}
          />
        );
      });

      result.push(
        <div>
          <Carousel responsive={responsive}> {tmp}</Carousel>;
        </div>
      );
    }
  }

  return <div>{result}</div>;
};

export default List;
