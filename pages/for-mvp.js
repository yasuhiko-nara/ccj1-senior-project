import List from "../components/List";
import axios from "axios";
import { useEffect } from "react";
import CheckBox from "../components/CheckBox";
import { get_initial_status, toggle_display } from "../redux/travels/action";
import { useSelector, useDispatch } from "react-redux";
import SelectPlace from "../components/SelectPlace";
import TestMap from "../components/GoogleMap/GoogleMap4";
import Button from "@material-ui/core/Button";

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

const mvp = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initialState = JSON.parse(props.data);
    console.log(initialState);
    dispatch(get_initial_status(initialState));
  }, []);

  const selectedActivities = useSelector(
    (store) => store.travels.selectedActivities
  );
  const mapToList = useSelector((store) => store.travels.toggleDisplay);

  return (
    <>
      {/* <SelectPlace /> */}
      <CheckBox />
      <Button onClick={() => dispatch(toggle_display())} variant="contained">
        toggle
      </Button>
      {mapToList ? (
        <TestMap />
      ) : (
        <List selectedActivities={selectedActivities} />
      )}
    </>
  );
};

export default mvp;
