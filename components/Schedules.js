import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ScheduleOfADay from "./ScheduleOfADay";
import SingleLineGridList from "./SingleLineGridList";

export default function Schedules() {
  const schedules = useSelector((state) => state.travels.schedules);
  const routeInfo = useSelector((state) => state.travels.routeInfo);
  return (
    <>
      <ScheduleOfADay schedules={schedules} routeInfo={routeInfo} />
      {/* <SingleLineGridList schedules={schedules} routeInfo={routeInfo} /> */}
    </>
  );
}
