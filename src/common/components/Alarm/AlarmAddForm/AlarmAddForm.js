import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../../../features/alarm/actions";

function AlarmDetailsInput() {
  const dispatch = useDispatch();

  const [eventDetails, setEventDetails] = useState({ mode: "Normal" });

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addEvent(eventDetails));
    setEventDetails({ mode: "Normal" });

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add alarm</h1>
      <label>
        Time:
        <input
          required
          type="datetime-local"
          onChange={(event) => (
            setEventDetails(prev => ({
              ...prev,
              time: (new Date(event.target.value)).toISOString(),
            }))
          )}
        />
      </label>
      <br/>
      <label>
        Alarm mode:
        <select
          onChange={(event) => (
          setEventDetails(prev => ({
            ...prev,
            mode: event.target.value,
          }))
        )}>
          <option value="Normal">Normal</option>
          <option value="Urgent">Urgent</option>
        </select>
      </label>
      <br/>
      <label>
        Message:
        <input
          required
          onChange={(event) => (
            setEventDetails(prev => ({
              ...prev,
              message: event.target.value
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
