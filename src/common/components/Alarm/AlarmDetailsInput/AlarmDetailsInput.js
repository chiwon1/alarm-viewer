import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../../../features/alarm/actions";

function AlarmDetailsInput() {
  const dispatch = useDispatch();

  const [eventDetails, setEventDetails] = useState({});

  function onClickAddEvent() {
    dispatch(addEvent(eventDetails));
  }

  return (
    <>
      <h1>Add alarm</h1>
      <label>
        Time:
        <input
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
        <select onChange={(event) => (
          setEventDetails(prev => ({
            ...prev,
            mode: event.target.value,
          }))
        )}>
          <option>Normal</option>
          <option>Urgent</option>
        </select>
      </label>
      <br/>
      <label>
        Message:
        <input
          onChange={(event) => (
            setEventDetails(prev => ({
              ...prev,
              message: event.target.value
            }))
          )}
        />
      </label>
      <br/>
      <button onClick={onClickAddEvent}>Save</button>
    </>
  );
}

export default AlarmDetailsInput;
