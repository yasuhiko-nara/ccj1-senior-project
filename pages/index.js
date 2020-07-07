import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { get_initial_status } from "../redux/travels/action";
import List from "../components/List";
import CheckBox from "../components/CheckBox";

export async function getStaticProps() {
  const res = await axios.get(
    "https://ala5g0w56m.execute-api.ap-northeast-1.amazonaws.com/Rakutabi_API"
  );
  const data = JSON.stringify(res.data);
  return {
    props: {
      data,
    },
  };
}

const Index = (props) => {
  // const name = useSelector((store) => store.users.name);
  const selectedActivities = useSelector(
    (store) => store.travels.selectedActivities
  );
  const initialState = JSON.parse(props.data);
  const dispatch = useDispatch();
  dispatch(get_initial_status(initialState));

  return (
    <>
      <CheckBox />
      <List selectedActivities={selectedActivities} />
    </>
  );
};

export default Index;
