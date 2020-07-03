import axios from "axios";
import { useSelector } from "react-redux";
//import "../style.scss";

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  const data = JSON.stringify(res.data);
  return {
    props: {
      data,
    },
  };
}

const Index = (props) => {
  const name = useSelector((store) => store.users.name);

  const array = props.data;

  const result = JSON.parse(array).map((data) => data.id);

  return (
    <div>
      <h1>ddd</h1>
    </div>
  );
};

export default Index;
