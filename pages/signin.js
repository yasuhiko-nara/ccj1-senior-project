import SignIn from "../components/SignIn";
import { useEffect } from "react";

const signInPage = () => {
  useEffect(() => {
    const a = async () => {
      const data = JSON.stringify(["data1", "data2", "data3"]);
      const opt = {
        method: "post",
        headers: {
          Authorization: process.env.Authorization,
        },
        url:
          "https://e2uo59wqde.execute-api.ap-northeast-1.amazonaws.com/savedRoot",
        data: data,
      };
      const res = await axios(opt);
      console.log("saved route data and this is the response", res.data);
    };
  }, []);

  return (
    <>
      <SignIn />
    </>
  );
};

export default signInPage;
