import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlarmDetailsInput from "../common/components/Alarm/AlarmAddForm/AlarmAddForm";
import AlarmList from "../common/components/Alarm/AlarmList/AlarmList";
import Clock from "../common/components/Clock/Clock";
import { alertAlarm } from "../common/utils/utils";
import { updateTime } from "../features/clock/actions";
import { TIME_UPDATE_INTERVAL } from "../features/constants";

function App() {
  const dispatch = useDispatch();

  const { currentTime, clockMode, events } = useSelector(state => ({
    currentTime: state.clock.currentTime,
    clockMode: state.clock.mode,
    events: state.alarm.events
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTime());

      alertAlarm(currentTime, clockMode, events);
    }, TIME_UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [currentTime, clockMode, events]);

  return (
    <>
      <Clock/>
      <br/>
      <AlarmDetailsInput/>
      <br/>
      <AlarmList/>
    </>
  );
}

export default App;
