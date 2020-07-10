import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ScheduleOfADay from "./ScheduleOfADay";

export default function Schedules() {
  const schedules = useSelector((state) => state.travels.schedules);
  return (
    <>
      <ScheduleOfADay schedules={schedules} />
    </>
  );
}
