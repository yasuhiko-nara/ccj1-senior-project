import Item from "./item";
import { useSelector } from "react-redux";
import { Divider } from "material-ui";

const list = () => {
  const Hokkaido = useSelector((store) => store.travels.hokkaido);
  const hotels = Hokkaido.hotels;

  return (
    <div>
      <Item
        image={hotels[0].image}
        name={hotels[0].name}
        reviews={hotels[0].reviews}
        rating={hotels[0].rating}
      />
    </div>
  );
};

export default list;
