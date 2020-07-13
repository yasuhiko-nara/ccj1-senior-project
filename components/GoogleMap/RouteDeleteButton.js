import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { delete_schedules_and_route } from "../../redux/travels/action";
import Button from "@material-ui/core/Button";

export default function () {
  const dispatch = useDispatch();
  const deleteRoute = useCallback(() => {
    dispatch(delete_schedules_and_route());
  });

  return (
    <Button variant="contained" color="primary" onClick={deleteRoute}>
      ルート消去
    </Button>
  );
}
