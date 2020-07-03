// <<<<<<< HEAD
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import Link from "next/link";
// import { startClock } from "../actions";
// import Examples from "../components/examples";

// const Index = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(startClock());
//   }, [dispatch]);
// =======
import axios from "axios";
import { useSelector } from "react-redux";

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
// >>>>>>> 8790187e34e73c0edebc56209c232b3b82bc7871

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
