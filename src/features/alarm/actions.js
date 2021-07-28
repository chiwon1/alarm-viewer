import { ADD_ALARM, SAVE_LATEST_ALARM, DELETE_ALARM, TOGGLE_ALARM_ACTIVATION } from "./types";

export function addAlarm(eventDetails) {
  return { type: ADD_ALARM, payload: eventDetails };
}

export function saveLatestAlarm(id) {
  return { type: SAVE_LATEST_ALARM, id };
}

export function deleteAlarm(id) {
  return { type: DELETE_ALARM, id };
}

export function toggleAlarmActivation(id) {
  return { type: TOGGLE_ALARM_ACTIVATION, id };
}
