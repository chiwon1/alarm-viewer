import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeClockMode, updateTime } from "../../../features/clock/actions";
import { CURRENT_TIME_MESSAGE, NIGHT, NORMAL, TIME_UPDATE_INTERVAL, VIBRATION } from "../../../features/constants";
import { getDay, getLocalTime } from "../../utils/dateUtils";


function Clock() {
  const dispatch = useDispatch();

  const { currentTime } = useSelector(state => state.clock);

  useEffect(() => {
    const timeUpdateInterval = setInterval(() => {
      dispatch(updateTime());
    }, TIME_UPDATE_INTERVAL);

    return () => clearInterval(timeUpdateInterval);
  }, []);

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
