import Item from "./item";
import { useSelector } from "react-redux";
import { Divider } from "material-ui";
import { get_locations } from "../redux/travels/action";

const list = () => {
  const Hokkaido = useSelector((store) => store.travels.hokkaido);
  const hotels = Hokkaido.hotels;

  return (
    <div>
      <Item
        image={hotels[0].image}
        name={hotels.name}
        reviews={hotels.reviews}
        rating={hotels.rating}
      />
    </div>
  );
};

export default list;
