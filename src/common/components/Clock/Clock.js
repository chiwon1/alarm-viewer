import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeClockMode } from "../../../features/clock/actions";
import { getLocalTime, getDay } from "../../utils/utils";
import { HEADING_CONSTANTS, LABEL_CONSTANTS, CLOCK_MODE_CONSTANTS } from "../../../constants";

function Clock() {
  const dispatch = useDispatch();

  const { currentTime } = useSelector(state => state.clock);

  const { localTime, day } = useMemo(() => ({
    localTime: getLocalTime(currentTime),
    day: getDay(currentTime)
  }), [currentTime]);

  function handleChange(ev) {
    dispatch(changeClockMode(ev.target.value));
  }

  return (
    <>
      <h1>{HEADING_CONSTANTS.CURRENT_TIME}</h1>
      <div>{localTime}({day})</div>
      <label>
        {LABEL_CONSTANTS.CLOCK_MODE}:
        <select onChange={handleChange}>
          <option>{CLOCK_MODE_CONSTANTS.NORMAL}</option>
          <option>{CLOCK_MODE_CONSTANTS.VIBRATION}</option>
          <option>{CLOCK_MODE_CONSTANTS.NIGHT}</option>
        </select>
      </label>
    </>
  );
}

export default Clock;
