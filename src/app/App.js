import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlarmDetailsInput from "../common/components/Alarm/AlarmAddForm/AlarmAddForm";
import AlarmList from "../common/components/Alarm/AlarmList/AlarmList";
import AlarmMessage from "../common/components/Alarm/AlarmMessage/AlarmMessage";
import Clock from "../common/components/Clock/Clock";
import { isEqualTime } from "../common/utils/utils";
import { deleteAlarm } from "../features/alarm/actions";
import { updateTime } from "../features/clock/actions";
import { alarmModeMap, TIME_UPDATE_INTERVAL } from "../features/constants";

function App() {
  const dispatch = useDispatch();

  const { currentTime, clockMode, events } = useSelector(state => ({
    currentTime: state.clock.currentTime,
    clockMode: state.clock.mode,
    events: state.alarm.events
  }));

  function alertAlarm() {
    const eventsToAlert = events.filter(event => isEqualTime(currentTime, event.time));

    if (eventsToAlert.length === 0) return;

    eventsToAlert.forEach(({ mode, id, isActivated }) => {
      const alarmType = alarmModeMap[clockMode][mode];

      const isAlertNeeded = alarmType !== null;

      if (isAlertNeeded && isActivated) alert(alarmType);

      dispatch(deleteAlarm(id));
    });
  }

  const alertAlarmRef = useRef(alertAlarm);

  useEffect(() => {
    alertAlarmRef.current = alertAlarm;
  }, [currentTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTime());

      alertAlarmRef.current();
    }, TIME_UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Clock />
      <br />
      <AlarmDetailsInput />
      <br />
      <AlarmList />
      <br />
      <AlarmMessage />
    </>
  );
}

export default App;
