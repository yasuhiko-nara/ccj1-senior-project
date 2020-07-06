import Item from "./item";
import { useSelector, useDispatch } from "react-redux";

import { Divider } from "material-ui";

const List = () => {
  const Hokkaido = useSelector((store) => store.travels.hokkaido);
  const hotels = Hokkaido.hotels;
  const array = hotels.map((obj, i) => (
    <Item
      image={obj.image}
      name={obj.name}
      reviews={obj.reviews}
      rating={obj.rating}
      key={i.toString()}
    />
  ));

  return <div>{array}</div>;
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
