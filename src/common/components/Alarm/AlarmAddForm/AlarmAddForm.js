import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlarm } from "../../../../features/alarm/actions";
import { NORMAL, URGENT } from "../../../../features/constants";

function AlarmDetailsInput() {
  const dispatch = useDispatch();

  const [eventDetails, setEventDetails] = useState({ mode: NORMAL });

  function handleSubmit(ev) {
    ev.preventDefault();

    dispatch(addAlarm(eventDetails));
    setEventDetails({ mode: NORMAL });

    ev.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add alarm</h1>
      <label>
        Time:
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
      <br/>
      <label>
        Alarm mode:
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
      <br/>
      <label>
        Message:
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
      <br/>
      <button type="submit">Save</button>
    </form>
  );
}

export default AlarmDetailsInput;
