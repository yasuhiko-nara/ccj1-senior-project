import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import List from "../components/List";
import CheckBox from "../components/CheckBox";

const ListPage = () => {
  const selectedActivities = useSelector(
    (store) => store.travels.selectedActivities
  );

  return (
    <>
      <CheckBox />
      <List selectedActivities={selectedActivities} />
    </>
  );
};

export default ListPage;
