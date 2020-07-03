import axios from "axios";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

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
    <>
      <Button variant="contained" color="primary">
        LIST
      </Button>
      <div>
        aaaa
        <h1 className="a">ddd</h1>
      </div>
    </>
  );
};

export default Index;
