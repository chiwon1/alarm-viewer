import React from "react";
import { useDispatch } from "react-redux";
import { deleteAlarm, toggleAlarmActivation } from "../../../../features/alarm/actions";
import { getLocalTime } from "../../../utils/utils";
import { OFF, ON, TURN_OFF, TURN_ON, DELETE } from "../../../../constants";

function AlarmListDetails({ AlarmId, AlarmTime, AlarmMode, AlarmNote, IsAlarmActivated }) {
  const dispatch = useDispatch();

  function handleTurnOffClick() {
    dispatch(toggleAlarmActivation(AlarmId));
  }

  function handleDeleteClick() {
    dispatch(deleteAlarm(AlarmId));
  }

  return (
    <li>
      {getLocalTime(AlarmTime)}&nbsp;
      {AlarmNote}&nbsp;
      ({AlarmMode})&nbsp;
      {IsAlarmActivated ? `(${ON})` : `(${OFF})`}&nbsp;
      <button onClick={handleTurnOffClick}>{IsAlarmActivated ? TURN_OFF : TURN_ON}</button>&nbsp;
      <button onClick={handleDeleteClick}>{DELETE}</button>
    </li>
  );
}

export default AlarmListDetails;
