import Item from "./item";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

import { Divider } from "material-ui";

const List = (props) => {
  const travels = useSelector((store) => store.travels);
  const selectedActivities = props.selectedActivities;
  let result = [];
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToscroll: 1,
  };
  for (const key in selectedActivities) {
    if (selectedActivities[key]) {
      let tmp = travels[key].map((obj, i) => (
        <Item
          image={obj.image}
          name={obj.name}
          reviews={obj.reviews}
          rating={obj.rating}
          key={i.toString()}
        />
      ));

      result.push(
        <Slider style={{ marginBottom: 20 }} {...setting}>
          {tmp}
        </Slider>
      );
    }
  }

  return <div>{result}</div>;
};

{
  /* <Item
        image={hotels[0].image}
        name={hotels[0].name}
        reviews={hotels[0].reviews}
        rating={hotels[0].rating}
      /> */
}

export default List;
