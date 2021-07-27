import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlarm } from "../../../../features/alarm/actions";
import { ALARM_ADD, ALARM_MODE, MESSAGE, NORMAL, SAVE, TIME, URGENT } from "../../../../features/constants";

function AlarmDetailsInput() {
  const dispatch = useDispatch();

  const [eventDetails, setEventDetails] = useState({
      mode: NORMAL,
      isActivated: true,
    });

  function handleSubmit(ev) {
    ev.preventDefault();

    dispatch(addAlarm(eventDetails));

    setEventDetails({
      mode: NORMAL,
      isActivated: true,
    });

    ev.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{ALARM_ADD}</h1>
      <label>
        {TIME}:
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
      <br />
      <label>
        {ALARM_MODE}:
        <select
          onChange={(ev) => (
          setEventDetails(prev => ({
            ...prev,
            mode: ev.target.value,
          }))
        )}>
          <option value={NORMAL}>{NORMAL}</option>
          <option value={URGENT}>{URGENT}</option>
        </select>
      </label>
      <br />
      <label>
        {MESSAGE}:
        <input
          required
          onChange={(ev) => (
            setEventDetails(prev => ({
              ...prev,
              message: ev.target.value
            }))
          )}
        />
      </label>
      <br />
      <button type="submit">{SAVE}</button>
    </form>
  );
}

export default AlarmDetailsInput;
