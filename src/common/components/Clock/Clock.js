import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeClockMode } from "../../../features/clock/actions";
import { CURRENT_TIME_MESSAGE, NIGHT, NORMAL, VIBRATION } from "../../../features/constants";
import { getDay, getLocalTime } from "../../utils/utils";

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
      <h1>{CURRENT_TIME_MESSAGE}</h1>
      <div>{localTime} ({day})</div>
      <label>
        Clock mode:
        <select onChange={handleChange}>
          <option>{NORMAL}</option>
          <option>{VIBRATION}</option>
          <option>{NIGHT}</option>
        </select>
      </label>
      <br/>
    </>
  );
}

export default Clock;
