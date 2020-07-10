import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { get_initial_status } from "../redux/travels/action";
import Map from "../components/GoogleMap/GoogleMap";
import CheckBox from "../components/CheckBox";
import Schedules from "../components/Schedules";

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
  const testNum = useSelector((store) => store.users.testNum);
  const initialState = JSON.parse(props.data);
  const dispatch = useDispatch();
  dispatch(get_initial_status(initialState));
  console.log(testNum);

  return (
    <>
      <div>
        <h1 className="a">RAKUTABI</h1>
        <CheckBox />
        <Map />
        <Schedules />
      </div>
    </>
  );
};

export default Index;
