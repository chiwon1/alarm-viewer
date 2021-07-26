import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTime } from "../../../features/clock/actions";
import { CURRENT_TIME_MESSAGE, TIME_UPDATE_INTERVAL } from "../../../features/constants";
import { getDay, getLocalTime } from "../../utils/dateUtils";


function Clock() {
  const dispatch = useDispatch();

  const { currentTime } = useSelector(state => state.clock);

  useEffect(() => {
    const timeUpdateInterval = setInterval(() => {
      dispatch(updateTime());
    }, TIME_UPDATE_INTERVAL);

    function handleClearInterval() {
      clearInterval(timeUpdateInterval);
    }

    return handleClearInterval;
  }, [currentTime]);

  const localTime = getLocalTime(currentTime);
  const day = getDay(currentTime);

  return (
    <>
      <h1>{CURRENT_TIME_MESSAGE}</h1>
      <div>{localTime} ({day})</div>
      <label>
        Clock mode:
        <select>
          <option>Normal</option>
          <option>Vibration</option>
          <option>Night</option>
        </select>
      </label>
      <br/>
    </>
  );
}

export default Clock;
