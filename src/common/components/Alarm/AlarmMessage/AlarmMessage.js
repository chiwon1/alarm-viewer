import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { getLocalTime, getDay } from "../../../utils/utils";
import { HEADING_CONSTANTS } from "../../../../constants";

function AlarmMessage() {
  const { time, note } = useSelector(state => state.alarm.latestEventDetails);

  const { localTime, day } = useMemo(() => ({
    localTime: getLocalTime(time),
    day: getDay(time)
  }), [time]);

  return (
    <>
      <h1>{HEADING_CONSTANTS.MESSAGE}</h1>
      {time && (
        <textarea
          value={`${localTime}(${day})\n${note}`}
          rows="5"
          cols="40"
          readOnly
        />
      )}
    </>
  );
}

export default AlarmMessage;
