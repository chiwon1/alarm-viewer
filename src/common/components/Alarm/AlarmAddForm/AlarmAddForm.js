import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addAlarm } from "../../../../features/alarm/actions";
import { HEADING_CONSTANTS, LABEL_CONSTANTS, ALARM_MODE_CONSTANTS, BUTTON_CONSTANTS } from "../../../../constants";

function AlarmAddForm() {
  const dispatch = useDispatch();

  const [eventDetails, setEventDetails] = useState({
      mode: ALARM_MODE_CONSTANTS.NORMAL,
      isActivated: true,
    });

  function handleSubmit(ev) {
    ev.preventDefault();

    dispatch(addAlarm(eventDetails));

    setEventDetails({
      mode: ALARM_MODE_CONSTANTS.NORMAL,
      isActivated: true,
    });

    ev.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{HEADING_CONSTANTS.ALARM_ADD}</h1>
      <label>
        {LABEL_CONSTANTS.TIME}:
        <input
          required
          type="datetime-local"
          onChange={(ev) => (
            setEventDetails(prev => ({
              ...prev,
              time: (new Date(ev.target.value)).toISOString(),
            }))
          )}
        />
      </label>
      <label>
        {LABEL_CONSTANTS.ALARM_MODE}:
        <select
          onChange={(ev) => (
          setEventDetails(prev => ({
            ...prev,
            mode: ev.target.value,
          }))
        )}>
          <option value={ALARM_MODE_CONSTANTS.NORMAL}>{ALARM_MODE_CONSTANTS.NORMAL}</option>
          <option value={ALARM_MODE_CONSTANTS.URGENT}>{ALARM_MODE_CONSTANTS.URGENT}</option>
        </select>
      </label>
      <label>
        {LABEL_CONSTANTS.NOTE}:
        <input
          required
          onChange={(ev) => (
            setEventDetails(prev => ({
              ...prev,
              note: ev.target.value
            }))
          )}
        />
      </label>
      <button type="submit">{BUTTON_CONSTANTS.SAVE}</button>
    </form>
  );
}

export default AlarmAddForm;
