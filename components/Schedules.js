import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ScheduleOfADay from "./ScheduleOfADay";
import SingleLineGridList from "./SingleLineGridList";

export default function Schedules() {
  const schedules = useSelector((state) => state.travels.schedules);
  const routeInfo = useSelector((state) => state.travels.routeInfo);
  // ここで注意すべきは、scheduleのstateが変わるとrouteInfoのstateが変わらなくても再レンダーされてしまう。
  // つまり、本来ならdispatch(change_drection)のときだけ再レンダーされて欲しいが、
  // dispatch(select_plan)のときも、routeInfoが変更されていないにもかかわらず再レンダーされてしまう
  return (
    <>
      <ScheduleOfADay schedules={schedules} routeInfo={routeInfo} />
      <SingleLineGridList schedules={schedules} routeInfo={routeInfo} />
    </>
  );
}
