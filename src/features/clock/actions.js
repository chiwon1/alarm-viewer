import { CHANGE_CLOCK_MODE, UPDATE_TIME } from "./types";

export function updateTime() {
  return { type: UPDATE_TIME };
}

export function changeClockMode(mode) {
  return { type: CHANGE_CLOCK_MODE, payload: mode };
}
