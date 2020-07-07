import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { get_initial_status } from "../redux/travels/action";
// import List from "../components/List";

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

  const initialState = JSON.parse(props.data);
  const dispatch = useDispatch();
  dispatch(get_initial_status(initialState));

  return (
    <>
      <div>
        aaaa
        <h1 className="a">ddd</h1>
      </div>
    </>
  );
};

export default Index;
