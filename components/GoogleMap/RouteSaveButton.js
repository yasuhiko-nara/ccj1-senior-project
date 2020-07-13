import axios from "axios";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

export default function () {
  const userLoginFlag = useSelector((state) => state.users.loginFlag);
  const userId = useSelector((state) => state.users.userId);

  const saveRoute = useCallback(async () => {
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
  }, []);

  //   export async function getStaticProps() {
  //     const res = await axios.get(
  //       "https://ala5g0w56m.execute-api.ap-northeast-1.amazonaws.com/Rakutabi_API"
  //     );
  //     const data = JSON.stringify(res.data);
  //     return {
  //       props: {
  //         data,
  //       },
  //     };
  //   }

  return (
    <>
      {userLoginFlag && (
        <Button variant="contained" color="primary" onClick={saveRoute}>
          ルート保存
        </Button>
      )}
    </>
  );
}
