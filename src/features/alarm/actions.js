import { ADD_ALARM, DELETE_ALARM } from "./types";

export function addAlarm(eventDetails) {
  return { type: ADD_ALARM, payload: eventDetails };
}

export function deleteAlarm(id) {
  return { type: DELETE_ALARM, id };
}
