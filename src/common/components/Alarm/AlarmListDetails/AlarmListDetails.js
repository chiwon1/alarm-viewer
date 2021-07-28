import React, { useMemo } from "react";
import { useDispatch } from "react-redux";

import { deleteAlarm, toggleAlarmActivation } from "../../../../features/alarm/actions";
import { getLocalTime, getDay } from "../../../utils/utils";
import { ON, OFF, BUTTON_CONSTANTS } from "../../../../constants";

function AlarmListDetails({ AlarmId, AlarmTime, AlarmMode, AlarmNote, IsAlarmActivated }) {
  const dispatch = useDispatch();

  const { localTime, day } = useMemo(() => ({
    localTime: getLocalTime(AlarmTime),
    day: getDay(AlarmTime)
  }), [AlarmTime]);

  function handleTurnOffClick() {
    dispatch(toggleAlarmActivation(AlarmId));
  }

  function handleDeleteClick() {
    dispatch(deleteAlarm(AlarmId));
  }

  return (
    <li>
      {localTime}
      ({day})
      {AlarmNote}
      ({AlarmMode})
      {IsAlarmActivated ? `(${ON})` : `(${OFF})`}
      <button onClick={handleTurnOffClick}>
        {IsAlarmActivated ? BUTTON_CONSTANTS.TURN_OFF : BUTTON_CONSTANTS.TURN_ON}
      </button>
      <button onClick={handleDeleteClick}>
        {BUTTON_CONSTANTS.DELETE}
      </button>
    </li>
  );
}

export default AlarmListDetails;
