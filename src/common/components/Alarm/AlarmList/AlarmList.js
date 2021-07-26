import React from "react";
import { useSelector } from "react-redux";
import { events } from "../../../../mock";
import { getLocalTime } from "../../../utils/dateUtils";


function AlarmList() {
  const { events } = useSelector(state => state.alarm);

  return (
    <>
      <h1>Alarm list</h1>
      <ol>
        {events.map((event, index) => (<li key={index}>{getLocalTime(event.time)} {event.message}</li>))}
      </ol>
    </>
  );
}

export default AlarmList;
