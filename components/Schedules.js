import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Day from "./Day";

export default function Schedules() {
  const schedules = useSelector((state) => state.travels.schedules);
  return (
    <>
      <Day schedules={schedules} />
    </>
  );
}
