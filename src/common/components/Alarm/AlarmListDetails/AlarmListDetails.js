import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlarm, toggleAlarmActivation } from "../../../../features/alarm/actions";
import { getLocalTime } from "../../../utils/utils";
import { OFF, ON, TURN_OFF, TURN_ON, DELETE } from "../../../../constants";

function AlarmListDetails({ AlarmId }) {
  const dispatch = useDispatch();

  const { time, note, mode, isActivated } = useSelector(state => state.alarm.events[AlarmId]);

function handleTurnOffClick() {
    dispatch(toggleAlarmActivation(AlarmId));
  }

  function handleDeleteClick() {
    dispatch(deleteAlarm(AlarmId));
  }

  return (
    <li>
      {getLocalTime(time)}&nbsp;
      {note}&nbsp;
      ({mode})&nbsp;
      {isActivated ? `(${ON})` : `(${OFF})` }&nbsp;
      <button onClick={handleTurnOffClick}>{isActivated ? TURN_OFF : TURN_ON}</button>&nbsp;
      <button onClick={handleDeleteClick}>{DELETE}</button>
    </li>
  );
}

export default AlarmListDetails;
