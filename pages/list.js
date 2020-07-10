import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import List from "../components/List";
import CheckBox from "../components/CheckBox";

const ListPage = () => {
  const status = useSelector((store) => store.users);
  console.log(status);
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
