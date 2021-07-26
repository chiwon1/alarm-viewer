import { ADD_EVENT } from "./types";

export function addEvent(eventDetails) {
  return { type: ADD_EVENT, payload: eventDetails }
}
