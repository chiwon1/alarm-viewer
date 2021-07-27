import React from "react";
import { useDispatch } from "react-redux";
import { deleteAlarm } from "../../../../features/alarm/actions";
import { DELETE, TURN_OFF } from "../../../../features/constants";
import { getLocalTime } from "../../../utils/utils";

function AlarmListDetails({ AlarmId, AlarmTime, AlarmMessage, AlarmMode }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(deleteAlarm(AlarmId));
  }

  return (
    <li>
      {getLocalTime(AlarmTime)}&nbsp;
      {AlarmMessage}&nbsp;
      ({AlarmMode})&nbsp;
      <button>{TURN_OFF}</button>&nbsp;
      <button onClick={handleDeleteClick}>{DELETE}</button>
    </li>
  );
}

export default AlarmListDetails;
