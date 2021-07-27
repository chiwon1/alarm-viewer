import React from "react";
import { useSelector } from "react-redux";
import AlarmListDetails from "../AlarmListDetails/AlarmListDetails";

function AlarmList() {
  const { events } = useSelector(state => state.alarm);

  return (
    <>
      <h1>Alarm list</h1>
      <ol>
        {events.map(({ id, time, message, mode}) => (
          <AlarmListDetails
            key={id}
            AlarmTime={time}
            AlarmMessage={message}
            AlarmMode={mode}
          />
        ))}
      </ol>
    </>
  );
}

export default AlarmList;
