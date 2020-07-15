import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

export default function () {
  const userLoginFlag = useSelector((state) => state.users.loginFlag);
  const userId = useSelector((state) => state.users.userId);
  const idToken = useSelector((state) => state.users.idToken);

  const saveRoute = useCallback(async () => {
    const data = JSON.stringify(["test1", "test2", "test3"]);
    const opt = {
      method: "post",
      headers: {
        Authorization: idToken,
      },
      url: "/savedRoot",
      data: data,
    };
    const res = await axios(opt);
    console.log("saved route data and this is the response", res.data);
  }, []);

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
