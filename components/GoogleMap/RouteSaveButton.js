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
  const schedules = useSelector((state) => state.travels.schedules);

  const saveRoute = useCallback(async () => {
    const data = {
      action: "save",
      userId,
      route: [currentDirection, ...schedules],
      // AWSラムダの設計都合上、一つのrouteとして配列を用意している。
      // そのため、route[0]に地図上にレンダーするためのcurrentDirectionを埋め込み、route.slice(1)にスライダー表示のためのscheduleを入れている
    };
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
  }, []);

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
