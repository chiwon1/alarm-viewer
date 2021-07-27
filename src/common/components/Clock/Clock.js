import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeClockMode } from "../../../features/clock/actions";
import { getDay, getLocalTime } from "../../utils/utils";
import { CURRENT_TIME, CLOCK_MODE, NORMAL, VIBRATION, NIGHT } from "../../../constants";

function Clock() {
  const dispatch = useDispatch();

  const { currentTime } = useSelector(state => state.clock);

  const localTime = getLocalTime(currentTime);
  const day = getDay(currentTime);

  function handleChange(ev) {
    dispatch(changeClockMode(ev.target.value));
  }

  return (
    <>
      <h1>{CURRENT_TIME}</h1>
      <div>{localTime} ({day})</div>
      <label>
        {CLOCK_MODE}:
        <select onChange={handleChange}>
          <option>{NORMAL}</option>
          <option>{VIBRATION}</option>
          <option>{NIGHT}</option>
        </select>
      </label>
      <br />
    </>
  );
}

export default Clock;
