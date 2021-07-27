import React from "react";
import { useSelector } from "react-redux";
import AlarmListDetails from "../AlarmListDetails/AlarmListDetails";

function AlarmList() {
  const { events } = useSelector(state => state.alarm);

  return (
    <>
      <h1>Alarm list</h1>
      <ol>
        {events.map(({ id }) => <AlarmListDetails key={id} AlarmId={id} />)}
      </ol>
    </>
  );
}

export default AlarmList;
