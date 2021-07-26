import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTime } from "../../../features/clock/actions";
import { CURRENT_TIME_MESSAGE, TIME_UPDATE_INTERVAL } from "../../../features/constants";

function Clock() {
  const dispatch = useDispatch();

  const { currentTime } = useSelector(state => state.clock);

  useEffect(() => {
    setInterval(() => {
      dispatch(updateTime());
    }, TIME_UPDATE_INTERVAL);
  }, currentTime);

  return (
    <>
      <div>{CURRENT_TIME_MESSAGE}</div>
      <div>{currentTime}</div>
    </>
  );
}

export default Clock;
