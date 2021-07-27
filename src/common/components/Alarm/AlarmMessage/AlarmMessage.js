import React from "react";
import { useSelector } from "react-redux";
import { MESSAGE } from "../../../../features/constants";
import { getLocalTime } from "../../../utils/utils";

function AlarmMessage() {
  const { time, message } = useSelector(state => state.alarm.latestEventDetails);

  return (
    <>
      <h1>{MESSAGE}</h1>
      {time && (
        <textarea
          value={`${getLocalTime(time)}\n${message}`}
          rows="5"
          cols="40"
          readOnly
        />
      )}
    </>
  );
}

export default AlarmMessage;
