import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Day from "./Day";

export default function Schedules() {
  const schedulesByDay = useSelector((state) => {
    const schedules = state.travels.schedules;
    const result = {};
    for (const activity of schedules) {
      result[activity.day]
        ? result[activity.day].push(activity)
        : (result[activity.day] = [activity]);
    }
    return result;
  });
  return (
    <>
      {Object.keys(schedulesByDay).map((day) => (
        <Day day={day} schedules={schedulesByDay[day]} />
      ))}
    </>
  );
}
