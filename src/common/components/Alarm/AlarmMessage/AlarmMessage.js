import React from "react";
import { useSelector } from "react-redux";
import { getLocalTime } from "../../../utils/utils";
import { MESSAGE } from "../../../../constants";

function AlarmMessage() {
  const { time, note } = useSelector(state => state.alarm.latestEventDetails);

  return (
    <>
      <h1>{MESSAGE}</h1>
      {time && (
        <textarea
          value={`${getLocalTime(time)}\n${note}`}
          rows="5"
          cols="40"
          readOnly
        />
      )}
    </>
  );
}

export default AlarmMessage;
