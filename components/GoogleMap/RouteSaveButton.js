import axios from "axios";

import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

export default function () {
  const userLoginFlag = useSelector((state) => state.users.loginFlag);
  const userId = useSelector((state) => state.users.userId);
  const idToken = useSelector((state) => state.users.idToken);
  const currentDirection = useSelector(
    (state) => state.travels.currentDirection
  );
  const routeInfo = useSelector((state) => state.travels.routeInfo);
  const schedules = useSelector((state) => state.travels.schedules);
  const data = {
    action: "save",
    userId,
    schedules,
    route: routeInfo,
  };
  const saveRoute = useCallback(async () => {
    const opt = {
      method: "post",
      headers: {
        Authorization: idToken,
      },
      url: "/savedRoutes",
      data,
    };
    const res = await axios(opt);
    console.log("saved route data and this is the response", res.data);
  }, [data]);

  return (
    <>
      {userLoginFlag && currentDirection && (
        <Button variant="contained" color="primary" onClick={saveRoute}>
          ルート保存
        </Button>
      )}
    </>
  );
}
