import { ADD_EVENT, DELETE_EVENT } from "./types";

export function addEvent(eventDetails) {
  return { type: ADD_EVENT, payload: eventDetails };
}

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id };
}
